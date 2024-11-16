import React from "react";
import Image from "next/image";
import Link from "next/link";
import Markdown from "markdown-to-jsx";

import getReadmeData from "@/helpers/getReadmeData";
import { InfoItem } from "@/types/InfoItem";

const Info = ({label, value, margin}: InfoItem) => (
  <div className="text-l mb-4 text-black dark:text-white">
    <span className={`font-bold ${margin}`}>{label}:</span>
    <span>{value}</span>
  </div>
);

const page = () => {
  const readme = getReadmeData();
  return (
    <div className="mt-8 flex flex-col items-start sm:mx-8 md:flex-row">
      <Image
        className="max-w-1/2 md:max-w-1/3 lg:max-w-1/4 2xl:max-w-4/20 mb-8 mr-8 rounded-md"
        src="/images/readme.png"
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
                component: ({ href, children, ...props }: { href: string; children: React.ReactNode }) => (
                  <Link href={href} {...props} className="text-contrast-light dark:text-contrast-dark hover:underline">
                    {children}
                  </Link>
                ),
              },
            },
          }}
          className="mt-8 text-black dark:text-white"
        >
          {readme.content}
        </Markdown>

        <div className="mt-8">
          <Info label="Name" value={readme.data.name} margin="mr-9" />
          <Info label="Address" value={readme.data.address} margin="mr-4" />
          <Info label="Pin" value={readme.data.pincode} margin="mr-14" />
        </div>
      </div>
    </div>
  );
};

export default page;
