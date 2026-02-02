import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import { getexitstingdata } from '../../Utilities/addtodata';
import SingleBook from '../SingleBook/SingleBook';






const Readlist = () => {

    const dataload = useLoaderData();

    const [finalreadlistdata, setfinalreadlistdata] = useState([]);

    const [sorteddata, setsorteddata] = useState("");

    useEffect(() => {
        const localdata = getexitstingdata();
        const localdata_int = localdata.map(id => parseInt(id));
        const readlistdata = dataload.filter(book => localdata_int.includes(book.bookId));
        console.log(readlistdata);
        setfinalreadlistdata(readlistdata);


    }, []);


    const handleSortChange = (type) => {
        if(type === "pages"){
            const sortedbypages = [...finalreadlistdata].sort((a,b) => a.totalPages - b.pagestotalPages);
            setfinalreadlistdata(sortedbypages);
        }
        if(type === "ratings"){
            const sortedbyratings = [...finalreadlistdata].sort((a,b) => b.rating - a.rating);
            setfinalreadlistdata(sortedbyratings);
        }
        setsorteddata(type);
    }


    return (
        <div>
            <details className="dropdown">
                <summary className="btn m-1">{sorteddata ? sorteddata: "Sort by"}</summary>
                <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                    <li onClick={() => handleSortChange("pages")}><a>Pages</a></li>
                    <li onClick={() => handleSortChange("ratings")}><a>Ratings</a></li>
                </ul>
            </details>



            {/* name of each tab group should be unique */}
            <div className="tabs tabs-lift">
                <input type="radio" name="my_tabs_3" className="tab" aria-label="Tab 1" />
                <div className="tab-content bg-base-100 border-base-300 p-6">{
                    finalreadlistdata.map(item => <SingleBook key={item.bookId} bookitemloader={item}></SingleBook>)
                }</div>

                <input type="radio" name="my_tabs_3" className="tab" aria-label="Tab 2" defaultChecked />
                <div className="tab-content bg-base-100 border-base-300 p-6">Tab content 2</div>

                <input type="radio" name="my_tabs_3" className="tab" aria-label="Tab 3" />
                <div className="tab-content bg-base-100 border-base-300 p-6">Tab content 3</div>
            </div>

        </div>
    );
};

export default Readlist;