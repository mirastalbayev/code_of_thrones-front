import UserInfo from "./UserInfo";
import { Divider, List, ListItemText, Typography } from "@mui/material";
import React from "react";
import RoomReservationListItem from "./RoomReservationListItem";

type Reservation ={
    id: number;
    userID: number;
    reservation: number[];
}
type Room = {
    reservationList: Reservation[];
}

function RoomReservationList(props: Room){

   

    return (
        <div>
            <List sx={{ width: '100%', maxWidth: 900, bgcolor: 'background.paper' }}>
            <ListItemText 
            primary = {
                <React.Fragment>
                    <Typography variant='h4'>
                        List of Reservations
                    </Typography>
                </React.Fragment>
            }
            />
            <h3></h3>
            <ul>
                {props.reservationList.map((reservations) => (
                    <div key={reservations.id}>
                        <ListItemText 
                        primary = {
                            <UserInfo userID={reservations.userID}/>
                        }
                        />
                        <RoomReservationListItem id={reservations.id} start={reservations.reservation[0]} end={reservations.reservation[1]}/>
                    </div>
                )
                )}
            </ul>
            </List>
        </div>
    )
}

export default RoomReservationList;