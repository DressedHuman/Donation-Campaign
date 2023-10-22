import PropTypes from 'prop-types'

const Donation = ({ donationItem }) => {
    const { title, category, donationPrice, imageURL, category_bg, card_bg, text_color } = donationItem;

    return (
        <div className="flex rounded-lg" style={{backgroundColor: category_bg}}>
            <img src={imageURL} alt={title} className="w-56 h-full object-cover rounded-l-lg" />
            <div className="p-6">
                <button className="py-1 px-[10px] rounded mb-2 text-sm" style={{ color: text_color, backgroundColor: card_bg }}>{category}</button>

                <h2 className="text-2xl text-[#0b0b0b] font-semibold mb-2">{title}</h2>

                <p className="font-semibold mb-5" style={{ color: text_color }}>${donationPrice.toFixed(2)}</p>

                <button className="btn btn-primary border-none capitalize px-4 py-2 rounded text-lg text-white font-semibold" style={{ backgroundColor: text_color }}>View Details</button>
            </div>
        </div>
    );
};

Donation.propTypes = {
    donationItem: PropTypes.object,
}

export default Donation;