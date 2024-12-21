import Image from "next/image";
function Mobile() {
  return (
    <main className="bg-slate-200 w-full h-auto flex flex-col justify-center px-4 md:hidden">
      <div className="cursor-pointer ">
        <div className="flex flex-col items-center py-4 text-center w-full h-auto rounded-full ">
          <Image
            className="w-48 h-48 rounded-full"
            src="/Profile.jpg"
            alt="profile"
            width={150}
            height={200}
          ></Image>
          <h1 className="pt-4 pb-2 font-bold text-4xl text-gray-700 hover:text-orange-600">
            Waseem Ali
          </h1>
          <h2 className="font-normal text-xl text-black text-opacity-60">
            Front-End Developer
          </h2>
        </div>
      </div>
      <div className="flex justify-center gap-5 md:hidden">
        <Image
          className="w-8 h-8 rounded-full hover:h-9 hover:w-9"
          src="/Facebook.png"
          alt="logo"
          width={150}
          height={200}
        ></Image>
        <Image
          className="w-8 h-8 rounded-full hover:h-9 hover:w-9"
          src="/Instagram.png"
          alt="logo"
          width={150}
          height={200}
        ></Image>
        <Image
          className="w-8 h-8 rounded-full hover:h-9 hover:w-9"
          src="/Twitter.png"
          alt="logo"
          width={150}
          height={200}
        ></Image>
        <Image
          className="w-8 h-8 rounded-full hover:h-9 hover:w-9"
          src="/Linkeding.png"
          alt="logo"
          width={150}
          height={200}
        ></Image>
        <Image
          className="w-8 h-8 rounded-full hover:h-9 hover:w-9"
          src="/Youtube.png"
          alt="logo"
          width={150}
          height={200}
        ></Image>
        <Image
          className="w-8 h-8 rounded-full hover:h-9 hover:w-9"
          src="/Dribbble.png"
          alt="logo"
          width={150}
          height={200}
        ></Image>
      </div>
      <div className="border-t-slate-300 border-t-2 mt-6 mx-20 sm:mx-52 md:hidden"></div>
      <div className="flex justify-center gap-12 mt-6 py-6 mx-20 md:hidden">
        {/* left side */}
        <div className="">
          <p className="w-14 bg-amber-400 text-lg mb-2 px-2 text-slate-900 ">
            Age:
          </p>
          <p className="w-24 bg-amber-400 text-lg mb-2 px-1 text-slate-900 ">
            Residence:
          </p>
          <p className="w-24 bg-amber-400 text-lg mb-2 px-1 text-slate-900 ">
            Freelance:
          </p>
          <p className="w-20 bg-amber-400 text-lg mb-2 px-1 text-slate-900 ">
            Address:
          </p>
        </div>
        {/* Right side  */}
        <div className="text-right text-lg mb-2 px-2 text-slate-900">
          <p className="mb-2">17</p>
          <p className="mb-2">SD</p>
          <p className="text-green-600 mb-2">Available</p>
          <p className="mb-2">Karachi,Pakistan</p>
        </div>
      </div>
      <div className="flex justify-center ">
      <button className="text-black text-lg w-72 bg-orange-500 rounded-sm  px-6 py-2">
        DOWNLOAD CV
      </button>
      </div>
      {/* <div className="border-t-slate-300 border-t-2 my-6 mx-20 sm:mx-52 md:hidden"></div> */}
      {/* Language section  */}
      <div>
        <h2 className="text-slate-900 font-bold text-2xl text-center md:hidden mt-6  ">
          {" "}
          Languages
        </h2>
      </div>
      <div className="flex flex-col">
        <div className="flex justify-center gap-48 text-lg mt-2 mb-1 text-slate-900 ">
          <p>English</p>
          <p>85%</p>
        </div>
        <div className="flex justify-center">
          <div className="w-60 h-1.5 bg-orange-500"></div>
          <div className="bg-black w-12 h-1.5 "></div>
        </div>
      </div>
      <div className="flex flex-col">
        <div className="flex justify-center ml-1 gap-52 text-lg mt-2 mb-1 text-slate-900 ">
          <p>Urdu</p>
          <p>100%</p>
        </div>
        <div className="flex justify-center">
          <div className="w-72 h-1.5 bg-orange-500"></div>
        </div>
      </div>
      <div className="flex flex-col">
        <div className="flex justify-center gap-48 text-lg mt-2 mb-1 text-slate-900 ">
          <p>Pashto</p>
          <p>70%</p>
        </div>
        <div className="flex justify-center">
          <div className="w-52 h-1.5 bg-orange-500"></div>
          <div className="bg-black w-20 h-1.5 "></div>
        </div>
      </div>
      {/* Language section ended  */}

      <div className="border-t-slate-300 border-t-2 my-8 mx-20 sm:mx-52 md:hidden"></div>
      {/* Skills section  */}
      <div>
        <h2 className="text-slate-900 font-bold text-2xl text-center md:hidden  ">
          {" "}
          My Skills
        </h2>
      </div>
      <div className="flex flex-col border-x-2">
        <div className="flex justify-center gap-52 text-lg mt-2 mb-1 text-slate-900 ">
          <p>Html</p>
          <p>100%</p>
        </div>
        <div className="flex justify-center">
          <div className="w-72 h-1.5 bg-orange-500"></div>
        </div>
      </div>
      <div className="flex flex-col">
        <div className="flex justify-center ml-1 gap-56 text-lg mt-2 mb-1 text-slate-900 ">
          <p>CSS</p>
          <p>95%</p>
        </div>
        <div className="flex justify-center">
          <div className="w-64 h-1.5 bg-orange-500"></div>
          <div className="bg-black w-8 h-1.5 "></div>
        </div>
      </div>
      <div className="flex flex-col">
        <div className="flex justify-center gap-44 text-lg mt-2 mb-1 text-slate-900 ">
          <p>JavaScript</p>
          <p>70%</p>
        </div>
        <div className="flex justify-center">
          <div className="w-52 h-1.5 bg-orange-500"></div>
          <div className="bg-black w-20 h-1.5 "></div>
        </div>
      </div>
      <div className="flex flex-col">
        <div className="flex justify-center gap-44 text-lg mt-2 mb-1 text-slate-900 ">
          <p>TypeScript</p>
          <p>85%</p>
        </div>
        <div className="flex justify-center">
          <div className="w-60 h-1.5 bg-orange-500"></div>
          <div className="bg-black w-12 h-1.5 "></div>
        </div>
      </div>
      <div className="flex flex-col">
        <div className="flex justify-center gap-48 text-lg mt-2 mb-1 text-slate-900 ">
          <p>React js</p>
          <p>65%</p>
        </div>
        <div className="flex justify-center">
          <div className="w-44 h-1.5 bg-orange-500"></div>
          <div className="bg-black w-28 h-1.5 "></div>
        </div>
      </div>
      <div className="flex flex-col">
        <div className="flex justify-center gap-52 text-lg mt-2 mb-1 ml-2 text-slate-900 ">
          <p>Next.js</p>
          <p>85%</p>
        </div>
        <div className="flex justify-center">
          <div className="w-60 h-1.5 bg-orange-500"></div>
          <div className="bg-black w-12 h-1.5 "></div>
        </div>
      </div>
      <div className="flex flex-col">
        <div className="flex justify-center gap-40 text-lg mt-2 mb-1 text-slate-900 ">
          <p>Tailwind Css</p>
          <p>95%</p>
        </div>
        <div className="flex justify-center">
          <div className="w-64 h-1.5 bg-orange-500"></div>
          <div className="bg-black w-8 h-1.5 "></div>
        </div>
      </div>
      <div className="border-t-slate-300 border-t-2 my-6 mx-20 sm:mx-52 md:hidden"></div>
      {/* skills section ended  */}

      {/* My services section  */}
      <div>
        <h2 className="text-slate-900 font-bold text-2xl text-center pb-4  ">
          {" "}
          My Services
        </h2>
      </div>
      <div className="flex justify-center">
        <div className="w-72 h-60 bg-orange-500 my-2">
        </div>
      </div>
      <div className="flex justify-center">
        <div className="w-72 h-60 bg-orange-500 my-4">
        </div>
      </div>
      <div className="flex justify-center">
        <div className="w-72 h-60 bg-orange-500 my-4">
        </div>
      </div>
      <div className="flex justify-center">
        <div className="w-72 h-60 bg-orange-500 my-4">
        </div>
      </div>
      <div className="flex justify-center">
        <div className="w-72 h-60 bg-orange-500 my-4">
        </div>
      </div>
      <div>
        <h2 className="text-slate-900 font-bold text-2xl text-center py-8  ">
          {" "}
          Recent Projects
        </h2>
      </div>
      <div className="flex justify-center">
        <div className="w-72 h-60 bg-orange-500 mb-2">
        </div>
      </div>
      <div className="flex justify-center">
        <div className="w-72 h-60 bg-orange-500 my-4">
        </div>
      </div>
      <div className="flex justify-center">
        <div className="w-72 h-60 bg-orange-500 my-4">
        </div>
      </div>
      <div className="flex justify-center">
        <div className="w-72 h-60 bg-orange-500 my-4">
        </div>
      </div>
      <div className="flex justify-center">
        <div className="w-72 h-60 bg-orange-500 my-4">
        </div>
      </div>
      
      {/* <button className="text-white text-sm bg-orange-500 rounded-full mt-6 px-6 py-2 md:px-8">
        Discover
      </button> */}
    </main>
  );
}
export default Mobile;
 