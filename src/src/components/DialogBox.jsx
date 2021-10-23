import React, { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';

export default function FormDialog(props) {
    const { open, handleClose, setTitleData, setDesc, } = props
    const [title, setTitle] = useState('')
    const [desc, setDescription] = useState('')

    const handleAddTodo = () => {
        setTitleData(title)
        setDesc(desc)
        // handleAppendTodo()
        handleClose()
    }

    const handleTitle = (e) => {
        setTitle(e.target.value)
    }

    const handleDescription = (e) => {
        setDescription(e.target.value)
    }

    return (
        <div>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Add todo</DialogTitle>
                {/* <form onSubmit={handleAddTodo}> */}
                    <DialogContent>
                        <TextField
                            margin="dense"
                            id="title"
                            label="Title"
                            type="text"
                            fullWidth
                            value={title}
                            onChange={handleTitle}
                            variant="outlined"
                        />
                        <TextField
                            margin="dense"
                            id="description"
                            label="Description"
                            type="text"
                            fullWidth
                            variant="outlined"
                            value={desc}
                            onChange={handleDescription}
                        />
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose}>Cancel</Button>
                        <Button onClick={handleAddTodo}>Add</Button>
                    </DialogActions>
                {/* </form> */}
            </Dialog>
        </div >
    );
}