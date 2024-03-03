import AboutSection from "../../Layouts/AboutSection";
import Footer from "../../Layouts/Footer";
import Header from "../../Layouts/Header";

const About = () => {
    return (
        <div>
            <Header></Header>
            <div className="my-12 pb-5">
                <AboutSection></AboutSection>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default About;