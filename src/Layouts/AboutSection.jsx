
const AboutSection = () => {
    return (
        <div className="grid lg:grid-cols-2 gap-5 max-w-6xl mx-auto my-8">
            <div>
                <h2 data-aos="fade-up" data-aos-duration='4000' className="text-3xl font-bold mb-3">What We Do?</h2>
                <p data-aos="fade-up" className="text-xl text-gray-600 mb-5" >At Corporate Hero, we are the architects of extraordinary corporate and tech events. With a passion for innovation and a commitment to seamless execution, we specialize in crafting experiences that transcend expectations. Elevate your events with Corporate Hero, where excellence is not just a standard – it's our commitment.</p>

                <details data-aos="fade-up" data-aos-duration='4000' className="collapse bg-orange-100 my-5">
                    <summary className="collapse-title text-xl font-md">What services does Corporate Hero provide?</summary>
                    <div className="collapse-content bg-gray-100">
                        <p className="text-gray-600 p-5">Corporate Hero offers end-to-end event management services, specializing in corporate and tech events. From meticulous planning to seamless execution, we ensure your event is a resounding success.</p>
                    </div>
                </details>
                <details data-aos="fade-up" data-aos-duration='4000' className="collapse bg-orange-100 my-5">
                    <summary className="collapse-title text-xl font-md">How can I partner with Corporate Hero?</summary>
                    <div className="collapse-content bg-gray-100">
                        <p className="text-gray-600 p-5">To partner with Corporate Hero, simply reach out through the 'Contact Us' page on our website. We'll discuss your event needs and tailor our services to exceed your expectations.</p>
                    </div>
                </details>
                <details data-aos="fade-up" data-aos-duration='4000' className="collapse bg-orange-100">
                    <summary className="collapse-title text-xl font-md">What makes Corporate Hero stand out?</summary>
                    <div className="collapse-content bg-gray-100">
                        <p className="text-gray-600 p-5">Our commitment to innovation, comprehensive event management, and a dedicated team of experts set Corporate Hero apart. We thrive on turning your vision into a remarkable reality.</p>
                    </div>
                </details>

            </div>

            {/* video */}
            <div data-aos="fade-up" data-aos-duration='4000'>
                <iframe width="560" height="480" src="https://www.youtube.com/embed/7hsOiOtjiGg?si=yK8Jjg6gP2FnjOxR" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen className="rounded-md w-full"></iframe>
            </div>

        </div >
    );
};

export default AboutSection;