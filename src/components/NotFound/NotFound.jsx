import PropTypes from 'prop-types'
import { RiErrorWarningFill } from 'react-icons/ri'

const NotFound = ({ not_found_text }) => {
    return (
        <div className='flex gap-3 items-center justify-center'>
            <RiErrorWarningFill className='text-7xl text-[red]' />
            <h2 className="text-5xl font-semibold">{`${not_found_text}`}</h2>
        </div>
    );
};

NotFound.propTypes = {
    not_found_text: PropTypes.string,
}

export default NotFound;