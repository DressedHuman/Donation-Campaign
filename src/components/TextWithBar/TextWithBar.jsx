import PropTypes from 'prop-types'

const TextWithBar = ({ text, width, color }) => {
    return (
        <div className="flex items-center gap-4">
            <p className='text-[#0b0b0b] text-lg'>{text}</p>
            <div className="h-4 rounded-lg">
                <div
                    className="h-full rounded-lg"
                    style={{ width: `${width}px`, backgroundColor: color }}
                ></div>
            </div>
        </div>
    );
};

TextWithBar.propTypes = {
    text: PropTypes.string,
    width: PropTypes.number,
    color: PropTypes.string,
}

export default TextWithBar;