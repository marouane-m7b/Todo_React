import * as React from 'react';
import Container from '@mui/material/Container';
import { Button, Card, CardContent, Divider, Grid, TextField, ToggleButton, ToggleButtonGroup, Typography } from '@mui/material';

import Todo from './Todo';

const todos = [{
    title: 'Buy groceries',
    description: 'Buy bread, cheese, and milk',
    completed: false,
},
{
    title: 'Clean the house',
    description: 'Clean the living room, kitchen, and bathroom',
    completed: false,
},
{
    title: 'Go for a walk',
    description: 'Go for a walk around the block',
    completed: false,
},
{
    title: 'Do the laundry',
    description: 'Do the laundry',
    completed: false,
}]



export default function TodoList() {
    return (
        <Container className='container' maxWidth="sm">
            <Card className='todo-list' sx={{ minWidth: 275 }}>
                <CardContent>
                    <Typography variant='h3'>
                        ToDo List
                    </Typography>
                    <Divider />
                    <ToggleButtonGroup
                        exclusive
                        aria-label="text alignment"
                        style={{
                            marginTop: "20px",
                            marginBottom: "20px"
                        }} >
                        {/* ========== START FILTER ==========*/}
                        <ToggleButton value="left">
                            To Do
                        </ToggleButton>
                        <ToggleButton value="center">
                            In Progress
                        </ToggleButton>
                        <ToggleButton value="right">
                            Done
                        </ToggleButton>
                        {/* ========== END FILTER ==========*/}
                    </ToggleButtonGroup>
                    {/* ========== START ALL TODOS ==========*/}
                    <Todo />
                    {/* ========== END ALL TODOS ==========*/}
                    {/* ========== START INPUT ==========*/}
                    <Grid container>
                        <Grid xs={8}>
                            <TextField
                                style={{ width: "90%" }}
                                id="outlined-basic"
                                label="Add a task"
                                variant="outlined"
                            />
                        </Grid>
                        <Grid xs={4}>
                            <Button variant='contained' style={{ width: "100%", height: "100%" }}>Add a task</Button>
                        </Grid>
                    </Grid>
                    {/* ========== START INPUT ==========*/}

                </CardContent>
            </Card>

        </Container>
    );
}