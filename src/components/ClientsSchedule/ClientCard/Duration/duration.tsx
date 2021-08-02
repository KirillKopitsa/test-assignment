import React from "react";
const style ={
    root:{
        display:'flex',
        backgroundColor:'none',
        justifyContent:'center',
        alignItems:'center',
    },
    name:{
        flex:1,
        textAlign:'start',
    }

}

type Props = {
    startDate: string,
    endDate: string,
};


const Duration: React.FC<any> = (props:Props) => {
const {startDate , endDate} = props;
const start = new Date(Date.parse(startDate)).toString().split(' ')[4]
const end = new Date(Date.parse(endDate)).toString().split(' ')[4]

return(
    <div style={style.root}>
        <div style={style.name}><h4>Duration</h4></div>
        <div>{`${start} - ${end}`}</div>
    </div>
)
}
export default Duration;