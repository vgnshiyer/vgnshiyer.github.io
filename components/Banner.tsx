import Image from "next/image";
import Link from "next/link";

const Banner = () => {
  return (
    <div className="mb-10 flex flex-col items-center justify-between p-0 sm:flex-row md:p-4">
      <div className="pl-0 sm:pl-6 md:pl-4">
        <h1 className="mb-1 text-2xl font-bold text-black sm:text-3xl dark:text-white">
          Hello 👋
        </h1>
        <h1 className="mb-1 text-4xl font-bold text-black sm:text-5xl dark:text-white">
          I'm{" "}
          <span className="text-contrast-light dark:text-contrast-dark">
            Vignesh
          </span>
        </h1>
        <h1 className="text-contrast-light dark:text-contrast-dark pl-40 text-4xl font-bold sm:pl-52 sm:text-5xl">
          Iyer
        </h1>
        <h2 className="mb-4 text-xl font-bold text-black sm:text-2xl dark:text-white">
          Software Engineer
        </h2>
        <p className="text-tertiary-light dark:text-tertiary-dark mb-4 text-sm sm:text-base md:text-lg">
          Writing code to make people's lives better.
        </p>
        <br />
        <div className="bg-semi-light dark:bg-semi-dark flex max-w-[80px] items-center rounded-3xl py-1">
          <Link
            href="/now"
            className="text-tertiary-light group ml-4 rounded-2xl p-2 font-semibold tracking-[1px] dark:text-white"
          >
            Now
            <span className="bg-contrast-light dark:bg-contrast-dark relative left-1/2 block h-0.5 max-w-0 -translate-x-1/2 duration-500 group-hover:max-w-full"></span>
          </Link>
        </div>
      </div>
      <div className="">
        <Image
          src="/images/banner.png"
          alt="Vignesh Iyer"
          width={500}
          height={500}
          className="w-60 sm:w-64 md:w-72 lg:w-80"
          loading="lazy"
        />
      </div>
    </div>
  );
};

export default Banner;
