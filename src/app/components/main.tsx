import Dining from "../public/Dining.png";
import Image from "next/image";
import living from "../public/living.png";
import room from "../public/room.png";

function Main() {
  return (
    <div className="bg-slate-50 text-center pt-6">
      <h1 className="text-2xl font-bold text-gray-800">Browse The Range</h1>
      <p className="font-semibold text-gray-600 mt-2 mb-4">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit.
      </p>

      {/* Image Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6 px-4">
        <div className="flex flex-col items-center">
          <Image src={Dining} alt="Modern dining set" className="w-full h-auto" />
          <p className="mt-2 font-semibold text-lg text-gray-800">Dining</p>
        </div>
        <div className="flex flex-col items-center">
          <Image src={living} alt="Cozy living room setup" className="w-full h-auto" />
          <p className="mt-2 font-semibold text-lg text-gray-800">Living</p>
        </div>
        <div className="flex flex-col items-center">
          <Image src={room} alt="Stylish bedroom setup" className="w-full h-auto" />
          <p className="mt-2 font-semibold text-lg text-gray-800">Room</p>
        </div>
      </div>
    </div>
  );
}

export default Main;
