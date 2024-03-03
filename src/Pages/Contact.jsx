import Footer from "../Layouts/Footer";
import Header from "../Layouts/Header";

const Contact = () => {
    return (
        <div>
            <Header></Header>
            <div className="my-5 max-w-6xl mx-auto">
                <h3 className="text-center font-bold text-5xl">Contact Us</h3>
                <p className="text-center text-gray-600 my-3">Contact us via this form and ask your question, we will reach as soon as possible!</p>
                <hr className="w-16 mx-auto border-blue-500 h-1 bg-blue-500" />
                <div className="card shrink-0 w-full max-w-lg mx-auto mb-12 mt-5 shadow-2xl bg-base-100">
                    <form className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" placeholder="Enter Your Full Name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="Enter Your Email Address" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Phone</span>
                            </label>
                            <input type="tel" placeholder="Your Phone Number" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Questions</span>
                            </label>
                            <textarea name="message" id="message" placeholder="Enter Your Message" cols="30" rows="5"></textarea>
                        </div>

                        <div className="form-control mt-6">
                            <button className="btn btn-warning">SUBMIT</button>
                        </div>
                    </form>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Contact;