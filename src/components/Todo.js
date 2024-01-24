import { Button, Card, CardContent, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Grid, IconButton, TextField, Typography } from "@mui/material";
import CheckIcon from '@mui/icons-material/Check';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { useState } from "react";



export default function Todo({ id, title, description, isCompleted, deleteFunction, completeFunction, editFunction }) {

    const [showDeleteDialog, setShowDeleteDialog] = useState(false)
    const [showEditDialog, setShowEditDialog] = useState(false)
    const [updatedTodo, setUpdatedTodo] = useState({ title: title, description: description })


    function handleDeleteClose() {
        setShowDeleteDialog(false)
    }
    function handleDeleteCLick() {
        setShowDeleteDialog(true)
    }
    function handleEditClose() {
        setShowEditDialog(false)
    }
    function handleEditClick() {
        setShowEditDialog(true)
    }

    return (
        <>
            <Dialog
                onClose={handleDeleteClose}
                open={showDeleteDialog}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    Do you want to delete this task?
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        You will now delete the task {`"${title}${description ? " (" + description + ") " : ""}"`}
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button autoFocus onClick={handleDeleteClose}>Disagree</Button>
                    <Button onClick={() => { deleteFunction(id); handleDeleteClose() }} >
                        Agree
                    </Button>
                </DialogActions>
            </Dialog>
            <Dialog
                onClose={handleEditClose}
                open={showEditDialog}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    Edit a task
                </DialogTitle>
                <DialogContent>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="title"
                        label="title"
                        type="text"
                        fullWidth
                        variant="standard"
                        value={updatedTodo.title}
                        onChange={(e) => { setUpdatedTodo({ ...updatedTodo, title: e.target.value }) }}
                    />
                    <TextField
                        margin="dense"
                        id="description"
                        label="description"
                        type="text"
                        fullWidth
                        variant="standard"
                        value={updatedTodo.description}
                        onChange={(e) => { setUpdatedTodo({ ...updatedTodo, description: e.target.value }) }}
                    />
                </DialogContent>
                <DialogActions>
                    <Button autoFocus onClick={handleEditClose}>Disagree</Button>
                    <Button disabled={!updatedTodo.title} onClick={() => { editFunction(id, updatedTodo); handleEditClose() }} >
                        Agree
                    </Button>
                </DialogActions>
            </Dialog>
            <Card
                className="todo-card"
                sx={{ minWidth: 275, margin: '15px 0' }}>
                <CardContent>
                    <Grid container spacing={0} display="flex" justifyContent="space-evenly" alignItems="center">
                        <Grid xs={7}>
                            <Typography variant='h5' sx={{ textAlign: "left", textDecoration: isCompleted ? 'line-through' : 'none' }}>
                                {title}
                            </Typography>
                            <Typography variant='body2' sx={{ textAlign: "left" }}>
                                {description}
                            </Typography>
                        </Grid>
                        <Grid xs={5} display="flex" justifyContent="space-between" alignItems="center">
                            <IconButton onClick={() => completeFunction(id)} className="icon-button" aria-label="Done"
                                style={{ color: !isCompleted ? "#8bc34a" : "white", background: isCompleted ? "#8bc34a" : "white", border: "solid #8bc34a 3px" }}>
                                <CheckIcon />
                            </IconButton>
                            <IconButton onClick={handleEditClick} className="icon-button" aria-label="Edit" style={{ color: "#1769aa", background: "white", border: "solid #1769aa 3px" }}>
                                <EditIcon />
                            </IconButton>
                            <IconButton onClick={handleDeleteCLick} className="icon-button" aria-label="Delete" style={{ color: "#b23c17", background: "white", border: "solid #b23c17 3px" }}>
                                <DeleteIcon />
                            </IconButton>
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
        </>
    )
}