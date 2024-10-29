"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";

export default function ProductDisplay() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease",
      once: false,
    });
  }, []);

  return (
    <div className="min-h-screen w-full overflow-y-auto text-white overflow-x-hidden">
      <div
        data-aos="fade-right"
        className="h-screen w-full flex flex-col justify-start items-center gap-8"
      >
        <div className="hidden md:block text-4xl font-bold text-center">
          A Seamless Creative Workflow
          <br /> Powered by AI
        </div>
        <div className="h-full w-full flex justify-center items-center">
          <div className="hidden md:block w-[30%] h-full pl-10">
            <div className="hidden md:flex btn bg-[#233DFF] w-full h-28 rounded-none rounded-l-full font-bold text-2xl text-white hover:text-black hover:bg-white border-none">
              Automate Follower Engagement
            </div>
            <p className="mt-4 text-lg text-left leading-light px-10">
              Artists often struggle to keep up with interactions from new
              followers. Sulio AI automatically sends personalized greetings and
              updates based on follower behavior, so you can stay connected
              without spending too much time.
            </p>
          </div>
          <div className="bg-white flex justify-center items-center w-full md:w-[70%] h-full">
            <div className="flex absolute md:relative bg-white md:bg-none w-[80%] md:w-1/2 h-fit md:h-full text-black flex-col justify-evenly items-center font-semibold px-4 gap-8 md:text-lg text-sm p-8 rounded-3xl">
              <div className="flex md:hidden flex-col justify-center items-center gap-4">
                <div className="btn bg-[#233DFF] w-full h-14 rounded-full font-bold text-xl text-white hover:text-black hover:bg-white border-none">
                  Automate Follower Engagement
                </div>
                <p className="text-center leading-light">
                  Artists often struggle to keep up with interactions from new
                  followers. Sulio AI automatically sends personalized greetings
                  and updates based on follower behavior, so you can stay
                  connected without spending too much time.
                </p>
              </div>
              <div className="flex justify-center items-center gap-4">
                <div className="flex justify-center items-center bg-white">
                  <div className="relative h-4 w-4 md:w-6 md:h-6">
                    <div className="absolute w-full h-full transform rotate-45 bg-[#233dff] overflow-hidden"></div>
                  </div>
                </div>
                <p>
                  Automatically send personalized greetings and updates to your
                  followers.
                </p>
              </div>
              <div className="flex justify-center items-center gap-4">
                <div className="flex justify-center items-center bg-gray-100">
                  <div className="relative h-4 w-4 md:w-6 md:h-6">
                    <div className="absolute w-full h-full transform rotate-45 bg-[#233dff] overflow-hidden"></div>
                  </div>
                </div>
                <p>
                  Boost engagement by up to 85%, even when you&apos;re not online.
                </p>
              </div>
              <div className="flex justify-center items-center gap-4">
                <div className="flex justify-center items-center bg-gray-100">
                  <div className="relative h-4 w-4 md:w-6 md:h-6">
                    <div className="absolute w-full h-full transform rotate-45 bg-[#233dff] overflow-hidden"></div>
                  </div>
                </div>
                <p>
                  Save time by skipping manual replies and focusing on your art.
                </p>
              </div>
            </div>
            <Image
              src="/media/section21.gif"
              loading="lazy"
              alt="Description of the image"
              width={10000}
              height={10000}
              className="w-full md:w-1/2 h-full"
            />
          </div>
        </div>
      </div>
      <div
        data-aos="fade-left"
        className="h-screen w-full flex flex-col justify-start items-center gap-8"
      >
        <div className="hidden md:block text-4xl font-bold text-center">
          A Seamless Creative Workflow
          <br /> Powered by AI
        </div>
        <div className="h-full w-full flex justify-center items-center">
          <div className="hidden md:block w-[30%] h-full pl-10">
            <div className="hidden md:flex btn bg-[#C269FF] w-full h-28 rounded-none rounded-l-full font-bold text-2xl text-white hover:text-black hover:bg-white border-none">
              Smart Art Recommendations
            </div>
            <p className="mt-4 text-lg text-left leading-light px-10">
              A Seamless Creative Workflow Powered by AI Not sure which buyer
              will be interested in your work? Sulio AI recommends the right
              artworks based on buyer preferences, helping you sell faster and
              avoid unsold pieces.
            </p>
          </div>
          <div className="bg-white flex justify-center items-center w-full md:w-[70%] h-full">
            <div className="flex absolute md:relative bg-white md:bg-none w-[80%] md:w-1/2 h-fit md:h-full text-black flex-col justify-evenly items-center font-semibold px-4 gap-8 md:text-lg text-sm p-8 rounded-3xl">
              <div className="flex md:hidden flex-col justify-center items-center gap-4">
                <div className="btn bg-[#C269FF] w-full h-14 rounded-full font-bold text-xl text-white hover:text-black hover:bg-white border-none">
                  Smart Art Recommendations
                </div>
                <p className="text-center leading-light">
                  A Seamless Creative Workflow Powered by AI Not sure which
                  buyer will be interested in your work? Sulio AI recommends the
                  right artworks based on buyer preferences, helping you sell
                  faster and avoid unsold pieces.
                </p>
              </div>
              <div className="flex justify-center items-center gap-4">
                <div className="flex justify-center items-center bg-white">
                  <div className="relative h-4 w-4 md:w-6 md:h-6">
                    <div className="absolute w-full h-full transform rotate-45 bg-[#C269FF] overflow-hidden"></div>
                  </div>
                </div>
                <p>
                  AI analyzes buyer preferences and recommends artworks that
                  match their taste.
                </p>
              </div>
              <div className="flex justify-center items-center gap-4">
                <div className="flex justify-center items-center bg-gray-100">
                  <div className="relative h-4 w-4 md:w-6 md:h-6">
                    <div className="absolute w-full h-full transform rotate-45 bg-[#C269FF] overflow-hidden"></div>
                  </div>
                </div>
                <p>
                  Speed up sales by 20% by getting your art in front of the
                  right buyers.
                </p>
              </div>
              <div className="flex justify-center items-center gap-4">
                <div className="flex justify-center items-center bg-gray-100">
                  <div className="relative h-4 w-4 md:w-6 md:h-6">
                    <div className="absolute w-full h-full transform rotate-45 bg-[#C269FF] overflow-hidden"></div>
                  </div>
                </div>
                <p>
                  Connect your art with the right audience, increasing your
                  chances of making sales.
                </p>
              </div>
            </div>
            <Image
              src="/media/section22.gif"
              loading="lazy"
              alt="Description of the image"
              width={10000}
              height={10000}
              className="w-full md:w-1/2 h-full"
            />
          </div>
        </div>
      </div>
      <div
        data-aos="fade-right"
        className="h-screen w-full flex flex-col justify-start items-center gap-8"
      >
        <div className="hidden md:block text-4xl font-bold text-center">
          A Seamless Creative Workflow
          <br /> Powered by AI
        </div>
        <div className="h-full w-full flex justify-center items-center">
          <div className="hidden md:block w-[30%] h-full pl-10">
            <div className="hidden md:flex btn bg-[#C7C806] w-full h-28 rounded-none rounded-l-full font-bold text-2xl text-white hover:text-black hover:bg-white border-none">
              Transaction Tracking
            </div>
            <p className="mt-4 text-lg text-left leading-light px-10">
              Managing sales and commissions can be overwhelming for
              artists.Sulio AI simplifies the process by keeping all your
              transactions and inquiries organized and visible in one place.
            </p>
          </div>
          <div className="bg-white flex justify-center items-center w-full md:w-[70%] h-full">
            <div className="flex absolute md:relative bg-white md:bg-none w-[80%] md:w-1/2 h-fit md:h-full text-black flex-col justify-evenly items-center font-semibold px-4 gap-8 md:text-lg text-sm p-8 rounded-3xl">
              <div className="flex md:hidden flex-col justify-center items-center gap-4">
                <div className="btn bg-[#C7C806] w-full h-14 rounded-full font-bold text-xl text-white hover:text-black hover:bg-white border-none">
                  Transaction Tracking
                </div>
                <p className="text-center leading-light">
                  Managing sales and commissions can be overwhelming for
                  artists.Sulio AI simplifies the process by keeping all your
                  transactions and inquiries organized and visible in one place.
                </p>
              </div>
              <div className="flex justify-center items-center gap-4">
                <div className="flex justify-center items-center bg-white">
                  <div className="relative h-4 w-4 md:w-6 md:h-6">
                    <div className="absolute w-full h-full transform rotate-45 bg-[#C7C806] overflow-hidden"></div>
                  </div>
                </div>
                <p>
                  Track all your sales and commissions in a single platform.
                </p>
              </div>
              <div className="flex justify-center items-center gap-4">
                <div className="flex justify-center items-center bg-gray-100">
                  <div className="relative h-4 w-4 md:w-6 md:h-6">
                    <div className="absolute w-full h-full transform rotate-45 bg-[#C7C806] overflow-hidden"></div>
                  </div>
                </div>
                <p>Get 100% transparency into your sales and payment status.</p>
              </div>
              <div className="flex justify-center items-center gap-4">
                <div className="flex justify-center items-center bg-gray-100">
                  <div className="relative h-4 w-4 md:w-6 md:h-6">
                    <div className="absolute w-full h-full transform rotate-45 bg-[#C7C806] overflow-hidden"></div>
                  </div>
                </div>
                <p>
                  No more worrying about missed payments or lost commission
                  details.
                </p>
              </div>
            </div>
            <Image
              src="/media/section23.gif"
              loading="lazy"
              alt="Description of the image"
              width={10000}
              height={10000}
              className="w-full md:w-1/2 h-full"
            />
          </div>
        </div>
      </div>
      <div
        data-aos="fade-left"
        className="h-screen w-full flex flex-col justify-start items-center gap-8"
      >
        <div className="hidden md:block text-4xl font-bold text-center">
          A Seamless Creative Workflow
          <br /> Powered by AI
        </div>
        <div className="h-full w-full flex justify-center items-center">
          <div className="hidden md:block w-[30%] h-full pl-10">
            <div className="hidden md:flex btn bg-[#FF8C43] w-full h-28 rounded-none rounded-l-full font-bold text-2xl text-white hover:text-black hover:bg-white border-none">
              Fraud Detection
            </div>
            <p className="mt-4 text-lg text-left leading-light px-10">
              Dealing with fraud can be stressful, especially when your buyers
              are from different regions. Sulio AI automatically detects and
              blocks suspicious activities, protecting you from fraud and scams.
            </p>
          </div>
          <div className="bg-white flex justify-center items-center w-full md:w-[70%] h-full">
            <div className="flex absolute md:relative bg-white md:bg-none w-[80%] md:w-1/2 h-fit md:h-full text-black flex-col justify-evenly items-center font-semibold px-4 gap-8 md:text-lg text-sm p-8 rounded-3xl">
              <div className="flex md:hidden flex-col justify-center items-center gap-4">
                <div className="btn bg-[#FF8C43] w-full h-14 rounded-full font-bold text-xl text-white hover:text-black hover:bg-white border-none">
                  Fraud Detection
                </div>
                <p className="text-center leading-light">
                  Dealing with fraud can be stressful, especially when your
                  buyers are from different regions. Sulio AI automatically
                  detects and blocks suspicious activities, protecting you from
                  fraud and scams.
                </p>
              </div>
              <div className="flex justify-center items-center gap-4">
                <div className="flex justify-center items-center bg-white">
                  <div className="relative h-4 w-4 md:w-6 md:h-6">
                    <div className="absolute w-full h-full transform rotate-45 bg-[#FF8C43] overflow-hidden"></div>
                  </div>
                </div>
                <p>
                  AI automatically detects and blocks potential fraud attempts.
                </p>
              </div>
              <div className="flex justify-center items-center gap-4">
                <div className="flex justify-center items-center bg-gray-100">
                  <div className="relative h-4 w-4 md:w-6 md:h-6">
                    <div className="absolute w-full h-full transform rotate-45 bg-[#FF8C43] overflow-hidden"></div>
                  </div>
                </div>
                <p>
                  Reduce the risk of fraud by 95%, allowing you to interact with
                  real buyers confidently.
                </p>
              </div>
              <div className="flex justify-center items-center gap-4">
                <div className="flex justify-center items-center bg-gray-100">
                  <div className="relative h-4 w-4 md:w-6 md:h-6">
                    <div className="absolute w-full h-full transform rotate-45 bg-[#FF8C43] overflow-hidden"></div>
                  </div>
                </div>
                <p>
                  Spend less time handling scams and more time focusing on
                  genuine buyers.
                </p>
              </div>
            </div>
            <Image
              src="/media/section24.gif"
              loading="lazy"
              alt="Description of the image"
              width={10000}
              height={10000}
              className="w-full md:w-1/2 h-full"
            />
          </div>
        </div>
      </div>
      <div
        data-aos="fade-right"
        className="h-screen w-full flex flex-col justify-start items-center gap-8"
      >
        <div className="hidden md:block text-4xl font-bold text-center">
          A Seamless Creative Workflow
          <br /> Powered by AI
        </div>
        <div className="h-full w-full flex justify-center items-center">
          <div className="hidden md:block w-[30%] h-full pl-10">
            <div className="hidden md:flex btn bg-[#2BB659] w-full h-28 rounded-none rounded-l-full font-bold text-2xl text-white hover:text-black hover:bg-white border-none">
              Streamlined Client Communication
            </div>
            <p className="mt-4 text-lg text-left leading-light px-10">
              Handling multiple inquiries, after-sales support, and client
              communication can eat up valuable creative time. Sulio AI helps
              you manage all communications in one place, so you&apos;re not
              constantly answering the same questions.
            </p>
          </div>
          <div className="bg-white flex justify-center items-center w-full md:w-[70%] h-full">
            <div className="flex absolute md:relative bg-white md:bg-none w-[80%] md:w-1/2 h-fit md:h-full text-black flex-col justify-evenly items-center font-semibold px-4 gap-8 md:text-lg text-sm p-8 rounded-3xl">
              <div className="flex md:hidden flex-col justify-center items-center gap-4">
                <div className="btn bg-[#2BB659] w-full h-14 rounded-full font-bold text-xl text-white hover:text-black hover:bg-white border-none">
                  Streamlined Client Communication
                </div>
                <p className="text-center leading-light">
                  Handling multiple inquiries, after-sales support, and client
                  communication can eat up valuable creative time. Sulio AI
                  helps you manage all communications in one place, so you&apos;re
                  not constantly answering the same questions.
                </p>
              </div>
              <div className="flex justify-center items-center gap-4">
                <div className="flex justify-center items-center bg-white">
                  <div className="relative h-4 w-4 md:w-6 md:h-6">
                    <div className="absolute w-full h-full transform rotate-45 bg-[#2BB659] overflow-hidden"></div>
                  </div>
                </div>
                <p>
                  Manage client inquiries, sales questions, and after-sales
                  support all in one platform.
                </p>
              </div>
              <div className="flex justify-center items-center gap-4">
                <div className="flex justify-center items-center bg-gray-100">
                  <div className="relative h-4 w-4 md:w-6 md:h-6">
                    <div className="absolute w-full h-full transform rotate-45 bg-[#2BB659] overflow-hidden"></div>
                  </div>
                </div>
                <p>
                  Save 25% of your time by automating repetitive client
                  responses.
                </p>
              </div>
              <div className="flex justify-center items-center gap-4">
                <div className="flex justify-center items-center bg-gray-100">
                  <div className="relative h-4 w-4 md:w-6 md:h-6">
                    <div className="absolute w-full h-full transform rotate-45 bg-[#2BB659] overflow-hidden"></div>
                  </div>
                </div>
                <p>
                  Provide a smooth and professional experience for your clients,
                  improving customer satisfaction.
                </p>
              </div>
            </div>
            <Image
              src="/media/section25.gif"
              loading="lazy"
              alt="Description of the image"
              width={10000}
              height={10000}
              className="w-full md:w-1/2 h-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
