import { Outlet, useLocation } from 'react-router-dom';
import NavBar from '../NavBar/NavBar';

const Root = () => {
    const location = useLocation();
    return (
        <>
            {location.pathname === '/' ? <div className='py-12'>
                <NavBar banner={true} />
                <Outlet />
            </div> : <div className='px-36 py-12'>
                <NavBar />
                <Outlet />
            </div>}
        </>
    );
};

export default Root;