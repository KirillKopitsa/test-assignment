import React from "react";
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import style from "../../styles/style";
import {useDispatch} from "react-redux";
import {deleteCard} from "../../../../redux/sliceClients";

interface IProps {
    cardId:string;
}



const DeleteButton:React.FC<IProps> = ({cardId}) => {
    const dispatch = useDispatch();
    const handleClick = () => {
        dispatch(deleteCard(cardId))
    }
    return (
        <div style={style.root}>
            <div style={style.name}></div>
            <div>
                <IconButton onClick={handleClick} aria-label="delete">
                    <DeleteIcon fontSize="medium"/>
                </IconButton>
            </div>
        </div>
    )
}
export default DeleteButton;