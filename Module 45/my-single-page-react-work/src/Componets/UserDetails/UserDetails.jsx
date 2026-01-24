
import { useLoaderData, useParams } from 'react-router';

const UserDetails = () => {
    
    const use = useLoaderData();

    // console.log(use);

    // const params = useParams();
    // console.log(params.userId);
 
    const {userId} = useParams();
    console.log(userId); 

    return (
        <div>
            <p>this is for users details </p>
            <p>{use.name}</p>
            <p>{use.email}</p>
        </div>
    );
};

export default UserDetails;