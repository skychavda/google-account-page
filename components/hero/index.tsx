export default function HeroContainer() {

  return (
    <section>
      <div className="flex justify-between items-center max-w-screen-xl mx-auto py-28 px-8 max-md:flex-col max-md:flex-col-reverse max-md:py-20">
        <div className="w-1/2 max-md:w-full max-md:p-6">
          <h1 className="animated-text mb-4 text-5xl font-medium max-md:text-3xl">
            <span className="pt-2.5 pr-2.5 inline-block slide-up">All</span>
            <span className="pt-2.5 pr-2.5 inline-block slide-up">of</span>
            <span className="pt-2.5 pr-2.5 inline-block slide-up">Google,</span>
            <span className="pt-2.5 pr-2.5 inline-block slide-up">working</span>
            <span className="pt-2.5 pr-2.5 inline-block slide-up">for</span>
            <span className="pt-2.5 pr-2.5 inline-block slide-up">you</span>
          </h1>
          <p className="text-base text-slate-500">
            Sign in to your Google Account, and get the most out of all the
            Google services you use. Your account helps you do more by
            personalizing your Google experience and offering easy access to
            your most important information from anywhere.
          </p>
        </div>
        <div className="w-full">
          <video
            poster="https://lh3.googleusercontent.com/V_7OwlanMRJ-q6EjzbH_PmLHdnuuPXmqRKzlPd6svygPwZDhqQYdf5f9xJvGJ76lUkPkyJ05_uZzsqM2fZUbRBppesccc_ZHFdYPSg"
            autoPlay
            muted
          >
            <source
              src="https://kstatic.googleusercontent.com/files/d5553d3151e70c8fd38595ac93798a78eb9bf137e68dec3afd5115f7b3296050fd10eaf3148b3c8bc1e044eb363c6877c83867007cebf57cd718e0151de647f3"
              type="video/mp4"
            />
            <source
              src="https://kstatic.googleusercontent.com/files/407961c3dc02c04b3c8e1b9a0bf23921451a785ff12f70281a8516543920445ed2f464bea67e4d29099d4db6bd1443c93e2a2883014f675fc5ea4fb76a70f619"
              type="video/webm"
            />
          </video>
        </div>
      </div>
    </section>
  );
}
