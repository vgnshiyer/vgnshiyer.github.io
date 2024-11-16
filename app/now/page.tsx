import React from "react";
import Link from "next/link";

import { NowData } from "@/types/NowData";
import getYamlData from "@/helpers/getYamlData";
import NowSection from "@/components/now/NowSection";

const Now = () => {
  const nowData = getYamlData("now") as NowData;
  return (
    <>
      <div className="items-left mt-6 flex flex-col sm:mx-8 md:mt-12">
        <NowSection
          title="Recent."
          data={nowData.recent.data}
          subtitle={nowData.recent.quote}
        />
        <NowSection
          title="Now."
          data={nowData.now.data}
          subtitle={nowData.now.quote}
        />
        <NowSection
          title="Upcoming."
          data={nowData.upcoming.data}
          subtitle={nowData.upcoming.quote}
        />
      </div>
      <div className="mt-8 border-b-2 border-gray-200 sm:mx-8 dark:border-gray-800"></div>
      <div className="mt-4 sm:mx-8 md:ml-20">
        <p className="text-base font-semibold text-black dark:text-white">
          This is a{" "}
          <Link
            className="text-tertiary-light dark:text-tertiary-dark hover:text-contrast-light dark:hover:text-contrast-dark underline"
            href="https://sive.rs/nowff"
          >
            now
          </Link>{" "}
          page. Join the now movement{" "}
          <Link
            className="text-tertiary-light dark:text-tertiary-dark hover:text-contrast-light dark:hover:text-contrast-dark underline"
            href="https://nownownow.com/about"
          >
            here
          </Link>
          .
        </p>
      </div>
    </>
  );
};

export default Now;
