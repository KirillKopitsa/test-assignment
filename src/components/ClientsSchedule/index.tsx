import React, {useEffect, FC} from "react";
import {useDispatch, useSelector} from "react-redux";
import Grid from '@material-ui/core/Grid';
import PaperClientCard from "./ClientCard";
import FormModalWindow from "../ModalWindow";
import {AppDispatch, RootState} from "../../redux/store";
import {ICard} from "../../types/type";
import {scheduleStyles} from "./styles/stylesMaterial";
import {asyncThunkGetClients} from "../../redux/thunk/getClients";


const ClientsSchedule: FC = () => {
    const classes = scheduleStyles();
    const dispatch: AppDispatch = useDispatch();
    const clientsData = useSelector<RootState, ICard[]>(state => state.clients.data);

    useEffect(() => {
        dispatch(asyncThunkGetClients())
    }, [])

    return (
        <div className={classes.root}>
            <Grid container spacing={2}>
                    <FormModalWindow/>
                {clientsData.map((client: ICard) => {
                    return <PaperClientCard key={client.id} getClass={classes.paper} clientData={client}/>
                })}

            </Grid>
        </div>
    )
}
export default ClientsSchedule;