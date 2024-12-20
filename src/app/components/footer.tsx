
import Link from "next/link";

function Footer() {
  return (
    <div className="bg-slate-50 py-6 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Heading Section */}
        <h4 className="text-left text-xl font-bold text-gray-950">Furniro</h4>

        {/* Links Section */}
        <div className="flex flex-wrap justify-between mt-6 gap-y-6 md:gap-y-0">
          {/* Link Section */}
          <div className="flex flex-col w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
            <h5 className="text-lg font-semibold">Links</h5>
            <ul className="space-y-2">
              <li className="hover:underline cursor-pointer">
                <Link href="/" className="hover:text-red-600">Home</Link>
              </li>
              <li className="hover:underline cursor-pointer">
                <Link href="/about" className="hover:text-red-600">About</Link>
              </li>
              <li className="hover:underline cursor-pointer">
                <Link href="/contact" className="hover:text-red-600">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Help Section */}
          <div className="flex flex-col w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
            <h5 className="text-lg font-semibold">Help</h5>
            <ul className="space-y-2">
              <li className="hover:underline cursor-pointer">Payment Option</li>
              <li className="hover:underline cursor-pointer">Return</li>
            </ul>
          </div>

          {/* Newsletter Section */}
          <div className="flex flex-col w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
            <h5 className="text-lg font-semibold">Newsletter</h5>
            <ul className="space-y-2">
              <li className="hover:underline cursor-pointer">Subscribe</li>
              <div className="flex items-center justify-center mt-6">
                <label htmlFor="search" className="sr-only">Search here</label>
                <input
                  id="search"
                  type="text"
                  placeholder="Search here..."
                  className="border border-gray-300 rounded-l-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-red-500 w-64"
                />
                <button className="bg-red-500 text-white py-2 px-4 rounded-r-md hover:bg-red-600">
                  Search
                </button>
              </div>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
