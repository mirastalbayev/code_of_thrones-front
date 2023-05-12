import { List, ListItem, ListItemText } from '@mui/material';



type RoomCard = {
    type: string;
    capacity: number;
    floor: number;
    description: string;
}

function RoomInfoCard(props: RoomCard) {

  
    return(
      
            <List>
                <ListItem>
                  <ListItemText
                    primary="Room Type"
                    secondary={props.type}
                  />
                </ListItem>
                <ListItem>
                  <ListItemText
                    primary="Floor"
                    secondary={props.floor}
                  />
                </ListItem>
                <ListItem>
                  <ListItemText
                    primary="Room Capacity"
                    secondary={props.capacity}
                  />
                </ListItem>
                <ListItem>
                  <ListItemText
                    primary="Room Description"
                    secondary={props.description}
                  />
                </ListItem>
            </List>
              
    )
}

export default RoomInfoCard;