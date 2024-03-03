import logo from '../assets/mainLogo.png'
const Footer = () => {
    return (
        <div className=' bg-base-200'>
            <footer className="footer px-5 py-10 text-base-content max-w-6xl mx-auto">
                <aside>
                    <img src={logo} alt="" className='w-52' />
                    <p className='text-xl'>Corporate Hero Ltd.<br />Providing Corporate Events with Success!</p>
                    <p>Copyright 2024 CorporateHero, All Rights Reserved</p>
                </aside>
                <nav>
                    <h6 className="footer-title">Services</h6>
                    <a className="link link-hover">Event Management</a>
                    <a className="link link-hover">Online Course</a>
                    <a className="link link-hover">Business Analytics</a>
                    <a className="link link-hover">Career Development</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Company</h6>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Events</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Legal</h6>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </nav>
            </footer>
        </div>
    );
};

export default Footer;