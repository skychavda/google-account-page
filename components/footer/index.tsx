export default function Footer() {
  return (
    <footer className="mt-10 bg-[#f8f9fa] text-sm">
      <section className="flex pt-10 px-8 pb-5 flex-col md:flex-row">
        <div className="flex mr-8 mb-8">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg"
            className="grayscale"
            width={80}
            height={80}
          />
        </div>
        <div className="flex flex-1 gap-5 text-[#5f6368] mb-6 md:mb-0 flex-wrap md:flex-nowrap">
          <a className="hover:text-black hover:cursor-pointer">About Google</a>
          <a className="hover:text-black hover:cursor-pointer">Google Product</a>
          <a className="hover:text-black hover:cursor-pointer">Privacy</a>
          <a className="hover:text-black hover:cursor-pointer">Terms</a>
        </div>
        <div className="flex gap-5 text-[#5f6368] items-baseline">
          <p className="hover:text-black hover:cursor-pointer">Help</p>
          
          {/* DropDown part will cover in next video cause it has i18 multi langauge support  */}
          <p>dropdown</p>
        </div>
      </section>
    </footer>
  );
}
