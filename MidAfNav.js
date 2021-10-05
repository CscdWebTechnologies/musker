import { ReactComponent as BitCoinIcon } from "../mainAssets/bitcoin-blue.svg";
import { ReactComponent as RightArrow } from "../mainAssets/right-arrow.svg";
import { ReactComponent as PhonePic } from "../mainAssets/phone.svg";
 
const MidSection = () => {
    return (
        <div className="grid grid-cols-2 max-w-5xl mx-auto">
            <div className="flex flex-col py-28 space-y-7">
                <div className="flex space-x-2">
                    <BitCoinIcon />
                    <p className="text-coinbase_blue font-semibold hover:underline">
                        Jump start your portfolio
                    </p>
                    <div className="my-auto">
                        <RightArrow />
                    </div>
                </div>
                
                <div className="space-y-5">
                    <p className="text-7xl font-semibold">Jump start your crypto portfolio</p>
                    <p className="font-semibold text-xl">Coinbase is the easiest place to buy and sell cryptocurrency. Sign up and get started today.</p>
                    <div>
                        <input type="email" placeholder="Email address" className="px-4 py-5 focus:outline-none border border-gray-200 rounded-md focus:border-coinbase_blue w-3/6" />
                        <button className="bg-coinbase_blue text-white px-4 py-5 rounded-md w-2/6 ml-3">
                            Get started
                        </button>
                    </div>
                    <p className="text-xs text-coinbase_blue underline">* Terms apply</p>
                </div>
            </div>
            <div>
                <PhonePic className="w-3/4 mx-auto pt-16"/>
            </div>
        </div>
    );
};

export default MidSection;