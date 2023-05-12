import { Button } from "@mui/material";
import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useState } from "react";
import { StyledEngineProvider } from '@mui/material/styles';
import PickDateAndTime from "./PickDateAndTime";


const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 650,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

function MakeReservation () {
  const [name, setName] = useState("");
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  function handleClick(event: React.FormEvent) {
    event.preventDefault();
    //fetch POST
  }

  return (
    <div>
      <Button onClick={handleOpen} variant="contained">Make Reservation</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
                Make Reservation Form
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                Please provide the information below
            </Typography>
            <form onSubmit={handleClick}>
                <React.StrictMode>
                    <StyledEngineProvider injectFirst>
                        <PickDateAndTime />
                    </StyledEngineProvider>
                </React.StrictMode>
                <br></br>
                <Button variant="contained">Submit</Button>
            </form>
        </Box>
      </Modal>
    </div>
  );
}




export default MakeReservation;