import Image from "next/image";

export default function Hero() {
  return (
    <div className="hero md:px-10 min-h-[calc(100vh_-_4rem)] pt-4">
      <div className="hero-content h-full w-full flex flex-col lg:flex-row gap-20">
        <div className="flex flex-col w-full justify-start items-center text-center lg:text-left">
          <div className="w-full flex flex-col justify-center items-center">
            <h1 className="w-full text-start text-4xl md:text-5xl font-bold">
              Artists Using AI Assistants Have Increased Engagement by 85%.
            </h1>
            <p className="py-6 text-start w-full">
              Simplify your workflow, connect with buyers and focus on creating
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
        <div className="w-full max-w-sm h-full flex justify-start items-center flex-col">
          <div className="card rounded-3xl bg-white w-full max-w-sm shrink-0 shadow-2xl">
            <div className="relative text-[#F98836] font-extrabold flex flex-col justify-center items-center z-50 text-3xl -rotate-3 -translate-y-3">
              <div className="w-fit h-full bg-[#FBF2B3] text-center px-2 rounded-md">
                SEE HOW AI
              </div>
              <div className="w-fit h-full bg-[#FBF2B3] text-center px-2 rounded-md">
                CHATBOT WORKS
              </div>
            </div>
            <form className="card-body gap-2">
              <div className="flex justify-center items-center gap-2 rounded-full">
                <label className="bg-[#F2F2F2] text-black input input-bordered flex items-center gap-2 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    className="h-4 w-4 opacity-70"
                  >
                    <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
                  </svg>
                  <input
                    type="text"
                    className="w-full"
                    placeholder="First Name"
                  />
                </label>
                <label className="bg-[#F2F2F2] text-black input input-bordered flex items-center gap-2 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    className="h-4 w-4 opacity-70"
                  >
                    <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
                  </svg>
                  <input
                    type="text"
                    className="w-full"
                    placeholder="Last Name"
                  />
                </label>
              </div>
              <label className="bg-[#F2F2F2] text-black input input-bordered flex items-center gap-2 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="h-4 w-4 opacity-70"
                >
                  <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                  <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                </svg>
                <input type="text" className="w-full" placeholder="Email" />
              </label>
              <label className="bg-[#F2F2F2] text-black input input-bordered flex items-center gap-2 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="h-4 w-4 opacity-70"
                >
                  <path
                    fillRule="evenodd"
                    d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                    clipRule="evenodd"
                  />
                </svg>
                <input
                  type="password"
                  className="w-full"
                  placeholder="password"
                />
              </label>
              <div>
                <button className="btn border-none w-full rounded-full text-white bg-[#F98836] hover:bg-black font-extrabold text-xl">
                  TRY FOR FREE
                </button>
              </div>
              <div className="flex justify-center items-center gap-2 text-lg">
                <div className="text-slate-400">Already a member?</div>
                <a className="link link-info">Sign in</a>
              </div>
            </form>
          </div>
          <div className="text-lg py-2 px-8 text-center">
            Start today and see upto a 40% time-saving on client interactions in
            the first month!
          </div>
        </div>
      </div>
    </div>
  );
}
