import { useContext, useState } from "react";
import Footer from "../../Layouts/Footer";
import Header from "../../Layouts/Header";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { sendEmailVerification, updateProfile } from "firebase/auth";
import auth from "../../Firebase/firebase.config";

const Registration = () => {

    const { createUser } = useContext(AuthContext)

    const [registerSuccess, setRegisterSuccess] = useState();
    const [registerError, setRegisterError] = useState();
    const [showPassword, setShowPassword] = useState(true);

    const navigate = useNavigate()


    const handleRegistration = e => {
        e.preventDefault()
        const form = new FormData(e.currentTarget);
        const name = form.get('name');
        const email = form.get('email');
        const password = form.get('password');
        const photo = form.get('photo')
        console.log(name, email, password)

        const specialCorrecterPassword = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/;
        const emailValidation = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
        setRegisterSuccess('')



        if (!specialCorrecterPassword.test(password)) {
            return setRegisterError(toast.error('Password must have Capital Letter, Number and Special Correcter'))
        }
        if (password.length < 6) {
            return setRegisterError(toast.error('Password must be more than 6'))
        }

        if (!emailValidation.test(email)) {
            return setRegisterError(toast.error('Invalid Email'))
        }


        else {


            createUser(email, password)

                .then(result => {
                    // setRegisterSuccess(toast.success('Created Account Successfully'))
                    console.log(result.user, 'got it baby')


                    // send Email verifications
                    sendEmailVerification(auth.currentUser)
                        .then(() => toast.success('Email Verification sent'))
                        .catch(error => console.log(error.message, 'email verification sent issue'))

                    // update profile
                    updateProfile(auth.currentUser, {
                        displayName: name,
                        photoURL: photo,
                    })
                        .then(() => console.log('updated name'))
                        .catch(error => console.log('display name error', error.message))
                    console.log('auth and current user', auth.currentUser)
                    navigate('/')
                })


                .catch(error => {
                    console.log(error.message)

                    setRegisterError(toast.error('Email Already Used'));


                })
        }
        e.target.reset('')

    }
    return (
        <div>
            <Header></Header>
            {/* Registration Form */}
            <div className="card shrink-0 w-full max-w-lg mx-auto mb-12 mt-5 shadow-2xl bg-orange-100 py-8 my-5">
                <h2 className="text-3xl font-bold text-center">Create Account Now</h2>
                <hr className="w-16 mx-auto border-orange-500 h-1 bg-orange-500 mt-5" />
                <form onSubmit={handleRegistration} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" placeholder="Full Name" name="name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" placeholder="Email Address" name="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <input type="text" placeholder="Photo URL" name="photo" className="input input-bordered" required />
                    </div>
                    <div className="form-control relative">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type={showPassword ? 'password' : 'text'} placeholder="Enter Password" name="password" className="input input-bordered " required />
                        <span onClick={() => setShowPassword(!showPassword)} className="absolute right-2 top-12 text-2xl">
                            {
                                showPassword ? <FaEyeSlash /> : <FaEye />
                            }
                        </span>
                    </div>
                    <div className="form-control mt-5">
                        <button className="btn btn-warning">Register Now</button>
                    </div>

                    <div>
                        <p className="text-center py-2">Already a Member? <Link to='/login' className="link text-orange-500">Login Now</Link></p>
                        <p className="hidden">{registerError}</p>
                        <p className="hidden">{registerSuccess}</p>

                    </div>
                </form>
                <ToastContainer />


            </div>
            <Footer></Footer>

        </div>
    );
};

export default Registration;