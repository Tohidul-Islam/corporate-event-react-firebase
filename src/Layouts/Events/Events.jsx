import { useLoaderData } from "react-router-dom";
import EventDetails from "./EventDetails";


const Events = () => {
    const events = useLoaderData();
    console.log(events)
    return (
        <div className="max-w-6xl mx-auto grid lg:grid-cols-3 md:grid-cols-2 gap-5 my-5">
            {
                events.map(event => <EventDetails
                    key={event.id}
                    event={event}
                ></EventDetails>)
            }

        </div>
    );
};

export default Events;