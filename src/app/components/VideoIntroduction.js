import Image from "next/image";

export default function VideoIntroduction() {
  return (
    <div className="min-h-screen flex flex-col justify-center text-white items-center bg-cover bg-center">
      <div className="flex justify-center items-center bg-white text-3xl md:text-4xl font-bold text-black w-full h-fit md:flex-row flex-col">
        <div className="h-full w-full flex items-center md:pl-20 px-4 md:px-0">
          People won&apos;t be replaced by AI, but by those who use it.
        </div>
        <div className="w-full h-full md:h-full">
          <Image
            src="/media/section4overlay.gif"
            loading="lazy"
            alt="Description of the image"
            width={10000}
            height={10000}
            className="relative top-3/4 w-full h-full origin-top"
          />
        </div>
      </div>
      <div className="h-fit w-full py-8 px-4 md:px-20">
        <div className="rounded-3xl w-full h-full border-4 border-[rgb(180,148,148)] p-4 flex justify-center items-center flex-col md:flex-row">
          <video
            className="rounded-3xl h-1/2 md:h-full w-full md:w-2/3 object-fill z-50"
            poster="/media/video-thumbnail.png"
            loop
            autoPlay
            controls
            controlsList="nodownload"
            preload="auto"
            playsInline
          >
            <source src="/media/introduction-video.mp4" type="video/mp4" />
            <track
              src="/media/introduction-video.mp4"
              kind="subtitles"
              srcLang="en"
              label="English"
            />
            Your browser does not support the video tag.
          </video>
          <div className="w-full md:w-1/3 h-full flex justify-center items-center flex-col gap-2 md:gap-4">
            <div className="w-full md:w-3/4 text-start text-[#0000E4] font-bold text-2xl text-wrap">
              Sulio Art <br />
              Artist AI Chatbot
            </div>
            <div className="w-full md:w-3/4 text-start text-wrap font-bold text-lg">
              Meet Sulio Art&apos;s all-in-one product experience AI Chatbot,
              enhanced with artificial intelligence.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}