import { useLoaderData } from "react-router-dom";
import DonationCard from "../DonationCard/DonationCard";

const Home = () => {
    const donationItems = useLoaderData();


    return (
        <div className="mx-7">
            <div className="grid grid-cols-4 justify-center gap-7 auto-rows-fr">
                {
                    donationItems.map(donationItem => <DonationCard key={donationItem.id} donationItem={donationItem} />)
                }
            </div>
        </div>
    );
};

export default Home;