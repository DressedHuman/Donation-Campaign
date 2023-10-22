import PropTypes from 'prop-types'
import { useLoaderData, useParams } from 'react-router-dom';
import { saveDonatedItemIds } from '../../utilities/LocalStorage';
import { Slide, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const DonationItem = () => {
    const donationItems = useLoaderData();
    const { paramId } = useParams();
    const donationItem = donationItems.find(donationItem => donationItem.id == paramId);
    const { id, title, description, donationPrice, text_color, imageURL } = donationItem;

    const handleDonate = () => {
        const successful_or_donatedYet = saveDonatedItemIds(id);
        if (successful_or_donatedYet) {
            toast.success("Donation Successful!")
        }
        else {
            toast.error(`You've already donated for this item!`)
        }
    }

    return (
        <div className='mx-20'>
            <>
                <div className="hero h-[570px] relative rounded" style={{ backgroundImage: `url(${imageURL})` }}>
                    <div className="hero-overlay h-[130px] absolute bottom-0 bg-[#0b0b0b] bg-opacity-[50%]"></div>
                    <button onClick={handleDonate} className={`absolute px-7 py-4 rounded font-semibold text-xl text-white bottom-[35px] left-16 bg-[${text_color}] btn-primary`}>{`Donate $${donationPrice}`}</button>
                </div>
                <h1 className='text-[40px] text-[#0B0B0B] font-bold mt-14 mb-6'>{title}</h1>
                <p className='text-[#0b0b0bb3]'>{description}</p>
            </>
            <ToastContainer limit={2} {...{
                position: "bottom-left",
                transition: Slide,
                autoClose: 750,
                hideProgressBar: true,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                theme: "dark",
            }} />
        </div>
    );
};

DonationItem.propTypes = {
    donationItem: PropTypes.object,
}

export default DonationItem;