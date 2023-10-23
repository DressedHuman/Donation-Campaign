import { useContext, useEffect, useState } from "react";
import { getDonatedItemIds } from "../../utilities/LocalStorage";
import Donation from "../Donation/Donation";
import NotFound from "../NotFound/NotFound";
import { DisplayDataContext } from "../Root/Root";

const Donations = () => {
    const [donations, setDonations] = useState([]);
    const { donationItems } = useContext(DisplayDataContext);
    const [displayItemsLength, setDisplayItemsLength] = useState(4);

    useEffect(() => {
        const donatedItemIds = getDonatedItemIds();
        const donatedItems = donationItems.filter(donationItem => donatedItemIds.includes(donationItem.id));

        setDonations(donatedItems);
    }, [])

    return (
        <>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mx-[31px]">
                {
                    donations.slice(0, displayItemsLength).map(donation => <Donation key={donation.id} donationItem={donation} />)
                }
            </div>
            {
                !donations.length && <NotFound not_found_text={"You haven't donated yet!"} />
            }
            {
                donations.length > 4 && displayItemsLength === 4 && <div className="text-center mt-10">
                    <button onClick={()=>setDisplayItemsLength(donations.length)} className="btn btn-primary border-none px-7 py-4 rounded-lg bg-[#009444] text-white font-semibold">See All</button>
                </div>
            }
        </>
    );
};

export default Donations;