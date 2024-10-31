import Image from "next/image";

export default function Hero() {
  return (
    <div className="hero w-full md:px-10 h-fit pt-4">
      <div className="hero-content h-fit w-full flex flex-col lg:flex-row gap-10 lg:gap-20">
        <div className="flex flex-col h-fit w-full justify-center items-center text-center lg:text-left">
          <div className="w-full flex flex-col justify-center items-center lg:items-start">
            <h1 className="w-full text-start text-3xl md:text-4xl lg:text-5xl font-bold">
              Artists Using AI Assistants Have Increased Engagement by 85%.
            </h1>
            <p className="py-4 text-start w-full text-lg md:text-xl">
              Simplify your workflow, connect with buyers, and focus on creating
              art.
            </p>
          </div>
          <Image
            src="/media/section1.gif"
            loading="lazy"
            alt="Description of the image"
            width={10000}
            height={10000}
            className="w-full h-auto md:h-80 rounded-xl"
          />
        </div>
        <div className="w-full h-fit md:max-w-sm flex justify-center items-center flex-col">
          <div className="card rounded-3xl bg-white w-full max-w-sm shrink-0 shadow-xl">
            <div className="relative text-[#F98836] font-extrabold flex flex-col justify-center items-center z-50 text-2xl -rotate-3 -translate-y-3">
              <div className="w-fit h-full bg-[#FBF2B3] text-center px-2 rounded-md">
                SEE HOW AI
              </div>
              <div className="w-fit h-full bg-[#FBF2B3] text-center px-2 rounded-md">
                CHATBOT WORKS
              </div>
            </div>
            <form className="card-body gap-2">
              <div className="flex justify-center items-center gap-2 rounded-full mb-4">
                <label className="bg-[#F2F2F2] text-black input input-bordered flex items-center gap-2 rounded-full w-full">
                  <input
                    type="text"
                    className="w-full py-2 px-4"
                    placeholder="First Name"
                  />
                </label>
                <label className="bg-[#F2F2F2] text-black input input-bordered flex items-center gap-2 rounded-full w-full">
                  <input
                    type="text"
                    className="w-full py-2 px-4"
                    placeholder="Last Name"
                  />
                </label>
              </div>
              <label className="bg-[#F2F2F2] text-black input input-bordered flex items-center gap-2 rounded-full mb-4 w-full">
                <input
                  type="email"
                  className="w-full py-2 px-4"
                  placeholder="Email"
                />
              </label>
              <label className="bg-[#F2F2F2] text-black input input-bordered flex items-center gap-2 rounded-full mb-4 w-full">
                <input
                  type="password"
                  className="w-full py-2 px-4"
                  placeholder="Password"
                />
              </label>
              <button className="btn border-none w-full rounded-full text-white bg-[#F98836] hover:bg-black font-extrabold text-lg py-3">
                TRY FOR FREE
              </button>
              <div className="flex justify-center items-center gap-2 text-lg mt-4">
                <span className="text-slate-400">Already a member?</span>
                <a className="link link-info">Sign in</a>
              </div>
            </form>
          </div>
          <div className="text-lg py-4 px-8 text-center mt-4">
            Start today and see up to a 40% time-saving on client interactions
            in the first month!
          </div>
        </div>
      </div>
    </div>
  );
}
