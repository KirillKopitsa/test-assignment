import React from "react";
import style from "../../styles/style";

interface IProps {
    startDate: string;
};


const DataTimeClient: React.FC<IProps> = ({startDate}) => {
    const startTime = new Date(Date.parse(startDate)).toString().split(' ')[4]
    return (
        <div style={style.root}>
            <div style={style.name}><h4>Start time</h4></div>
            <div>{startTime}</div>
        </div>
    )
}
export default DataTimeClient;