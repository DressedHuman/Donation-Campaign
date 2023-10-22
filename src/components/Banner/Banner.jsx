import { useContext, useState } from "react";
import { DisplayDataContext } from "../Root/Root";

const Banner = () => {
    const [inputSearchCategory, setInputSearchCategory] = useState('');
    const { setDisplayData, donationItems, setSearchCategory } = useContext(DisplayDataContext);


    const handleInput = e => {
        setInputSearchCategory(e.target.value);
    }

    const handleSearch = e => {
        e.preventDefault();
        let searchItems;

        switch (inputSearchCategory.length) {
            case 0:
                setDisplayData(donationItems);
                break;

            default:
                searchItems = donationItems.filter(donationItem => donationItem.category == inputSearchCategory);
                switch (searchItems.length) {
                    case 0:
                        setDisplayData([]);
                        setSearchCategory(inputSearchCategory);
                        break;

                    default:
                        setDisplayData(searchItems);
                }
        }
    }

    return (
        <div>
            <div className="hero md:h-[457px] w-full" style={{ backgroundImage: 'url(/src/assets/banner.jpg)' }}>
                <div className="hero-overlay bg-white bg-opacity-[90%]"></div>
                <div className="text-center text-neutral-content p-7">
                    <div className="mx-auto">
                        <h1 className="mb-5 text-xl md:text-5xl text-[#0B0B0B] font-bold">I Grow By Helping People In Need</h1>
                        <form onSubmit={handleSearch} className="join w-2/3">
                            <input onChange={handleInput} autoFocus className="input input-bordered join-item w-[300px] md:w-[370px] text-[#0b0b0b66] focus:outline-none border-r-0" placeholder="Search here..." />
                            <button type="submit" className="btn bg-[#FF444A] hover:bg-[#F53525] text-white font-semibold join-item rounded-r-2 capitalize border border-[#FF444A] w-[75px] md:w-[110px]">Search</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;