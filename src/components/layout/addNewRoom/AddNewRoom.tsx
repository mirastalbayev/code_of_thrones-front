import * as React from 'react';
import {
    Box,
    styled,
    Button,
    Typography,
    Modal,
    TextField
} from '@mui/material';
import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded';
import {useDropzone} from 'react-dropzone';

// type AddNewRoom = {
//     isOpen: boolean;
// }

const NewRoomBtn = styled(Button)({
    backgroundColor: '#7c5efb',
    borderRadius: '24px',
    '&:hover': {
        backgroundColor: 'rgba(124, 94, 251, 1)',
    },
});

const UploadBtn = styled(Button)({
    variant: 'text',
    padding: '6px 0',
    fontSize: '0.8rem'
});

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    display: 'flex',
    flexDirection: 'column',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

function AddNewRoom() {
    const [openModal, setOpenModal] = React.useState(false);
    const handleOpen = () => setOpenModal(true);
    const handleClose = () => setOpenModal(false);

    const {acceptedFiles, getRootProps, getInputProps, open} = useDropzone({ 
        accept: {
            'image/png': [],
            'image/jpeg': [],
        },
        noClick: true,
        noKeyboard: true
    });

    const files = acceptedFiles.map(file => (
        <li key={file.name}>
        {file.name}
        </li>
    ));

    return (
        <div>
            <NewRoomBtn
				sx={{ height: '48px' }}
				variant='contained'
				startIcon={<AddCircleRoundedIcon style={{ fontSize: 35 }} />}
                onClick={handleOpen}
			>
                New Room
			</NewRoomBtn>
            <Modal
                open={openModal}
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
                        Add Room
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
                        label="Description"
                        multiline
                        rows={4}
                        variant="standard"
                        fullWidth
                        sx={{ mb: 2 }}
                    />
                    <section className="container">
                        <div {...getRootProps({className: 'dropzone'})}>
                            <input {...getInputProps()} />
                            <UploadBtn type='button' onClick={open}>Upload img</UploadBtn>
                        </div>
                        <aside>
                            <h5>Files:</h5>
                            <ul>{files}</ul>
                        </aside>
                    </section>
                    <Button>Save</Button>
                </Box>
            </Modal>
        </div>
    );
}

export default AddNewRoom;
