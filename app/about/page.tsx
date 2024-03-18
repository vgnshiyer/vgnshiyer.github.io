import getReadmeData from "@/helpers/getReadmeData";
import React from "react";
import Markdown from "markdown-to-jsx";
import Image from "next/image";

const page = () => {
  const readme = getReadmeData();
  return (
    <div className="mt-8 flex flex-col items-start sm:mx-8 md:flex-row">
      <Image
        className="max-w-1/2 md:max-w-1/3 lg:max-w-1/4 2xl:max-w-4/20 mb-8 mr-8 rounded-md"
        src="/images/readme_img.jpg"
        alt="Readme"
        width={500}
        height={500}
        loading="lazy"
      />
      <div className="md:mt-0">
        <h1 className="text-4xl font-bold text-black sm:text-5xl dark:text-white">
          Readme.
        </h1>

        <Markdown
          options={{
            overrides: {
              a: {
                props: {
                  className:
                    "text-contrast-light dark:text-contrast-dark hover:underline",
                },
              },
            },
          }}
          className="mt-8 text-black dark:text-white"
        >
          {readme.content}
        </Markdown>

        <div className="mt-8">
          <div className="text-l mb-4 text-black dark:text-white">
            <span className="mr-9 font-bold">Name:</span>
            <span>{readme.data.name}</span>
          </div>
          <div className="text-l mb-4 text-black dark:text-white">
            <span className="mr-4 font-bold">Address:</span>
            <span>{readme.data.address}</span>
          </div>
          <div className="text-l text-black dark:text-white">
            <span className="mr-14 font-bold">Pin:</span>
            <span>{readme.data.pincode}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
