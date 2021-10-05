import polygon from "../mainAssets/polygon.svg";
import skl from "../mainAssets/skl.svg";
import frt from "../mainAssets/frt.svg";
import grt from "../mainAssets/grt.svg";

const End = () => {
    return (
        <div className="max-w-5xl py-10 mx-auto">
            <div className="grid grid-cols-2">
                <div className="max-w-sm space-y-5 my-auto">
                    <p className="text-3xl font-semibold">
                        Earn up to $28 worth of crypto
                    </p>
                    <p className="text-sm">
                        Discover how specific cryptocurrencies work — and get a bit of each crypto to try out for yourself.
                    </p>
                    <button className="bg-coinbase_blue text-white px-4 py-2 rounded-md">
                        Start Earning
                    </button>
                </div>
                <div>
                    <div className="transition duration-500 px-6 py-5 flex space-x-5 hover:shadow-lg rounded-lg">
                        <img src={polygon} className="w-10 h-10" />
                        <div className="flex">
                            <div className="my-auto flex space-x-5">
                                <p className="text-2xl font-semibold">Polygon</p>
                                <p className="font-semibold my-auto">MATIC</p>
                            </div>
                        </div>
                        <p className="text-right my-auto flex-grow text-coinbase_green">Earn $3 MATIC</p>
                    </div>
                    <div className="transition duration-500 px-6 py-5 flex space-x-5 hover:shadow-lg rounded-lg">
                        <img src={skl} className="w-10 h-10" />
                        <div className="flex">
                            <div className="my-auto flex space-x-5">
                                <p className="text-2xl font-semibold">Skale</p>
                                <p className="font-semibold my-auto">SKL</p>
                            </div>
                        </div>
                        <p className="text-right my-auto flex-grow text-coinbase_green">Earn $3 SKL</p>
                    </div>
                    <div className="transition duration-500 px-6 py-5 flex space-x-5 hover:shadow-lg rounded-lg">
                        <img src={frt} className="w-10 h-10" />
                        <div className="flex">
                            <div className="my-auto flex space-x-5">
                                <p className="text-2xl font-semibold">Ampleforth Governance Token</p>
                                <p className="font-semibold my-auto">FORTH</p>
                            </div>
                        </div>
                        <p className="text-right my-auto flex-grow text-coinbase_green">Earn $3 FORTH</p>
                    </div>
                    <div className="transition duration-500 px-6 py-5 flex space-x-5 hover:shadow-lg rounded-lg">
                        <img src={grt} className="w-10 h-10" />
                        <div className="flex">
                            <div className="my-auto flex space-x-5">
                                <p className="text-2xl font-semibold">The Graph</p>
                                <p className="font-semibold my-auto">GRT</p>
                            </div>
                        </div>
                        <p className="text-right my-auto flex-grow text-coinbase_green">Earn $3 GRT</p>
                    </div>
                    <p className="text-coinbase_blue ml-10 mt-4"> view more > </p>
                </div>
            </div>
        </div>
        );
};
export default End;