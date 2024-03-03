import { useLoaderData } from "react-router-dom";
import Footer from "../Layouts/Footer";
import Header from "../Layouts/Header";
import Sliders from "../Layouts/Sliders";
import EventDetails from "../Layouts/Events/EventDetails";
import AboutSection from "../Layouts/AboutSection";
import Team from "../Layouts/Team";

const Home = () => {
    const events = useLoaderData();
    return (
        <div>
            <Header></Header>
            <Sliders></Sliders>
            <div className="max-w-6xl mx-auto my-12 px-5">
                <h3 className="text-center font-bold text-5xl">Our Events</h3>
                <p className="text-center text-gray-600 my-3">Latest Events that makes your knowledge better than others!</p>
                <hr className="w-16 mx-auto border-orange-500 h-1 bg-orange-500" />

                <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-5 my-8">
                    {
                        events.map(event => <EventDetails
                            key={event.id}
                            event={event}
                        ></EventDetails>)
                    }
                </div>
            </div>
            {/* about us section */}
            <div className="py-5 bg-orange-200 px-5">
                <AboutSection></AboutSection>
            </div>
            {/* team */}
            <div className="px-5">
                <Team></Team>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Home;