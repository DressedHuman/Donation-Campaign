import { useLoaderData } from "react-router-dom";
import DonationCard from "../DonationCard/DonationCard";

const Home = () => {
    const donationItems = useLoaderData();
    
    return (
        <div className="grid grid-cols-4 gap-3 justify-center auto-rows-fr">
            {
                donationItems.map(donationItem => <DonationCard key={donationItem.id} donationItem={donationItem}/>)
            }
        </div>
    );
};

export default Home;