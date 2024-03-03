import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import Home from "../Pages/Home";
import Services from "../Pages/Services/Services";
import ServiceDetails from "../Pages/Services/ServiceDetails";
import Login from "../Authentication/Login/Login";
import Registration from "../Authentication/Registration/Registration";
import AllEvents from "../Pages/AllEvents/AllEvents";
import About from "../Pages/About/About";
import Contact from "../Pages/Contact";
import PrivateRoute from "./PrivateRoute";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();
const Router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('/events.json')
            },
            {
                path: '/services',
                element: <PrivateRoute><Services></Services></PrivateRoute>,
                loader: () => fetch('/events.json')
            },
            {
                path: '/services/:id',
                element: <PrivateRoute><ServiceDetails></ServiceDetails></PrivateRoute>,
                loader: () => fetch(`/events.json`)
            },
            {
                path: '/allEvents',
                element: <PrivateRoute><AllEvents></AllEvents></PrivateRoute>,
                loader: () => fetch('/events.json')
            },
            {
                path: '/about',
                element: <About></About>
            },
            {
                path: '/contact',
                element: <Contact></Contact>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/registration',
                element: <Registration></Registration>
            }
        ]
    }
])

export default Router;