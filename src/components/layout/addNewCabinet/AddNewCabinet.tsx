import * as React from 'react';
import { useState } from 'react';
import { 
    Box,
    Button,
    Typography,
    Modal,
    TextField
} from '@mui/material';
import FileUpload from "react-material-file-upload";

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

function AddNewCabinet() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    
    const [selectedFile, setSelectedFile] = useState();
    const [isSelected, setIsSelected] = useState(false);

    const changeHandler = (event) => {
        setSelectedFile(event.target.files[0]);
        setIsSelected(true);
    };

    return (
        <div>
        <Button onClick={handleOpen}>Open modal</Button>
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                <Typography
                    id="modal-title"
                    variant="h6"
                    component="h2"
                    align='center'
                >
                    Add Cabinet
                </Typography>
                <TextField
                    required
                    id="input-number"
                    label="Number"
                    type="number"
                    variant="standard"
                    fullWidth
                    sx={{ mb: 2 }}
                />
                <TextField
                    required
                    id="input-floor"
                    label="Floor"
                    type="number"
                    variant="standard"
                    fullWidth
                    sx={{ mb: 2 }}
                />
                <TextField
                    required
                    id="input-type"
                    label="Type"
                    type="text"
                    variant="standard"
                    fullWidth
                    sx={{ mb: 2 }}
                />
                <TextField
                    id="textarea"
                    label="Multiline"
                    multiline
                    rows={4}
                    variant="standard"
                    fullWidth
                    sx={{ mb: 2 }}
                />
                <Button
                    variant="text"
                    sx={{ marginRight: 0 }}
                    component="label"
                >
                    Upload Img
                    <input
                        hidden
                        accept="image/*"
                        multiple
                        type="file"
                        name='file'
                        onChange={changeHandler}
                    />
                </Button>
                {isSelected ? (
                    <div>
                        <Typography noWrap overflow="hidden" textOverflow="ellipsis" maxWidth="250px">
                            Filename: {selectedFile.name.length > 20 ? `${selectedFile.name.split(' ').slice(0, -1).join(' ').substring(0, 10)}...${selectedFile.name.split('.').pop()}` : selectedFile.name}
                        </Typography>
                    </div>
                ) : (
                    <p>Select a file to show details</p>
                )}
            </Box>
        </Modal>
        </div>
    );
}

export default AddNewCabinet;
