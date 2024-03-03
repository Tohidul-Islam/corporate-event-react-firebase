import PropTypes from 'prop-types';
import { useContext } from 'react';
import { AuthContext } from '../Authentication/AuthProvider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
    const { user, loader } = useContext(AuthContext);
    const location = useLocation()
    console.log('state location from private route', location.pathname)

    if (loader) {
        return <span className="loading loading-spinner text-error loading-lg"></span>

    }
    if (user) {
        return children;
    }
    return <Navigate state={location.pathname} to='/login'></Navigate>
};

export default PrivateRoute;
PrivateRoute.propTypes = {
    children: PropTypes.node
}
