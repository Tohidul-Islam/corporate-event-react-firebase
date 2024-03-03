import { FaCalendarAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';


const EventDetails = ({ event }) => {

    const { id, event_image, event_name, event_short_description, event_price } = event;
    return (
        <div>
            <div data-aos="fade-up" data-aos-duration='4000' className="card  bg-base-100 shadow-xl">
                <figure><img src={event_image} alt="event img" /></figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {event_name}

                    </h2>
                    <p className="text-gray-600">{event_short_description}</p>
                    <p>${event_price}</p>
                    <Link to={`/services/${id}`} className="btn btn-md btn-outline w-40"><FaCalendarAlt />Book Now</Link>
                </div>
            </div>
        </div>
    );
};

export default EventDetails;
EventDetails.propTypes = {
    event: PropTypes.node
}