import React, {useState} from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import {nanoid} from '@reduxjs/toolkit';
import {useDispatch} from "react-redux";
import {handleAddCard} from '../../redux/sliceClients';
import IconButton from "@material-ui/core/IconButton";
import AddOutlinedIcon from '@material-ui/icons/AddOutlined';
import {ICard} from "../../types/type";
import {AppDispatch} from "../../redux/store";
import Grid from "@material-ui/core/Grid";

const modalContainerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
}

export default function FormModalWindow() {
    const dispatch: AppDispatch  = useDispatch()
    const [open, setOpen] = useState<boolean>(false);
    const [card, setCard] = useState<ICard>({
        "id": 'none',
        "startDate": 'none',
        "endDate": 'none',
        "clinicianName": "none",
        "patient": {
            "id": "none",
            "name": "none",
        },
        "status": "ACTIVE"
    },);
    const [disabled, setDisabled] = useState<boolean>(true);
    const onChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value: string = e.target.value;
        setDisabled(value.length === 0)
        setCard({...card, patient: {id: nanoid(), name: value}})
    }

    const onChangeDataTime = (e: React.ChangeEvent<HTMLInputElement>) => {
        const currentDate = e.target.value
        const endDate = new Date(currentDate);
        endDate.setMinutes(endDate.getMinutes() + 60);

        setCard({...card, startDate: new Date(currentDate).toISOString(), endDate: endDate.toISOString()})
    }
    const onChangeDrName = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setCard({...card, clinicianName: value})
    }

    const hanleClickAddCard = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        dispatch(handleAddCard(card))
        setCard({
            "id": 'none',
            "startDate": 'none',
            "endDate": 'none',
            "clinicianName": 'none',
            "patient": {
                "id": "none",
                "name": "none",
            },
            "status": "ACTIVE");
        setOpen(false);
        setDisabled(true)
    }

        const handleClickOpen = (e: React.MouseEvent) => {
            setCard({...card, id: nanoid()})
            setOpen(true);
        };
        const handleClose = () => {
            setOpen(false);
        };
        return (
            <Grid item style={modalContainerStyle} xs={3}>
            <div>
                <IconButton onClick={handleClickOpen} aria-label="delete">
                    <AddOutlinedIcon style={{fontSize: 50}}/>
                </IconButton>
                <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                    <DialogTitle id="form-dialog-title">Create Client Card</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            Enter your information
                        </DialogContentText>
                        <TextField
                            autoFocus
                            onChange={onChangeName}
                            margin="dense"
                            id="name"
                            label="Your Name"
                            type="text"
                            fullWidth
                        />
                        <TextField
                            margin="dense"
                            onChange={onChangeDataTime}
                            id="date"
                            label=""
                            type="datetime-local"
                            fullWidth
                        />
                        <TextField
                            margin="dense"
                            onChange={onChangeDrName}
                            id="date"
                            label="Dr Name"
                            type="text"
                            fullWidth
                        />
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose} color="primary">
                            Cancel
                        </Button>
                        <Button disabled={disabled} onClick={hanleClickAddCard} color="primary">
                            Add card
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
            </Grid>
        );
    };