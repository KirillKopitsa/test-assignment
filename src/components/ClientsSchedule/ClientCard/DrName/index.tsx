import React from "react";
import style from "../../styles/style";



interface IProps {
    drName: string;

};

const DoctorName = ({drName}: IProps) => {

    return (
        <div style={style.root}>
            <div style={style.name}><h4>Dr Name</h4></div>
            <div>{<h3>{drName}</h3>}</div>
        </div>
    )
}

export default DoctorName;
