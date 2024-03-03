import { FaAward, FaBook, FaBookOpen, FaCircle, FaCoffee, FaCube, FaMicrophone, FaShare, FaSpeakap, FaVideo } from 'react-icons/fa'
import member1 from '../assets/defaultPerson.jpg'
import member2 from '../assets/member2.jpg'
import member3 from '../assets/member3.jpg'
import member4 from '../assets/member4.jpg'
import member5 from '../assets/member5.jpg'
import member6 from '../assets/member6.jpg'
import member7 from '../assets/member7.jpg'



const Team = () => {
    return (
        <div className='max-w-6xl mx-auto my-8 py-8'>

            <div data-aos="fade-up" data-aos-duration='4000'>
                <h3 className='text-4xl font-semibold text-center my-2'>Howdy stranger! Do you fancy <b>OUR EVENTS</b> so far?</h3>
                <h3 className='text-4xl font-semibold text-center my-2'>Don't miss out and <b>REGISTER TODAY </b>to get the latest offers!
                </h3>
                {/* icon lists */}
                <div data-aos="fade-up" data-aos-duration='4000' className='grid lg:grid-cols-3 md:grid-cols-2 gap-5 my-5'>
                    {/* icon with title and text */}
                    <div className='flex items-center gap-5 my-5'>
                        <FaAward className='w-32 h-auto text-2xl text-orange-500 p-5  bg-gray-200 rounded-full' />
                        <div>
                            <h2 className='text-2xl font-semibold' >Monthly Awards</h2>
                            <p className='text-lg text-gray-600'>We will give prize money to our contestant</p>
                        </div>
                    </div>


                    {/* icon with title and text */}
                    <div className='flex items-center gap-5 my-5'>
                        <FaCoffee className='w-32 h-auto text-2xl text-orange-500 p-5  bg-gray-200 rounded-full' />
                        <div>
                            <h2 className='text-2xl font-semibold' >Free Coffee</h2>
                            <p className='text-lg text-gray-600'>We will 5 times coffee in our conference</p>
                        </div>
                    </div>


                    {/* icon with title and text */}
                    <div data-aos="fade-up" className='flex items-center gap-5 my-5'>
                        <FaMicrophone className='w-32 h-auto text-2xl text-orange-500 p-5  bg-gray-200 rounded-full' />
                        <div>
                            <h2 className='text-2xl font-semibold' >VIP Speakers</h2>
                            <p className='text-lg text-gray-600'>We hiring a VIP speaker to learn better</p>
                        </div>
                    </div>


                    {/* icon with title and text */}
                    <div className='flex items-center gap-5 my-5'>
                        <FaBookOpen className='w-32 h-auto text-2xl text-orange-500 p-5  bg-gray-200 rounded-full' />
                        <div>
                            <h2 className='text-2xl font-semibold' >Free eBooks</h2>
                            <p className='text-lg text-gray-600'>We will get free eBook if you join now</p>
                        </div>
                    </div>


                    {/* icon with title and text */}
                    <div className='flex items-center gap-5 my-5'>
                        <FaShare className='w-32 h-auto text-2xl text-orange-500 p-5  bg-gray-200 rounded-full' />
                        <div>
                            <h2 className='text-2xl font-semibold' >Amazing Community</h2>
                            <p className='text-lg text-gray-600'>We Always try to create a good environment</p>
                        </div>
                    </div>


                    {/* icon with title and text */}
                    <div className='flex items-center gap-5 my-5'>
                        <FaVideo className='w-32 h-auto text-2xl text-orange-500 p-5  bg-gray-200 rounded-full' />
                        <div>
                            <h2 className='text-2xl font-semibold' >Video Courses</h2>
                            <p className='text-lg text-gray-600'>We will learn so many things from our course</p>
                        </div>
                    </div>




                </div>




            </div>







            {/* Team Members */}
            <div data-aos="fade-up" className="carousel w-full">
                {/* first 4 members */}
                <div id="item1" className="carousel-item w-full grid lg:grid-cols-4 md:grid-cols-2 gap-5 my-8">
                    <div className="rounded-md pb-5 shadow-lg text-center md:mx-1 mx-5">
                        <img src={member2} alt="" className='w-full rounded-t-md' />
                        <h2 className="text-2xl font-semibold px-2 py-2">Richard Jhonson</h2>
                        <p className="text-orange-500 px-2">CEO of ArtNeo</p>
                    </div>


                    <div className="rounded-md pb-5 shadow-lg text-center md:mx-1 mx-5">
                        <img src={member3} alt="" className='w-full rounded-t-md' />
                        <h2 className="text-2xl font-semibold px-2 py-2">Machman Anald</h2>
                        <p className="text-orange-500 px-2">CEO of Andi</p>
                    </div>


                    <div className="rounded-md pb-5 shadow-lg text-center md:mx-1 mx-5">
                        <img src={member4} alt="" className='w-full rounded-t-md' />
                        <h2 className="text-2xl font-semibold px-2 py-2">Quallam Zabura</h2>
                        <p className="text-orange-500 px-2">IT Manager</p>
                    </div>


                    <div className="rounded-md pb-5 shadow-lg text-center md:mx-1 mx-5">
                        <img src={member5} alt="" className='w-full rounded-t-md' />
                        <h2 className="text-2xl font-semibold px-2 py-2">Jarves Camlen</h2>
                        <p className="text-orange-500 px-2">Chairman of Tanda</p>
                    </div>



                </div>

                {/* last 4 members */}
                <div id="item2" className="carousel-item w-full grid grid-cols-4 gap-5 my-8">
                    <div className="rounded-md pb-5 shadow-lg text-center md:mx-1 mx-5">
                        <img src={member6} alt="" className='w-full rounded-t-md' />
                        <h2 className="text-2xl font-semibold px-2 py-2">David Jhonfr</h2>
                        <p className="text-orange-500 px-2">CEO of Tufila</p>
                    </div>

                    <div className="rounded-md pb-5 shadow-lg text-center md:mx-1 mx-5">
                        <img src={member7} alt="" className='w-full rounded-t-md' />
                        <h2 className="text-2xl font-semibold px-2 py-2">Kelen Marquness</h2>
                        <p className="text-orange-500 px-2">COO at AFK</p>
                    </div>



                    <div className="rounded-md pb-5 shadow-lg text-center md:mx-1 mx-5">
                        <img src={member4} alt="" className='w-full rounded-t-md' />
                        <h2 className="text-2xl font-semibold px-2 py-2">Handi Maka</h2>
                        <p className="text-orange-500 px-2">IT Host</p>
                    </div>



                    <div className="rounded-md pb-5 shadow-lg text-center md:mx-1 mx-5">
                        <img src={member2} alt="" className='w-full   rounded-t-md' />
                        <h2 className="text-2xl font-semibold px-2 py-2">Steve Tremin</h2>
                        <p className="text-orange-500 px-2">Production Manager</p>
                    </div>
                </div>

            </div>
            {/* link pagination */}
            <div className="flex justify-center w-full py-2 gap-2">
                <a href="#item1" className="btn btn-xs"><FaCircle className='text-orange-500' /></a>
                <a href="#item2" className="btn btn-xs"><FaCircle className='text-orange-500' /></a>
            </div>
        </div>
    );
};

export default Team;