import React from "react";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import ClientNameStartTime from "./ClientName";
import DataTimeClient from "./StartTime";
import Duration from "./Duration/duration";
import DoctorName from "./DrName";
import DeleteButton from "./DeleteButton";
import {ICard} from "../../../types/type";


interface Iprops {
    getClass: string;
    clientData: ICard;
};


const PaperClientCard: React.FC<Iprops> = (props ) => {
    const {getClass, clientData} = props;
    const {startDate, endDate, clinicianName} = clientData
    const {id} = props.clientData;

    const starData = new Date(startDate);
    const endData = new Date(endDate);
    let diffBetweenDates = Math.abs(endData.getTime() - starData.getTime());
    const hoursPart = diffBetweenDates / (1000 * 60 * 60);

    const style = {
        height: 280,
        backgroundColor: hoursPart > 1 ?  '#b9f6ca' : 'none',
    }

    return (
        <Grid item xs={12} sm={6} md={3}>
            <Paper elevation={3} style={style} className={getClass}>
                <ClientNameStartTime name={clientData.patient.name} startDate={clientData.startDate}/>
                <DataTimeClient startDate={clientData.startDate}/>
                <Duration startDate={startDate} endDate={endDate}/>
                <DoctorName drName={clinicianName}/>
                <DeleteButton cardId={id}/>
            </Paper>
        </Grid>
    )
}

export default PaperClientCard;
