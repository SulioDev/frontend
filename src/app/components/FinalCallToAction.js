import Image from "next/image";
import Link from "next/link";

export default function FinalCallToAction() {
  return (
    // <div className="min-h-screen h-screen w-full bg-white text-black flex flex-col justify-center items-center relative">
    //   <div className="absolute h-80 top-0 right-0 z-10">
    //     <Image
    //       src="/media/FinalCallToAction1.gif"
    //       alt="Description of the image"
    //       height={500}
    //       width={500}
    //       objectFit="contain"
    //       className="w-full h-full"
    //     />
    //   </div>
    // <div className="h-full w-full flex justify-center items-center">
    //   <div className="bg-black text-white flex flex-col justify-center items-center gap-4 p-4 sm:p-8 rounded-3xl w-full max-w-4xl z-20">
    //     <div className="w-full h-full flex flex-col justify-center items-center gap-2 px-4 sm:px-6 md:px-10 lg:px-28">
    //       <div className="text-center text-xl sm:text-2xl md:text-3xl font-extrabold">
    //         The all-in-one solution for artists to elevate their business with
    //         AI
    //       </div>
    //       <div className="text-wrap text-center text-sm sm:text-lg md:text-xl">
    //         Sulio AI Chatbot Assistant helps artists automate client
    //         interactions, manage sales, and enhance their engagement—giving
    //         you more time to create. Seamlessly integrate AI into your
    //         workflow and experience the freedom to focus on what matters most:
    //         your art.
    //       </div>
    //     </div>
    //     <div className="w-full h-full flex flex-col justify-center items-center border-none gap-2">
    //       <div>
    //         <button className="btn btn-wide bg-[#ffc610] rounded-full text-black text-lg sm:text-xl md:text-2xl hover:bg-white">
    //           Try For Free
    //         </button>
    //       </div>
    //       <div className="text-center w-full text-xs sm:text-md md:text-lg">
    //         Start your free 30 days trial today!
    //       </div>
    //     </div>
    //   </div>
    // </div>
    //   <div className="absolute h-80 bottom-0 left-0 z-10 rotate">
    //     <Image
    //       src="/media/FinalCallToAction2.gif"
    //       alt="Description of the image"
    //       height={500}
    //       width={500}
    //       objectFit="contain"
    //       className="w-full h-full"
    //     />
    //   </div>
    //   {/* <div className="h-80 w-full flex flex-col justify-end items-center">
    //     <div className="h-full w-full flex flex-col justify-start items-end">
    //       <div className="h-20 w-full md:w-[80%]">
    //         <div className="flex justify-between items-center w-full h-full px-4">
    //           <div className="h-full w-fit btn-ghost flex justify-center items-center gap-4">
    //             <div className="relative bg-white w-10 md:w-16 h-full">
    //               <svg
    //                 version="1.1"
    //                 xmlns="http://www.w3.org/2000/svg"
    //                 viewBox="10 10 150 110"
    //                 className="w-full h-full"
    //               >
    //                 <path
    //                   d="M0 0 C54.45 0 108.9 0 165 0 C165 39.6 165 79.2 165 120 C110.55 120 56.1 120 0 120 C0 80.4 0 40.8 0 0 Z "
    //                   fill="white"
    //                   transform="translate(0,0)"
    //                 />
    //                 <path
    //                   d="M0 0 C1.15242188 0.60134766 1.15242188 0.60134766 2.328125 1.21484375 C10.15355159 5.80629302 16.82963429 13.91475733 19.6015625 22.64453125 C21.60909905 34.512615 20.1138291 45.11904736 13.43359375 55.08984375 C7.73012957 62.6892824 1.00300303 66.99899899 -8 70 C-24.41857326 70.90250086 -33.84161145 67.93532259 -47 58 C-47.94875 58.9075 -48.8975 59.815 -49.875 60.75 C-59.06137558 68.41136461 -69.16830256 69.25122264 -80.75878906 68.31787109 C-88.49816394 67.22019505 -95.33558689 62.70417845 -100.53515625 56.99609375 C-107.95513635 46.8851342 -108.65173711 37.10541336 -108 25 C-107.44503231 21.97589643 -106.53199253 19.65352668 -105 17 C-104.58621094 16.25363281 -104.17242187 15.50726563 -103.74609375 14.73828125 C-98.99861402 6.91205444 -92.56498315 1.85257097 -83.96875 -1.3046875 C-72.71261711 -3.94099231 -62.20686255 -2.43000547 -52.39453125 3.6015625 C-50.22455075 5.02130168 -48.0995083 6.47861718 -46 8 C-45.38125 7.41992188 -45.38125 7.41992188 -44.75 6.828125 C-32.34009631 -4.36294886 -15.19673204 -8.35820262 0 0 Z "
    //                   fill="#FD8B42"
    //                   transform="translate(128,33)"
    //                 />
    //                 <path
    //                   d="M0 0 C4.91990045 2.59452081 8.5913283 6.30375034 11.09765625 11.31640625 C11.90860404 17.54911927 11.42865889 22.4568127 7.70703125 27.62109375 C3.78089121 31.75688204 -0.76216789 33.49965305 -6.40234375 33.87890625 C-11.48228774 33.60692307 -15.19856704 31.76936286 -18.90234375 28.31640625 C-22.72092685 23.27157393 -23.68975445 18.51726552 -22.90234375 12.31640625 C-20.90974705 6.92072305 -17.49099092 3.63585314 -12.90234375 0.31640625 C-8.57381064 -1.12643812 -4.33047915 -1.556127 0 0 Z "
    //                   fill="white"
    //                   transform="translate(60.90234375,49.68359375)"
    //                 />
    //               </svg>
    //             </div>
    //             <div className="text-lg md:text-xl text-start leading-none font-bold">
    //               Suilio Art
    //               <br />
    //               Artist AI Chatbot
    //             </div>
    //           </div>
    //           <div className="h-full w-5 md:w-fit flex justify-center items-center gap-2">
    //             <svg
    //               xmlns="http://www.w3.org/2000/svg"
    //               className="h-full w-8"
    //               viewBox="0 0 24 24"
    //               fill="currentColor"
    //             >
    //               <path d="M12.001 9C10.3436 9 9.00098 10.3431 9.00098 12C9.00098 13.6573 10.3441 15 12.001 15C13.6583 15 15.001 13.6569 15.001 12C15.001 10.3427 13.6579 9 12.001 9ZM12.001 7C14.7614 7 17.001 9.2371 17.001 12C17.001 14.7605 14.7639 17 12.001 17C9.24051 17 7.00098 14.7629 7.00098 12C7.00098 9.23953 9.23808 7 12.001 7ZM18.501 6.74915C18.501 7.43926 17.9402 7.99917 17.251 7.99917C16.5609 7.99917 16.001 7.4384 16.001 6.74915C16.001 6.0599 16.5617 5.5 17.251 5.5C17.9393 5.49913 18.501 6.0599 18.501 6.74915ZM12.001 4C9.5265 4 9.12318 4.00655 7.97227 4.0578C7.18815 4.09461 6.66253 4.20007 6.17416 4.38967C5.74016 4.55799 5.42709 4.75898 5.09352 5.09255C4.75867 5.4274 4.55804 5.73963 4.3904 6.17383C4.20036 6.66332 4.09493 7.18811 4.05878 7.97115C4.00703 9.0752 4.00098 9.46105 4.00098 12C4.00098 14.4745 4.00753 14.8778 4.05877 16.0286C4.0956 16.8124 4.2012 17.3388 4.39034 17.826C4.5591 18.2606 4.7605 18.5744 5.09246 18.9064C5.42863 19.2421 5.74179 19.4434 6.17187 19.6094C6.66619 19.8005 7.19148 19.9061 7.97212 19.9422C9.07618 19.9939 9.46203 20 12.001 20C14.4755 20 14.8788 19.9934 16.0296 19.9422C16.8117 19.9055 17.3385 19.7996 17.827 19.6106C18.2604 19.4423 18.5752 19.2402 18.9074 18.9085C19.2436 18.5718 19.4445 18.2594 19.6107 17.8283C19.8013 17.3358 19.9071 16.8098 19.9432 16.0289C19.9949 14.9248 20.001 14.5389 20.001 12C20.001 9.52552 19.9944 9.12221 19.9432 7.97137C19.9064 7.18906 19.8005 6.66149 19.6113 6.17318C19.4434 5.74038 19.2417 5.42635 18.9084 5.09255C18.573 4.75715 18.2616 4.55693 17.8271 4.38942C17.338 4.19954 16.8124 4.09396 16.0298 4.05781C14.9258 4.00605 14.5399 4 12.001 4ZM12.001 2C14.7176 2 15.0568 2.01 16.1235 2.06C17.1876 2.10917 17.9135 2.2775 18.551 2.525C19.2101 2.77917 19.7668 3.1225 20.3226 3.67833C20.8776 4.23417 21.221 4.7925 21.476 5.45C21.7226 6.08667 21.891 6.81333 21.941 7.8775C21.9885 8.94417 22.001 9.28333 22.001 12C22.001 14.7167 21.991 15.0558 21.941 16.1225C21.8918 17.1867 21.7226 17.9125 21.476 18.55C21.2218 19.2092 20.8776 19.7658 20.3226 20.3217C19.7668 20.8767 19.2076 21.22 18.551 21.475C17.9135 21.7217 17.1876 21.89 16.1235 21.94C15.0568 21.9875 14.7176 22 12.001 22C9.28431 22 8.94514 21.99 7.87848 21.94C6.81431 21.8908 6.08931 21.7217 5.45098 21.475C4.79264 21.2208 4.23514 20.8767 3.67931 20.3217C3.12348 19.7658 2.78098 19.2067 2.52598 18.55C2.27848 17.9125 2.11098 17.1867 2.06098 16.1225C2.01348 15.0558 2.00098 14.7167 2.00098 12C2.00098 9.28333 2.01098 8.94417 2.06098 7.8775C2.11014 6.8125 2.27848 6.0875 2.52598 5.45C2.78014 4.79167 3.12348 4.23417 3.67931 3.67833C4.23514 3.1225 4.79348 2.78 5.45098 2.525C6.08848 2.2775 6.81348 2.11 7.87848 2.06C8.94514 2.0125 9.28431 2 12.001 2Z"></path>
    //             </svg>
    //             <svg
    //               className="h-full w-8"
    //               xmlns="http://www.w3.org/2000/svg"
    //               viewBox="0 0 24 24"
    //               fill="currentColor"
    //             >
    //               <path fill="none" d="M0 0h24v24H0z"></path>
    //               <path d="M14 13.5H16.5L17.5 9.5H14V7.5C14 6.47062 14 5.5 16 5.5H17.5V2.1401C17.1743 2.09685 15.943 2 14.6429 2C11.9284 2 10 3.65686 10 6.69971V9.5H7V13.5H10V22H14V13.5Z"></path>
    //             </svg>
    //             <svg
    //               xmlns="http://www.w3.org/2000/svg"
    //               viewBox="0 0 24 24"
    //               className="h-full w-8"
    //               fill="currentColor"
    //             >
    //               <path d="M3 3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3ZM12.0606 11.6829L5.64722 6.2377L4.35278 7.7623L12.0731 14.3171L19.6544 7.75616L18.3456 6.24384L12.0606 11.6829Z"></path>
    //             </svg>
    //           </div>
    //           <div className="h-full w-5 md:w-fit flex justify-center items-center font-bold text-xl">
    //             Contact Us
    //           </div>
    //           <div className="h-full w-5 md:w-fit flex justify-center items-center font-bold text-xl">
    //             Privacy Policy
    //           </div>
    //           <div className="h-full w-5 md:w-fit flex justify-center items-center font-bold text-xl">
    //             Terms and Conditions
    //           </div>
    //         </div>
    // <div className="w-full flex justify-center items-center">
    //   <svg
    //     xmlns="http://www.w3.org/2000/svg"
    //     width="16"
    //     height="16"
    //     fill="#B59595"
    //     className="bi bi-hexagon-fill rotate-90"
    //     viewBox="0 0 16 16"
    //   >
    //     <path
    //       fill-rule="evenodd"
    //       d="M8.5.134a1 1 0 0 0-1 0l-6 3.577a1 1 0 0 0-.5.866v6.846a1 1 0 0 0 .5.866l6 3.577a1 1 0 0 0 1 0l6-3.577a1 1 0 0 0 .5-.866V4.577a1 1 0 0 0-.5-.866z"
    //     />
    //   </svg>
    //   <hr className="w-full h-1 bg-[#B59595]" />
    // </div>
    //       </div>
    //     </div>
    //   </div> */}
    // </div>
    <div className="min-h-screen w-full bg-white text-black flex justify-between items-center flex-col">
      <div
        className="z-50 w-full h-full [transform:rotateY(180deg)] overflow-hidden"
        style={{
          overflow: "hidden",
          clipPath: "polygon(0 0, 0 100%, 25% 100%, 25% 25%, 100% 25%, 100% 0)",
        }}
      >
        <Image
          src="/media/FinalCallToAction1.gif"
          alt="Description of the image"
          height={500}
          width={500}
          objectFit="contain"
          className="rotate-180 [transform:rotateY(180deg)]"
        />
      </div>
      <div className="z-50 absolute h-full w-full flex flex-col justify-around items-center px-4">
        <div className="h-fit w-full flex justify-center items-center">
          <div className="bg-black text-white flex flex-col justify-center items-center gap-4 p-4 sm:p-8 rounded-3xl w-full max-w-4xl z-20">
            <div className="w-full h-full flex flex-col justify-center items-center gap-2 px-4 sm:px-6 md:px-10 lg:px-28">
              <div className="text-center text-xl sm:text-2xl md:text-3xl font-extrabold">
                The all-in-one solution for artists to elevate their business
                with AI
              </div>
              <div className="text-wrap text-center text-sm sm:text-lg md:text-xl">
                Sulio AI Chatbot Assistant helps artists automate client
                interactions, manage sales, and enhance their engagement—giving
                you more time to create. Seamlessly integrate AI into your
                workflow and experience the freedom to focus on what matters
                most: your art.
              </div>
            </div>
            <div className="w-full h-full flex flex-col justify-center items-center border-none gap-2">
              <div>
                <button className="btn btn-wide bg-[#ffc610] rounded-full text-black text-lg sm:text-xl md:text-2xl hover:bg-white">
                  Try For Free
                </button>
              </div>
              <div className="text-center w-full text-xs sm:text-md md:text-lg">
                Start your free 30 days trial today!
              </div>
            </div>
          </div>
        </div>
        <div className="w-full h-fit flex flex-col justify-around items-end">
          <div className="w-[85%] h-fit flex justify-evenly items-center">
            <div className="h-full w-fit flex justify-center items-center">
              <div className="relative bg-white w-16 h-16">
                <svg
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="10 10 150 110"
                  className="w-full h-full"
                >
                  <path
                    d="M0 0 C54.45 0 108.9 0 165 0 C165 39.6 165 79.2 165 120 C110.55 120 56.1 120 0 120 C0 80.4 0 40.8 0 0 Z "
                    fill="white"
                    transform="translate(0,0)"
                  />
                  <path
                    d="M0 0 C1.15242188 0.60134766 1.15242188 0.60134766 2.328125 1.21484375 C10.15355159 5.80629302 16.82963429 13.91475733 19.6015625 22.64453125 C21.60909905 34.512615 20.1138291 45.11904736 13.43359375 55.08984375 C7.73012957 62.6892824 1.00300303 66.99899899 -8 70 C-24.41857326 70.90250086 -33.84161145 67.93532259 -47 58 C-47.94875 58.9075 -48.8975 59.815 -49.875 60.75 C-59.06137558 68.41136461 -69.16830256 69.25122264 -80.75878906 68.31787109 C-88.49816394 67.22019505 -95.33558689 62.70417845 -100.53515625 56.99609375 C-107.95513635 46.8851342 -108.65173711 37.10541336 -108 25 C-107.44503231 21.97589643 -106.53199253 19.65352668 -105 17 C-104.58621094 16.25363281 -104.17242187 15.50726563 -103.74609375 14.73828125 C-98.99861402 6.91205444 -92.56498315 1.85257097 -83.96875 -1.3046875 C-72.71261711 -3.94099231 -62.20686255 -2.43000547 -52.39453125 3.6015625 C-50.22455075 5.02130168 -48.0995083 6.47861718 -46 8 C-45.38125 7.41992188 -45.38125 7.41992188 -44.75 6.828125 C-32.34009631 -4.36294886 -15.19673204 -8.35820262 0 0 Z "
                    fill="#FD8B42"
                    transform="translate(128,33)"
                  />
                  <path
                    d="M0 0 C4.91990045 2.59452081 8.5913283 6.30375034 11.09765625 11.31640625 C11.90860404 17.54911927 11.42865889 22.4568127 7.70703125 27.62109375 C3.78089121 31.75688204 -0.76216789 33.49965305 -6.40234375 33.87890625 C-11.48228774 33.60692307 -15.19856704 31.76936286 -18.90234375 28.31640625 C-22.72092685 23.27157393 -23.68975445 18.51726552 -22.90234375 12.31640625 C-20.90974705 6.92072305 -17.49099092 3.63585314 -12.90234375 0.31640625 C-8.57381064 -1.12643812 -4.33047915 -1.556127 0 0 Z "
                    fill="white"
                    transform="translate(60.90234375,49.68359375)"
                  />
                </svg>
              </div>
              <div className="text-lg md:text-xl text-start leading-none font-bold">
                Suilio Art
                <br />
                Artist AI Chatbot
              </div>
            </div>
            <div className="flex justify-center items-center h-full w-fit">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="w-8 h-8"
                fill="currentColor"
              >
                <path d="M12.001 9C10.3436 9 9.00098 10.3431 9.00098 12C9.00098 13.6573 10.3441 15 12.001 15C13.6583 15 15.001 13.6569 15.001 12C15.001 10.3427 13.6579 9 12.001 9ZM12.001 7C14.7614 7 17.001 9.2371 17.001 12C17.001 14.7605 14.7639 17 12.001 17C9.24051 17 7.00098 14.7629 7.00098 12C7.00098 9.23953 9.23808 7 12.001 7ZM18.501 6.74915C18.501 7.43926 17.9402 7.99917 17.251 7.99917C16.5609 7.99917 16.001 7.4384 16.001 6.74915C16.001 6.0599 16.5617 5.5 17.251 5.5C17.9393 5.49913 18.501 6.0599 18.501 6.74915ZM12.001 4C9.5265 4 9.12318 4.00655 7.97227 4.0578C7.18815 4.09461 6.66253 4.20007 6.17416 4.38967C5.74016 4.55799 5.42709 4.75898 5.09352 5.09255C4.75867 5.4274 4.55804 5.73963 4.3904 6.17383C4.20036 6.66332 4.09493 7.18811 4.05878 7.97115C4.00703 9.0752 4.00098 9.46105 4.00098 12C4.00098 14.4745 4.00753 14.8778 4.05877 16.0286C4.0956 16.8124 4.2012 17.3388 4.39034 17.826C4.5591 18.2606 4.7605 18.5744 5.09246 18.9064C5.42863 19.2421 5.74179 19.4434 6.17187 19.6094C6.66619 19.8005 7.19148 19.9061 7.97212 19.9422C9.07618 19.9939 9.46203 20 12.001 20C14.4755 20 14.8788 19.9934 16.0296 19.9422C16.8117 19.9055 17.3385 19.7996 17.827 19.6106C18.2604 19.4423 18.5752 19.2402 18.9074 18.9085C19.2436 18.5718 19.4445 18.2594 19.6107 17.8283C19.8013 17.3358 19.9071 16.8098 19.9432 16.0289C19.9949 14.9248 20.001 14.5389 20.001 12C20.001 9.52552 19.9944 9.12221 19.9432 7.97137C19.9064 7.18906 19.8005 6.66149 19.6113 6.17318C19.4434 5.74038 19.2417 5.42635 18.9084 5.09255C18.573 4.75715 18.2616 4.55693 17.8271 4.38942C17.338 4.19954 16.8124 4.09396 16.0298 4.05781C14.9258 4.00605 14.5399 4 12.001 4ZM12.001 2C14.7176 2 15.0568 2.01 16.1235 2.06C17.1876 2.10917 17.9135 2.2775 18.551 2.525C19.2101 2.77917 19.7668 3.1225 20.3226 3.67833C20.8776 4.23417 21.221 4.7925 21.476 5.45C21.7226 6.08667 21.891 6.81333 21.941 7.8775C21.9885 8.94417 22.001 9.28333 22.001 12C22.001 14.7167 21.991 15.0558 21.941 16.1225C21.8918 17.1867 21.7226 17.9125 21.476 18.55C21.2218 19.2092 20.8776 19.7658 20.3226 20.3217C19.7668 20.8767 19.2076 21.22 18.551 21.475C17.9135 21.7217 17.1876 21.89 16.1235 21.94C15.0568 21.9875 14.7176 22 12.001 22C9.28431 22 8.94514 21.99 7.87848 21.94C6.81431 21.8908 6.08931 21.7217 5.45098 21.475C4.79264 21.2208 4.23514 20.8767 3.67931 20.3217C3.12348 19.7658 2.78098 19.2067 2.52598 18.55C2.27848 17.9125 2.11098 17.1867 2.06098 16.1225C2.01348 15.0558 2.00098 14.7167 2.00098 12C2.00098 9.28333 2.01098 8.94417 2.06098 7.8775C2.11014 6.8125 2.27848 6.0875 2.52598 5.45C2.78014 4.79167 3.12348 4.23417 3.67931 3.67833C4.23514 3.1225 4.79348 2.78 5.45098 2.525C6.08848 2.2775 6.81348 2.11 7.87848 2.06C8.94514 2.0125 9.28431 2 12.001 2Z"></path>
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="w-8 h-8"
                fill="currentColor"
              >
                <path d="M14 13.5H16.5L17.5 9.5H14V7.5C14 6.47062 14 5.5 16 5.5H17.5V2.1401C17.1743 2.09685 15.943 2 14.6429 2C11.9284 2 10 3.65686 10 6.69971V9.5H7V13.5H10V22H14V13.5Z"></path>
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="w-8 h-8"
                fill="currentColor"
              >
                <path d="M3 3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3ZM12.0606 11.6829L5.64722 6.2377L4.35278 7.7623L12.0731 14.3171L19.6544 7.75616L18.3456 6.24384L12.0606 11.6829Z"></path>
              </svg>
            </div>
            <div className="hidden md:flex justify-center items-center h-full w-fit font-bold text-xl">
              Contact Us
            </div>
            <div className="hidden md:flex justify-center items-center h-full w-fit font-bold text-xl">
              Privacy Policy
            </div>
            <div className="hidden md:flex justify-center items-center h-full w-fit font-bold text-xl">
              Terms and Conditions
            </div>
          </div>
          <div className="h-fit w-[85%] flex justify-center items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="#B59595"
              className="bi bi-hexagon-fill rotate-90"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M8.5.134a1 1 0 0 0-1 0l-6 3.577a1 1 0 0 0-.5.866v6.846a1 1 0 0 0 .5.866l6 3.577a1 1 0 0 0 1 0l6-3.577a1 1 0 0 0 .5-.866V4.577a1 1 0 0 0-.5-.866z"
              />
            </svg>
            <hr className="w-full h-1 bg-[#B59595]" />
          </div>
          <div className="w-[85%] h-full text-center text-slate-400">
            <p className="md:px-20">
              2024 All Right Reserviced. Sulio Art Trademarks, product names,
              logos and other marks and designs are trademarks of Sulio Art Co.,
              Ltd or its subsidiaries and may be used without permission.
            </p>
            <div className="text-xl font-bold">service @ sulio-art.com</div>
          </div>
        </div>
      </div>
      <div
        className="z-50 w-full h-full rotate-180 [transform:rotateX(180deg)] overflow-hidden"
        style={{
          clipPath: "polygon(0 0, 0 100%, 20% 100%, 20% 45%, 100% 45%, 100% 0)",
        }}
      >
        <Image
          src="/media/FinalCallToAction2.gif"
          alt="Description of the image"
          height={500}
          width={500}
          objectFit="contain"
          className="[transform:rotateX(180deg)]"
        />
      </div>
    </div>
  );
}
