import React, { use } from 'react';
import { AuthContext } from '../context/AuthContext';


const Profile = () => {

    const {user} = use(AuthContext)

    return (
        <div>
            {user.email}
        </div>
    );
};

export default Profile;