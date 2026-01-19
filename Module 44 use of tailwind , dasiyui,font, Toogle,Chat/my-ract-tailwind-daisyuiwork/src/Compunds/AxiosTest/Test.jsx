import React from 'react';
import { use } from 'react';
import { BarChart, Bar } from 'recharts';

const Test = ({ axios_api }) => {


    const axios_api_last = use(axios_api);
    const data = axios_api_last.data;

    // console.log(data);

    //data remove form nested array

    const data_marks = data.map((item) => {

        const marks = {
            name: item.details.name,
            physics: item.details.marks.physics,
            chemistry: item.details.marks.chemistry,
            maths: item.details.marks.english,

        }
        const avg = (marks.physics + marks.chemistry + marks.maths) / 3;
        marks.avg = avg;

        return marks;
    })

    console.log(data_marks);



    return (
        <div>

            <BarChart
                style={{ width: '100%', maxWidth: '300px', maxHeight: '100px', aspectRatio: 1.618 }}
                responsive
                data={data_marks}
            >
                <Bar dataKey="physics" fill="#8884d8" />
                <Bar dataKey="chemistry" fill="#8884d8" />
                <Bar dataKey="maths" fill="#8884d8" />
            </BarChart>

        </div>
    );
};

export default Test;


