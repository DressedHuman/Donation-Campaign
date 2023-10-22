import { NavLink } from "react-router-dom";
import './NavBar.css'
import Banner from "../Banner/Banner";
import PropTypes from 'prop-types'

const NavBar = ({banner}) => {
    return (
        <div className="mb-20">
            <div className={`flex flex-col md:flex-row mx-auto justify-center md:justify-between items-center gap-3 ${"px-7 md:px-7 lg:px-36"}`}>
                <div className="flex">
                    <img src="/src/assets/olive-tree.png" className="w-14" alt="" />
                    <div>
                        <h1 className="text-[#FF444A] font-bold text-3xl">Donation</h1>
                        <p className="text-[#0b0b0bb3] tracking-[6.6px] text-lg font-medium">Campaign</p>
                    </div>
                </div>
                <div className="flex gap-4">
                    <NavLink className={'text-lg text-[#0B0B0B]'} to={'/'}>Home</NavLink>
                    <NavLink className={'text-lg text-[#0B0B0B]'} to={'/donation'}>Donation</NavLink>
                    <NavLink className={'text-lg text-[#0B0B0B]'} to={'/statistics'}>Statistics</NavLink>
                </div>
            </div>
            {
                banner && <Banner />
            }
        </div>
    );
};

NavBar.propTypes = {
    banner: PropTypes.bool,
}

export default NavBar;