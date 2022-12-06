import Slider from "react-slick";
import { TabsContainerProps } from "./TabsContainer";

export default function SliderContainer({ tabDetail }: TabsContainerProps) {
  const settings = {
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dotClass: "slick-dots slick-thumb",
    customPaging: () => {
      return (
        <div className="w-2.5 h-2.5 rounded-full border-[1px] border-black" />
      );
    },
  };

  return (
    <Slider {...settings}>
      {tabDetail.tabsData.map((tab, index) => (
        <div key={index} className="text-center p-5">
          <video poster={tab.videoPoster} autoPlay muted key={index}>
            {tab.videos.map((video) => (
              <source src={video.src} type={video.type} key={video.id} />
            ))}
          </video>
          <p className="text-2xl mt-2 leading-loose">{tabDetail.tabs[index]}</p>
          <p className="text-sm tracking-wide leading-loose">{tab.text}</p>
        </div>
      ))}
    </Slider>
  );
}
