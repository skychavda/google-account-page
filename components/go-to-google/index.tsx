import { useEffect } from "react";
import AnimateTextWhenScrolling from "../../helper";

export default function GoToGoogle() {
  useEffect(() => {
    AnimateTextWhenScrolling(`goto-heading`);
  }, []);

  return (
    <section className="max-w-screen-xl mx-auto flex flex-col justify-center mt-9 items-center gap-3 md:my-36">
      <h2 className="animated-text font-medium text-3xl md:text-6xl mb-5 text-center" id="goto-heading">
        <span className="pt-2.5 pr-2.5 inline-block">Your</span>
        <span className="pt-2.5 pr-2.5 inline-block">Google</span>
        <span className="pt-2.5 pr-2.5 inline-block">starts</span>
        <span className="pt-2.5 pr-2.5 inline-block">here</span>
      </h2>
      <button className="bg-blue-500 py-3 px-5 rounded text-white hover:bg-blue-700">
        Go to Google Account
      </button>
      <button className="text-blue-500">Create an account</button>
    </section>
  );
}
