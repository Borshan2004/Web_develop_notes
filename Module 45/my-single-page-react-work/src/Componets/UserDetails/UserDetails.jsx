
import { useLoaderData } from 'react-router';

const UserDetails = () => {
    
    const use = useLoaderData();

    console.log(use);

    return (
        <div>
            <p>this is for users details </p>
            <p>{use.name}</p>
            <p>{use.email}</p>
        </div>
    );
};

export default UserDetails;