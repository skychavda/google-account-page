import { FEATURES } from "../../constant";

export default function Feature() {
  return (
    <section className="border-slate-300 border-y-2 bg-[#fafafa] border-[#eee] relative">
      <div
        className="bg-blue-500 rounded-full p-5 absolute right-9 -top-7 hover:cursor-pointer shadow-xl"
        onClick={() => {
          //do scroll
          document.getElementById('helpful')?.scrollIntoView({
            behavior:'smooth'
          })
        }}
      >
        <div className="border-2 w-3.5 h-3.5 border-l-0 border-t-0 rotate-45 relative -top-0.5" />
      </div>
      <div className="flex flex-col md:flex-row max-w-screen-xl mx-auto">
        {FEATURES.map((feat, index) => (
          <div
            key={feat.id}
            className={`w-full md:w-1/3 border-[#eee] p-8 ${
              index < FEATURES.length - 1
                ? "md:border-r-2 max-md:border-b-2"
                : ""
            }`}
          >
            <p
              className={`text-2xl font-medium mb-4 after:content-[''] after:block after:w-7 after:h-[3px] after:relative after:-bottom-2 bg-${feat.borderColor}`}
            >
              {feat.title}
            </p>
            <p className="text-base font-thin">{feat.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
