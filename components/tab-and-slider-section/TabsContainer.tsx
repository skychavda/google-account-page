import { useState } from "react";

export interface TabsContainerProps {
  tabDetail: {
    tabs: Array<string>;
    tabsData: Array<{
      text: string;
      videoPoster: string;
      videos: Array<{
        id: number;
        src: string;
        type: string;
      }>;
    }>;
  };
}

export default function TabsContainer({ tabDetail }: TabsContainerProps) {
  const [selectedTab, setSelectedTab] = useState(0);

  return (
    <div className="md:max-w-7xl md:m-auto px-8">
      <div className="flex items-center border-b-4 border-[#f1f3f4]">
        {tabDetail.tabs.map((tab: any, index: number) => (
          <div
            className={`text-center py-3 font-medium hover:cursor-pointer flex-1 ${
              selectedTab === index
                ? "after:content-[''] after:border-b-4 after:border-b-blue-600 after:block after:relative after:-bottom-4 text-[#202124]"
                : "text-[#5f6368]"
            }`}
            key={index}
            onClick={() => setSelectedTab(index)}
          >
            {tab}
          </div>
        ))}
      </div>
      <div className="flex items-center">
        <div className="w-1/3">
          {tabDetail.tabsData.map((tab, index) => (
            <p
              className={`${selectedTab === index ? "block" : "hidden"} font-thin`}
              key={index}
            >
              {tab.text}
            </p>
          ))}
        </div>
        <div className="w-2/3">
          {tabDetail.tabsData.map((tab, index) => (
            <video
              poster={tab.videoPoster}
              autoPlay
              muted
              className={`${selectedTab === index ? "block" : "hidden"}`}
              key={index}
            >
              {tab.videos.map((video) => (
                <source src={video.src} type={video.type} key={video.id} />
              ))}
            </video>
          ))}
        </div>
      </div>
    </div>
  );
}
