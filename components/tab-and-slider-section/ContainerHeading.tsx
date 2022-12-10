import { useEffect } from "react";
import AnimateTextWhenScrolling from "../../helper";

interface HeadingContentProps {
  divId: string;
  headingDetail: {
    image: string;
    title: string;
    description: string;
  };
}

export default function ContainerHeading({ headingDetail, divId }: HeadingContentProps) {

  useEffect(() => {
    AnimateTextWhenScrolling(`${divId}-heading`);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center max-w-none md:max-w-4xl px-6 mb-6 md:mx-auto md:px-20 mt-20">
      <img src={headingDetail.image} className="w-48 h-48 md:w-36 md:h-36" alt="google" />
      <h2
        className="animated-text font-medium text-3xl md:text-6xl mb-5 text-center"
        id={`${divId}-heading`}
      >
        {headingDetail.title.split(" ").map((word: any) => (
          <span key={word} className="pt-2.5 pr-2.5 inline-block">
            {word}
          </span>
        ))}
      </h2>
      <p className="text-left text-gray-500 text-base md:text-center">
        {headingDetail.description}
      </p>
    </div>
  );
}
