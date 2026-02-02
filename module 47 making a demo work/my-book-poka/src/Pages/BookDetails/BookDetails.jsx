
import { useLoaderData, useParams } from 'react-router';
import { addtodata } from '../../Utilities/addtodata';

import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal)



import { ToastContainer, toast } from 'react-toastify';


const BookDetails = () => {

    // here i have use the parms 
    const { bookId } = useParams();
    const newbookid = parseInt(bookId);

    const usedata = useLoaderData();

    console.log(newbookid);
    console.log(usedata);

    const singledata = usedata.find(bdata => bdata.bookId === newbookid);

    const handlertodatabase = (id) => {
        // Call the utility function to add the bookId to localStorage
        toast("Wow so easy!");
        addtodata(id);

        // MySwal.fire({
        //     title: "Drag me!",
        //     icon: "success",
        //     draggable: true
        // })
    }


    return (
        <div>

            <div className="hero bg-base-200  p-24 rounded-2xl ">
                <div className="hero-content flex-col lg:flex-row-reverse">

                    <div>
                        <h1 className="text-5xl font-bold">Box Office News!</h1>
                        <p className="py-6">
                            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                            quasi. In deleniti eaque aut repudiandae et a id nisi.
                        </p>
                        <div className='flex gap-3'>
                            <button onClick={() => handlertodatabase(newbookid)} className="btn btn-primary">Read</button>
                             <ToastContainer />
                            <button className="btn btn-primary">wishlist</button>
                        </div>

                    </div>
                    <img className='w-96' src={singledata.image} alt="" />
                </div>
            </div>

        </div>
    );
};

export default BookDetails;