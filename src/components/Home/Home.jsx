import DonationCard from "../DonationCard/DonationCard";
import { useContext, useEffect } from "react";
import { DisplayDataContext } from "../Root/Root";
import NotFound from "../NotFound/NotFound";

const Home = () => {
    const { displayData, setDisplayData, donationItems, searchCategory } = useContext(DisplayDataContext);

    useEffect(() => {
        setDisplayData(donationItems);
    }, []);


    return (
        <div className="mx-7">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-center gap-7 auto-rows-fr">
                {
                    displayData.map(donationItem => <DonationCard key={donationItem.id} donationItem={donationItem} />)
                }
            </div>
            <div>
                {
                    displayData.length === 0 && <NotFound not_found_text={`"${searchCategory}" doesn't match any category!`} />
                }
            </div>
        </div>
    );
};

export default Home;