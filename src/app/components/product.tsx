import Image from "next/image";
import images from "../public/Images.png";
import image1 from "../public/image1.png";
import Image2 from "../public/Images (2).png";
import Image3 from "../public/Images (3).png";
import Image4 from "../public/Images (4).png";
import Image5 from "../public/Images (5).png"

function Product() {
  return (
    <div className="pt-6">
      <h1 className="font-bold text-4xl text-center p-2">Our Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-5">
        <div className="flex flex-col items-center h-96 w-72 bg-slate-200 rounded-lg p-4">
          <Image src={images} alt="Syltherine stylish cafe chair" />
          <h3 className="font-semibold mt-4">Syltherine</h3>
          <p>Stylish cafe chair</p>
          <p className="text-xl font-bold mt-2 hover:text-red-700 transition-colors duration-300">Rs 25,000</p>
        </div>
        <div className="flex flex-col items-center h-96 w-72 bg-slate-200 rounded-lg p-4">
          <Image src={image1} alt="Lolito luxury big sofa" />
          <h3 className="font-semibold mt-4">Lolito</h3>
          <p>Luxury big sofa</p>
          <p className="text-xl font-bold mt-2 hover:text-red-700 transition-colors duration-300">Rs 70,000</p>
        </div>
        <div className="flex flex-col items-center h-96 w-72 bg-slate-200 rounded-lg p-4">
          <Image src={Image2} alt="Respira outdoor bar table and stool" />
          <h3 className="font-semibold mt-4">Respira</h3>
          <p>Outdoor bar table and stool</p>
          <p className="text-xl font-bold mt-2 hover:text-red-700 transition-colors duration-300">Rs 50,000</p>
        </div>
        <div className="flex flex-col items-center h-96 w-72 bg-slate-200 rounded-lg p-4">
          <Image src={Image3} alt="Grifo night light" />
          <h3 className="font-semibold mt-4">Grifo</h3>
          <p>Night light</p>
          <p className="text-xl font-bold mt-2 hover:text-red-700 transition-colors duration-300">Rs 15,000</p>
        </div>
        <div className="flex flex-col items-center h-96 w-72 bg-slate-200 rounded-lg p-4">
          <Image src={Image4} alt="Muggo small sofa" />
          <h3 className="font-semibold mt-4">Muggo</h3>
          <p>Small sofa</p>
          <p className="text-xl font-bold mt-2 hover:text-red-700 transition-colors duration-300">Rs 20,000</p>
        </div>
        <div className="flex flex-col items-center h-96 w-72 bg-slate-200 rounded-lg p-4">
          <Image src={Image5} alt="Pingly cute bed set" />
          <h3 className="font-semibold mt-4">Pingly</h3>
          <p>Cute bed set</p>
          <p className="text-xl font-bold mt-2 hover:text-red-700 transition-colors duration-300">Rs 55,000</p>
        </div>
      </div>
    </div>
  );
}

export default Product;
