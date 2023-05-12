import { Button, Divider, List, ListItem, ListItemText, Typography } from "@mui/material";
import React from "react";

type ReservationListItem = {
    id: number;
    start: number;
    end: number;
}


function RoomReservationListItem(props: ReservationListItem) {
    
    function handleReservationDelete () {
        console.log(`Deleting reservation ${props.id}`);
    }

    return (
        <List>
    <ListItem alignItems="flex-start">
      <ListItemText
        secondary={
          <React.Fragment>
            <Typography
              sx={{ display: 'inline' }}
              component="span"
              variant="body2"
              color="text.primary"
            >
              Start Time:
            </Typography>
            {props.start}
          </React.Fragment>
        }
      />
       <ListItemText
        secondary={
          <React.Fragment>
            <Typography
              sx={{ display: 'inline' }}
              component="span"
              variant="body2"
              color="text.primary"
            >
              End Time:
            </Typography>
            {props.end}
          </React.Fragment>
        }
      />
      <Button  onClick={() => {handleReservationDelete()}} variant="contained" >Delete Reservation</Button>
    </ListItem>
    <Divider variant="inset" component="li" /> 
    </List>
    
  )

}

export default RoomReservationListItem;