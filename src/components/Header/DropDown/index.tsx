import React from 'react';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import PopupState, {bindTrigger, bindMenu} from 'material-ui-popup-state';
import MenuIcon from "@material-ui/icons/Menu";
import IconButton from "@material-ui/core/IconButton";
import {useDispatch} from "react-redux";
import {sortByName} from "../../../redux/sliceClients";

export default function MenuPopupState() {
    const dispatch = useDispatch();
    const sortSchedule = (boolean:boolean) => {
        dispatch(sortByName(boolean)
    };

    return (
        <PopupState variant="popover" popupId="demo-popup-menu">
            {(popupState) => (
                <React.Fragment>
                    <IconButton edge="start" color="inherit" aria-label="menu" {...bindTrigger(popupState)}>
                        <MenuIcon/>
                    </IconButton>
                    <Menu {...bindMenu(popupState)}>
                        <MenuItem onClick={() => sortSchedule(true)}>Sort by Name</MenuItem>
                        <MenuItem onClick={() => sortSchedule(false)}>Sort by Day</MenuItem>
                    </Menu>
                </React.Fragment>
            )}
        </PopupState>
    );
}