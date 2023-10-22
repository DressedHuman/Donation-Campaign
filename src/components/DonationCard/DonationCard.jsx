import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';

const DonationCard = ({ donationItem }) => {
    const { id, category, title, card_bg, category_bg, text_color, imageURL } = donationItem;

    return (
        <Link to={`/${category}/${id}`} className={`w-[312px] cursor-pointer mx-auto rounded-lg`} style={{ backgroundColor: card_bg }}>
            <div className='flex flex-col h-full'>
                <img draggable={false} src={imageURL} alt={title} className='w-full h-[194px] rounded-t-lg' />
                <div className='p-4 flex-1 select-none'>
                    <button className='py-1 px-[10px] rounded font-medium text-sm' style={{ backgroundColor: category_bg, color: text_color }}>{category}</button>
                    <h2 className='font-semibold text-xl mt-2 flex-grow' style={{ color: text_color }}>{title}</h2>
                </div>
            </div>
        </Link>
    );
};


DonationCard.propTypes = {
    donationItem: PropTypes.object,
}

export default DonationCard;