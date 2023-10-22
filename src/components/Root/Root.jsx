import { Outlet, useLoaderData, useLocation } from 'react-router-dom';
import NavBar from '../NavBar/NavBar';
import { createContext, useState } from 'react';

export const DisplayDataContext = createContext([]);

const Root = () => {
    const location = useLocation();
    const [displayData, setDisplayData] = useState([]);
    const donationItems = useLoaderData();
    let [searchCategory, setSearchCategory] = useState('');
    const [searching, setSearching] = useState(false);

    return (
        <>
            <DisplayDataContext.Provider value={{displayData, setDisplayData, donationItems, searchCategory, setSearchCategory, searching, setSearching}}>
                {location.pathname === '/' ? <div className='py-3 lg:py-12'>
                    <NavBar banner={true} />
                    <Outlet />
                </div> : <div className='py-3 lg:py-12'>
                    <NavBar />
                    <Outlet />
                </div>}
            </DisplayDataContext.Provider>
        </>
    );
};

export default Root;