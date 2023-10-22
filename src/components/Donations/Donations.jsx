import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getDonatedItemIds } from "../../utilities/LocalStorage";
import Donation from "../Donation/Donation";

const Donations = () => {
    const [donations, setDonations] = useState([]);
    const allDonationItems = useLoaderData();

    useEffect(()=>{
        const donatedItemIds = getDonatedItemIds();
        const donatedItems = allDonationItems.filter(donationItem => donatedItemIds.includes(donationItem.id));

        setDonations(donatedItems);
    },[])

    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mx-[31px]">
            {
                donations.map(donation => <Donation key={donation.id} donationItem={donation} />)
            }
        </div>
    );
};

export default Donations;