import bitcoin from "../mainAssets/bitcoin.png";
import chart from "../mainAssets/chart.png";
import eth from "../mainAssets/eth.png";
import bitcoinCash from "../mainAssets/bitcoin-cash.png";
import lite from "../mainAssets/lite.png";

const Row = () => {
    return (
        <tr>
            <td className='py-5'>2</td>
            <td className='py-5'>
                <div className='flex items-center space-x-4 ml-10'>
                    <div className='flex-shrink-0'>
                        <img src={bitcoin} className='h-10 w-10' />
                    </div>
                    <div>
                        <p className='text-lg'>Bitcoin</p>
                    </div>
                    <div>
                        <p className='text-lg'>BTC</p>
                    </div>
                </div>
            </td>
            <td className='py-5'>GHS 1000.00 </td>
            <td className='py-5'> <p className='text-coinbase_green'>+10%</p></td>
            <td className='py-5'>
                <img src={chart} />
            </td>
            <td className='py-5'>
                <button className='bg-coinbase_green px-4 py-3 text-white rounded-md'>
                    Buy
                </button>
            </td>
        </tr>
    )
};

const Row2 = () => {
    return (
        <tr>
            <td className='py-5'>2</td>
            <td className='py-5'>
                <div className='flex items-center space-x-4 ml-10'>
                    <div className='flex-shrink-0'>
                        <img src={eth} className='h-10 w-10' />
                    </div>
                    <div>
                        <p className='text-lg'>Ethereum</p>
                    </div>
                    <div>
                        <p className='text-lg'>ETH</p>
                    </div>
                </div>
            </td>
            <td className='py-5'>GHS 13,390.06 </td>
            <td className='py-5'> <p className='text-coinbase_green'>+10%</p></td>
            <td className='py-5'>
                <img src={chart} />
            </td>
            <td className='py-5'>
                <button className='bg-coinbase_green px-4 py-3 text-white rounded-md'>
                    Buy
                </button>
            </td>
        </tr>
    )
};

const Row3 = () => {
    return (
        <tr>
            <td className='py-5'>3</td>
            <td className='py-5'>
                <div className='flex items-center space-x-4 ml-10'>
                    <div className='flex-shrink-0'>
                        <img src={bitcoinCash} className='h-10 w-10' />
                    </div>
                    <div>
                        <p className='text-lg'>Bitcoin Cash</p>
                    </div>
                    <div>
                        <p className='text-lg'>BCH</p>
                    </div>
                </div>
            </td>
            <td className='py-5'>GHS 3,779.00 </td>
            <td className='py-5'> <p className='text-coinbase_green'>+10%</p></td>
            <td className='py-5'>
                <img src={chart} />
            </td>
            <td className='py-5'>
                <button className='bg-coinbase_green px-4 py-3 text-white rounded-md'>
                    Buy
                </button>
            </td>
        </tr>
    )
};

const Row4 = () => {
    return (
        <tr>
            <td className='py-5'>4</td>
            <td className='py-5'>
                <div className='flex items-center space-x-4 ml-10'>
                    <div className='flex-shrink-0'>
                        <img src={lite} className='h-10 w-10' />
                    </div>
                    <div>
                        <p className='text-lg'>Litecoin</p>
                    </div>
                    <div>
                        <p className='text-lg'>LTC</p>
                    </div>
                </div>
            </td>
            <td className='py-5'>GHS 998.46 </td>
            <td className='py-5'> <p className='text-coinbase_green'>-3.93%</p></td>
            <td className='py-5'>
                <img src={chart} />
            </td>
            <td className='py-5'>
                <button className='bg-coinbase_green px-4 py-3 text-white rounded-md'>
                    Buy
                </button>
            </td>
        </tr>
    )
};

const Table = () => {
    return (
        <div className="max-w-6xl flex flex-col mx-auto w-full">
            <div className='border border-gray-200 px-10'>
                <table className='divide-y divide-gray-200 w-full'>
                    <thead>
                        <tr>
                            <th className='py-4 font-normal text-gray-400 text-left'>#</th>
                            <th className='py-4 pl-10 font-normal text-gray-400 text-left'>Name</th>
                            <th className='py-4 font-normal text-gray-400 text-left'>Price</th>
                            <th className='py-4 font-normal text-gray-400 text-left'>Change</th>
                            <th className='py-4 font-normal text-gray-400 text-left'>Chart</th>
                            <th className='py-4 font-normal text-gray-400 text-left'>Trade</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                        <Row />
                        <Row2 />
                        <Row3 />
                        <Row4 />
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Table;
