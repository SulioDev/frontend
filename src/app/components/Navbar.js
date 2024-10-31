export default function Navbar() {
  return (
    <div className="navbar md:px-10 max-h-16">
      <div className="flex-1">
        <div className="flex justify-center items-center">
          <div className="relative bg-white w-16 h-full">
            <svg
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="10 10 150 110"
              className="w-full h-full"
            >
              <path
                d="M0 0 C54.45 0 108.9 0 165 0 C165 39.6 165 79.2 165 120 C110.55 120 56.1 120 0 120 C0 80.4 0 40.8 0 0 Z "
                fill="black"
                transform="translate(0,0)"
              />
              <path
                d="M0 0 C1.15242188 0.60134766 1.15242188 0.60134766 2.328125 1.21484375 C10.15355159 5.80629302 16.82963429 13.91475733 19.6015625 22.64453125 C21.60909905 34.512615 20.1138291 45.11904736 13.43359375 55.08984375 C7.73012957 62.6892824 1.00300303 66.99899899 -8 70 C-24.41857326 70.90250086 -33.84161145 67.93532259 -47 58 C-47.94875 58.9075 -48.8975 59.815 -49.875 60.75 C-59.06137558 68.41136461 -69.16830256 69.25122264 -80.75878906 68.31787109 C-88.49816394 67.22019505 -95.33558689 62.70417845 -100.53515625 56.99609375 C-107.95513635 46.8851342 -108.65173711 37.10541336 -108 25 C-107.44503231 21.97589643 -106.53199253 19.65352668 -105 17 C-104.58621094 16.25363281 -104.17242187 15.50726563 -103.74609375 14.73828125 C-98.99861402 6.91205444 -92.56498315 1.85257097 -83.96875 -1.3046875 C-72.71261711 -3.94099231 -62.20686255 -2.43000547 -52.39453125 3.6015625 C-50.22455075 5.02130168 -48.0995083 6.47861718 -46 8 C-45.38125 7.41992188 -45.38125 7.41992188 -44.75 6.828125 C-32.34009631 -4.36294886 -15.19673204 -8.35820262 0 0 Z "
                fill="#FD8B42"
                transform="translate(128,33)"
              />
              <path
                d="M0 0 C4.91990045 2.59452081 8.5913283 6.30375034 11.09765625 11.31640625 C11.90860404 17.54911927 11.42865889 22.4568127 7.70703125 27.62109375 C3.78089121 31.75688204 -0.76216789 33.49965305 -6.40234375 33.87890625 C-11.48228774 33.60692307 -15.19856704 31.76936286 -18.90234375 28.31640625 C-22.72092685 23.27157393 -23.68975445 18.51726552 -22.90234375 12.31640625 C-20.90974705 6.92072305 -17.49099092 3.63585314 -12.90234375 0.31640625 C-8.57381064 -1.12643812 -4.33047915 -1.556127 0 0 Z "
                fill="black"
                transform="translate(60.90234375,49.68359375)"
              />
            </svg>
          </div>
          <div className="text-lg md:text-xl text-start leading-none">
            Sulio Art
            <br />
            Artist AI Chatbot
          </div>
        </div>
      </div>
      <div className="flex-none md:hidden">
        <button className="btn btn-square btn-ghost">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="inline-block h-5 w-5 stroke-current"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>
      </div>
      <div className="flex-none justify-center items-center gap-4 hidden md:flex">
        <div className="join gap-2">
          <button className="btn bg-[#F98836] text-black font-bold border-none hover:bg-white">
            Login
          </button>
          <button className="btn bg-[#F98836] text-black font-bold border-none hover:bg-white">
            Register
          </button>
        </div>
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <img
              alt="user-avatar"
              src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
              className="rounded-full"
            />
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
              <a className="justify-between">
                Profile
                <span className="badge">New</span>
              </a>
            </li>
            <li>
              <a>Settings</a>
            </li>
            <li>
              <a>Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
