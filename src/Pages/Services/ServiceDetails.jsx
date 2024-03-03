import { useLoaderData, useParams } from "react-router-dom";
import Footer from "../../Layouts/Footer";
import Header from "../../Layouts/Header";
import { FaLocationArrow, FaUser } from "react-icons/fa";

const ServiceDetails = () => {
    const { id } = useParams();
    const events = useLoaderData();
    const eventId = parseInt(id);
    const singleEvent = events.find(event => event.id === eventId);
    console.log(singleEvent)
    return (
        <div>
            <Header></Header>
            <div className="grid md:grid-cols-2 gap-5 mt-12 mb-40 py-5 max-w-6xl mx-auto">
                <img data-aos="fade-up" src={singleEvent.event_image} alt="event-image" className="rounded-md" />
                <div>
                    <h2 data-aos="fade-up" data-aos-duration='4000' className="text-3xl font-semibold">{singleEvent.event_name}</h2>
                    <div className="flex items-center justify-start gap-5 my-2">
                        <p data-aos="fade-up" data-aos-duration='4000' className="text-xl flex items-center"><FaUser className="mr-2 text-orange-500" />{singleEvent.event_host_name}</p>
                        <p data-aos="fade-up" data-aos-duration='4000' className="text-xl flex items-center"><FaLocationArrow className="mr-2 text-orange-500" />{singleEvent.event_place}</p>
                    </div>
                    <p data-aos="fade-up" data-aos-duration='4000' className="text-3xl font-warning my-4">${singleEvent.event_price}</p>
                    <p data-aos="fade-up" data-aos-duration='4000' className=" text-xl text-gray-600">{singleEvent.event_long_description}</p>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default ServiceDetails;