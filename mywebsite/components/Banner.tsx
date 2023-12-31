
const Banner = () => {
    return (
        <div className="flex flex-col sm:flex-row justify-between items-center p-2 md:p-4 mb-10">
            <div className="ml-0 sm:ml-6 md:ml-12 lg:ml-16">
                <h1 className="text-2xl lg:text-3xl pl-6 mb-1 font-bold text-white">Hello 👋</h1>
                <h1 className="text-4xl lg:text-5xl pl-6 mb-1 font-bold text-white">I'm <span className="text-secondary">Vignesh</span></h1>
                <h1 className="text-4xl lg:text-5xl pl-48 lg:pl-60 font-bold text-secondary">Iyer</h1>
                <h2 className="text-xl sm:text-2xl pl-6 mb-4 font-bold text-white">Software Engineer</h2>
                <p className="text-dim text-sm sm:text-base md:text-lg pl-6 mb-4">A software engineer based who believes in creating an impact with technology.</p>
            </div>
            <div className="mr-0 sm:mr-6 md:mr-12 lg:mr-16 mt-4 sm:mt-0">
                <img src="/images/banner.png" alt="Vignesh Iyer" className="w-56 sm:w-80 md:w-80 lg:w-80" />
            </div>
        </div>
    );
};

export default Banner;