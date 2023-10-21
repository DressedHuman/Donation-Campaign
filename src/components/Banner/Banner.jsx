const Banner = () => {
    return (
        <div>
            <div className="hero h-[457px]" style={{ backgroundImage: 'url(/src/assets/banner.jpg)' }}>
                <div className="hero-overlay bg-white bg-opacity-[95%]"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-full">
                        <h1 className="mb-5 text-5xl text-[#0B0B0B] font-bold">I Grow By Helping People In Need</h1>
                        <div className="join w-2/3">
                            <input className="input input-bordered join-item w-[370px] text-[#0b0b0b66] focus:outline-none border-r-0" placeholder="Search here..." />
                            <button className="btn bg-[#FF444A] hover:bg-[#F53525] text-white font-semibold join-item rounded-r-2 capitalize border border-[#FF444A] w-[110px]">Search</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;