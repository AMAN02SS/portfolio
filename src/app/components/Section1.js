import { Bebas_Neue } from "next/font/google";

const bebasNeue = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
});

const Section1 = () => {
  return (
    <div className="flex flex-col justify-center items-center relative">
      <div className={`${bebasNeue.className} text-[300px] text-center text-[#3d3d3d] absolute z-1 top-1`}>
        <span>HI!</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>I'M</span>
      </div>
      <div className="h-100 w-100 absolute z-2 top-40">
        <img className="rounded-full object-cover"  src="/img/section1Pic2.jpg" alt="" />
      </div>
      <div className={`${bebasNeue.className} text-[300px] text-center text-[#ffffff] absolute z-3 top-110`}>
        <span>AMAN SINGH</span>
      </div>
      <h1 className="absolute top-200 text-3xl text-white z-10">A Full Stack Developer, who loves to travel!</h1>

    </div>
  );
};

export default Section1;
