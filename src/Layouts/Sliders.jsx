
import { Link } from 'react-router-dom';
import slider1 from '../assets/slider-3.jpg'
import slider2 from '../assets/slider-4.jpg'
import slider3 from '../assets/slider-5.jpg'
import { FaCalendarAlt } from 'react-icons/fa';


const Sliders = () => {

    return (
        <div>
            <div className="carousel w-full">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src={slider1} className="w-full lg:h-auto h-screen" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <div data-aos="fade-up" data-aos-duration='4000' className='md:p-5 p-2 bg-black bg-opacity-40 rounded-md text-center'>
                            <h2 className='lg:text-5xl md:text-2xl  font-bold text-center shadow-md text-white my-2'>Biggest Event in Dhaka, Bangladesh</h2>
                            <p className='text-center text-white lg:text-xl my-5'>Do not miss out! Register TODAY and discover our latest offers!
                            </p>
                            <Link to='/'> <button className='btn btn-warning text-center my-2'><FaCalendarAlt />  Book Event</button></Link>

                        </div>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src={slider2} className="w-full lg:h-auto h-screen" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <div data-aos="fade-up" data-aos-duration='4000' className='p-5 bg-black bg-opacity-40 rounded-md text-center'>
                            <h2 className='text-5xl font-bold text-center shadow-md text-white my-2'>Amazing Event in Noakhali, Bangladesh</h2>
                            <p className='text-center text-white text-xl my-5'>Do not miss out! Register TODAY and discover our latest offers!
                            </p>
                            <Link to='/'> <button className='btn btn-warning text-center my-2'><FaCalendarAlt />  Book Event</button></Link>

                        </div>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src={slider3} className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <div data-aos="fade-up" data-aos-duration='4000' className='p-5 bg-black bg-opacity-40 rounded-md text-center'>
                            <h2 className='text-5xl font-bold text-center shadow-md text-white my-2'>Wonderful Event in Chattogram, Bangladesh</h2>
                            <p className='text-center text-white text-xl my-5'>Do not miss out! Register TODAY and discover our latest offers!
                            </p>
                            <Link to='/'> <button className='btn btn-warning text-center my-2'><FaCalendarAlt />  Book Event</button></Link>

                        </div>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Sliders;