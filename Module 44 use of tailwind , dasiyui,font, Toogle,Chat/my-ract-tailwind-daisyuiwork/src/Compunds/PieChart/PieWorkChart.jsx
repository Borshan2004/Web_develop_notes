import React from 'react';
import { CartesianGrid, Legend, Line, LineChart, XAxis, YAxis } from 'recharts';



const data = [
    {
        "student": "Student 1",
        "physics": 78,
        "chemistry": 82,
        "math": 90
    },
    {
        "student": "Student 2",
        "physics": 85,
        "chemistry": 79,
        "math": 88
    },
    {
        "student": "Student 3",
        "physics": 92,
        "chemistry": 91,
        "math": 95
    },
    {
        "student": "Student 4",
        "physics": 67,
        "chemistry": 70,
        "math": 72
    },
    {
        "student": "Student 5",
        "physics": 88,
        "chemistry": 86,
        "math": 91
    },
    {
        "student": "Student 6",
        "physics": 74,
        "chemistry": 76,
        "math": 80
    },
    {
        "student": "Student 7",
        "physics": 90,
        "chemistry": 89,
        "math": 93
    },
    {
        "student": "Student 8",
        "physics": 81,
        "chemistry": 84,
        "math": 87
    },
    {
        "student": "Student 9",
        "physics": 69,
        "chemistry": 73,
        "math": 75
    },
    {
        "student": "Student 10",
        "physics": 95,
        "chemistry": 94,
        "math": 98
    }
]


const PieWorkChart = () => {
    return (
        <div>
           

            <LineChart style={{ width: '100%', aspectRatio: 1.618, maxWidth: 600 }} responsive data={data}>
                <CartesianGrid />
                <Line dataKey="physics" />
                <XAxis dataKey="student" />
                <YAxis />
                <Legend />
            </LineChart>
        </div>
    );
};

export default PieWorkChart;

