import { Link, useLocation, useNavigate } from "react-router-dom";
import Footer from "../../Layouts/Footer";
import Header from "../../Layouts/Header";
import { useContext, useRef, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { ToastContainer, toast } from 'react-toastify';
import { AuthContext } from "../AuthProvider/AuthProvider";

const Login = () => {
    const [showPassword, setShowPassword] = useState(true);
    const { loginUser, passwordReset, googleSignIn, githubSignIn } = useContext(AuthContext);
    const navigate = useNavigate()
    const location = useLocation()
    const emailRef = useRef()


    console.log('state location', location.state)



    const handleLogin = e => {
        e.preventDefault()
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');

        loginUser(email, password)
            .then(result => {
                toast.success('Login Successfully')
                console.log('login success', result.user)
                navigate(location?.state ? location.state : '/')
            })
            .catch(error => {
                toast.error('User Invalid')
                console.log('login error', error.message)
            })
        e.target.reset('')
    }


    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(() => console.log('google signed'))
            .catch(() => console.log('google sign error'))
    }


    const handleGithubSignIn = () => {
        githubSignIn()
            .then(() => console.log('Github signed'))
            .catch(() => console.log('Github sign error'))
    }












    const handleForgetPassword = () => {
        const emailCurrentRef = emailRef.current.value;
        if (!emailCurrentRef) {
            toast.error('Please provide your Email')
        }
        passwordReset(emailCurrentRef)
            .then(() => {
                console.log('password reset')
                toast.success('Password reset email sent')
            })
            .catch(() => console.log('password reset issue'))
    }

    return (
        <div>
            <Header></Header>
            <div className="card shrink-0 w-full max-w-lg mx-auto mb-12 mt-5 shadow-2xl bg-base-100 my-8 py-5">
                <h2 className="text-3xl font-bold text-center">Login Your Account</h2>
                <hr className="w-16 mx-auto border-orange-500 h-1 bg-orange-500 mt-5" />
                <form onSubmit={handleLogin} className="card-body">

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input ref={emailRef} type="email" placeholder="Email Address" name="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control relative">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type={showPassword ? 'password' : 'text'} placeholder="Enter Password" name="password" className="input input-bordered" required />
                        <span onClick={() => setShowPassword(!showPassword)} className="absolute right-2 top-12 text-xl">
                            {
                                showPassword ? <FaEyeSlash /> : <FaEye />
                            }
                        </span>


                        <label className="label">
                            <a onClick={handleForgetPassword} href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-5">
                        <button className="btn btn-warning">Login Now</button>
                    </div>
                    <p className="text-center py-2">Are you a new member? <Link to='/registration' className="link text-orange-500">Register Now</Link></p>
                    <p className="hidden">{ }</p>
                    <p className="hidden">{ }</p>
                    {/* social login */}
                    <div className="flex items-center gap-5 mx-auto">
                        <Link onClick={() => handleGoogleSignIn()} className="btn btn-outline">Google SignIn</Link>
                        <Link onClick={handleGithubSignIn} className="btn btn-outline">Github SignIn</Link>

                    </div>
                </form>
                <ToastContainer />
            </div>
            <Footer></Footer>
        </div >

    );
};

export default Login;