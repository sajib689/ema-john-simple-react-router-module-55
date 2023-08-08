import React, { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProviders';

const PrivateRoute = ({children}) => {
    const {user,loading} = useContext(AuthContext)
    if(loading) {
        return <div className='flex justify-center items-center'><span className="align-middle loading loading-ring loading-lg"></span></div>
    }
    if(user) {
        return children
    }
    return <Navigate to='/login' replace={true}></Navigate>
};

export default PrivateRoute;