
const Banner = () => {
    return (
        <div className="flex flex-col sm:flex-row justify-between items-center p-0 md:p-4 mb-10">
            <div className="pl-0 sm:pl-6 md:pl-4">
                <h1 className="text-2xl sm:text-3xl mb-1 font-bold text-black dark:text-white">Hello 👋</h1>
                <h1 className="text-4xl sm:text-5xl mb-1 font-bold text-black dark:text-white">I'm <span className="text-contrast-light dark:text-contrast-dark">Vignesh</span></h1>
                <h1 className="text-4xl sm:text-5xl pl-40 sm:pl-52 font-bold text-contrast-light dark:text-contrast-dark">Iyer</h1>
                <h2 className="text-xl sm:text-2xl mb-4 font-bold text-black dark:text-white">Software Engineer</h2>
                <p className="text-tertiary-light dark:text-tertiary-dark text-sm sm:text-base md:text-lg mb-4">Writing code to make people's lives better.</p>
            </div>
            <div className="">
                <img src="/images/banner.png" alt="Vignesh Iyer" className="w-60 sm:w-64 md:w-72 lg:w-80" />
            </div>
        </div>
    );
};

export default Banner;