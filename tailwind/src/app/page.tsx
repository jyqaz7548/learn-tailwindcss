import Image from "next/image";

export default function Home() {
  return (
    <div className=" bg-red-500 h-screen w-full flex justify-center items-center  gap-10">
      <div className=" bg-red-700 w-[100px] h-80  p-10 text-8xl text-blue-400 font-bold border-4  border-black shadow-2xl opacity-50">
        집
      </div>
      <div className=" font-noto bg-red-800 w-80 h-80  text-center text-5xl  text-blue-500 leading-10 underline  rounded-full cursor-pointer">
        가고
      </div>
      <div className=" bg-red-950 w-80 h-80   text-9xl text-blue-900  rounded-t-full border-4  border-black hover:bg-red-400 ">
        싶다
      </div>
      <div>
        <button></button>
      </div>
    </div>
  );
}
