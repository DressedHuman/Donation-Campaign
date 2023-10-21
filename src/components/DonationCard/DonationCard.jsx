import PropTypes from 'prop-types'

const DonationCard = ({ donationItem }) => {
    const { category, title, card_bg, category_bg, text_color, imageURL } = donationItem;

    return (
        <div className='w-[312px] rounded-lg' style={{ backgroundColor: card_bg }}>
            <div className='flex flex-col h-full'>
                <img draggable={false} src={imageURL} alt={title} className='w-full h-[194px] rounded-t-lg' />
                <div className='p-4 flex-1'>
                    <button className='py-1 px-[10px] rounded font-medium text-sm' style={{ backgroundColor: category_bg, color: text_color }}>{category}</button>
                    <h2 className='font-semibold text-xl mt-2 flex-grow' style={{ color: text_color }}>{title}</h2>
                </div>
            </div>
        </div>
    );
};

/* const DonationCard = ({ donationItem }) => {
    const { category, title, donationPrice, card_bg, category_bg, text_color, imageURL } = donationItem;

    const cardStyle = {
        backgroundColor: card_bg,
    };

    return (
        <div className='w-[312px] rounded-lg' style={cardStyle}>
            <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                <img src={imageURL} alt={title} className='w-full h-[194px] rounded-t-lg' />
                <div className='p-4' style={{ flex: 1 }}>
                    <button className='py-1 px-[10px] rounded font-medium text-sm' style={{ backgroundColor: category_bg, color: text_color }}>{category}</button>
                    <h2 className='font-semibold text-xl mt-2 flex-grow' style={{ color: text_color }}>{title}</h2>
                </div>
            </div>
        </div>
    );
}; */


DonationCard.propTypes = {
    donationItem: PropTypes.object,
}

export default DonationCard;