import { Card, CardContent, Grid, IconButton, Typography } from "@mui/material";
import CheckIcon from '@mui/icons-material/Check';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

export default function Todo() {
    return (
        <>
            <Card
            className="todo-card"
             sx={{ minWidth: 275, margin: '15px 0' }}>
                <CardContent>
                    <Grid container spacing={0}>
                        <Grid xs={8}>
                            <Typography variant='h5' sx={{ textAlign: "left" }}>
                                First Mission
                            </Typography>
                            <Typography variant='body2' sx={{ textAlign: "left" }}>
                                Description Of First Mission
                            </Typography>
                        </Grid>
                        <Grid xs={4} display="flex" justifyContent="space-between" alignItems="center">
                            <IconButton className="icon-button" aria-label="Done" style={{ color:"#8bc34a", background:"white", border:"solid #8bc34a 3px" }}>
                                <CheckIcon />
                            </IconButton>
                            <IconButton className="icon-button" aria-label="Edit" style={{ color:"#1769aa", background:"white", border:"solid #1769aa 3px" }}>
                                <EditIcon />
                            </IconButton>
                            <IconButton className="icon-button" aria-label="Delete" style={{ color:"#b23c17", background:"white", border:"solid #b23c17 3px" }}>
                                <DeleteIcon />
                            </IconButton>
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
        </>
    )
}