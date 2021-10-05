import logo from "../mainAssets/logo.svg";

const Navbar = () => {
 return (
        <div className="w-full big-white border-b border-gray-200">
            <div className="max-w-7xl mx-auto">
                <div className="flex justify-between items-center py-4 px-10">
                 <div className="flex flex-1 justify-start item-center">
                     <img src={logo} className="w-28" />
                 </div>

                            <nav className=" space-x-12 flex ">
                                <a className="text-sm">Prices</a>
                                <a className="text-sm">Learn</a>
                                <a className="text-sm">Individuals</a>
                                <a className="text-sm">Businesses</a>
                                <a className="text-sm">Developers</a>
                                <a className="text-sm">Company</a>
                            </nav>

                            <div className="flex flex-1 items-center justify-end space-x-5">
                               <a className="text-sm hover:text-coinbase_blue">Sign in</a>
                             <button className="bg-coinbase_blue text-white px-4 py-2 rounded-md">
                                 Get started
                             </button>
                            </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;