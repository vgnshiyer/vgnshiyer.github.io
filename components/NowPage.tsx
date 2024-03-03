import React from "react";
import getNowData from "@/helpers/getNowData";
import NowSection from "./NowSection";

const NowPage = () => {
  const nowData = getNowData();

  return (
    <>
      <div className=" items-left flex flex-col sm:mx-8">
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
    </>
  );
};

export default NowPage;
