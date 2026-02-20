import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';

const Catagories = () => {

    const { id } = useParams();
    const data = useLoaderData();

    const [saveeachdata, setSsveeachdata] = useState([]);

    useEffect(() => {

        if (id == "0") {
            setSsveeachdata(data);
            return
        }
        else if (id === "1") {
            const saveriddata = data.filter(news => news.others.is_today_pick === true);
            setSsveeachdata(saveriddata);
        }
        else {
            const saveriddata = data.filter(news => news.category_id == id);
            setSsveeachdata(saveriddata);

        }




    }, [id, data])

    console.log(saveeachdata);

    return (
        <div>
            <p>Catagory number - {saveeachdata.length} </p>
        </div>
    );
};

export default Catagories;