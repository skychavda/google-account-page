import { useEffect, useState } from "react";
import ContainerHeading from "./ContainerHeading";
import SliderContainer from "./SliderContainer";
import TabsContainer from "./TabsContainer";

export default function TabsAndSliderSection({ containerDetail }: any) {
  const [isMobile, setIsMobile] = useState(false);

  const checkWidth = () => {
    setIsMobile(window.innerWidth <= 768);
  };

  // if mobile then only display slider
  useEffect(() => {
    setIsMobile(window.innerHeight <= 768)
    window.addEventListener("resize", checkWidth);

    () => {
      return window.removeEventListener("resize", checkWidth);
    };
  }, []);

  return (
    <div id={containerDetail.id}>
      <ContainerHeading
      divId={containerDetail.id}
        headingDetail={{
          image: containerDetail.image,
          title: containerDetail.heading,
          description: containerDetail.description,
        }}
      />
      {isMobile ? (
        <SliderContainer
          tabDetail={{
            tabs: containerDetail.tabs,
            tabsData: containerDetail.tabsData,
          }}
        />
      ) : (
        <TabsContainer
          tabDetail={{
            tabs: containerDetail.tabs,
            tabsData: containerDetail.tabsData,
          }}
        />
      )}
    </div>
  );
}
