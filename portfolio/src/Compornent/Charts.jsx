import React from 'react';
import {
  Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis,
} from 'recharts';

const data = [
    {Skills: 'Java', '年数': 4, B:10 ,fullMark: 150},
    {Skills: 'JavaScript', '年数': 4 ,B:10 ,fullMark: 150,},
    {Skills: 'Python', '年数': 3,  B:10 ,fullMark: 150,},
    {Skills: 'SQL', '年数': 3, B:10 ,fullMark: 150,},
  ];

const Charts = () => {
    return (
        <RadarChart cx={300} cy={250} outerRadius={150} width={500} height={500} data={data}>
          <PolarGrid /> 
          <PolarAngleAxis dataKey="Skills" />
          <PolarRadiusAxis />
          <Radar name="プログラミング言語" dataKey="年数" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
        </RadarChart>
        )
    };

export default Charts;