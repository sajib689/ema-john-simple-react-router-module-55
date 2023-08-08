import React, { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProviders';
import { useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const {user,loading} = useContext(AuthContext)
    const location = useLocation()
    if(loading) {
        return <div className='flex justify-center items-center'><span className="align-middle loading loading-ring loading-lg"></span></div>
    }
    if(user) {
        return children
    }
    return <Navigate to='/login' state={{from: location}} replace={true}></Navigate>
};

export default PrivateRoute;