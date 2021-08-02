import React from "react";
import style from "../../styles/style";


interface IClienNameProps {
    name: string;
    startDate: string;

}


const ClientNameStartTime: React.FC<IClienNameProps> = ({name, startDate}) => {
    const dStart = new Date(Date.parse(startDate)).toDateString()
    return (
        <div style={style.root}>
            <div style={style.name}><h2>{name}</h2></div>
            <div>{dStart}</div>
        </div>
    )
}
export default ClientNameStartTime;