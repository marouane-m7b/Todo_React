import * as React from 'react';
import Container from '@mui/material/Container';
import { Button, Card, CardContent, Divider, Grid, TextField, ToggleButton, ToggleButtonGroup, Typography } from '@mui/material';

import Todo from './Todo';
import { v4 } from 'uuid';




export default function TodoList() {

    const [todoInput, setTodoInput] = React.useState('')

    const [isDisabled, setIsDisabled] = React.useState(true)

    const [todos, setTodos] = React.useState([{
        id: v4(),
        title: 'Buy groceries',
        description: 'Buy bread, cheese, and milk',
        isCompleted: false,
    },
    {
        id: v4(),
        title: 'Clean the house',
        description: 'Clean the living room, kitchen, and bathroom',
        isCompleted: true,
    },
    {
        id: v4(),
        title: 'Go for a walk',
        description: 'Go for a walk around the block',
        isCompleted: true,
    },
    {
        id: v4(),
        title: 'Do the laundry',
        description: 'Do the laundry',
        isCompleted: false,
    }])

    function handleTodoAdd() {
        const newTodo = {
            id: v4(),
            title: todoInput,
            description: 'Test',
            isCompleted: false,
        }
        setTodos([...todos, newTodo])
        setTodoInput('')
    }

    function handleDelete(id) {
        const newTodos = todos.filter((t) => {
            return t.id !== id
        })
        setTodos(newTodos)
    }

    function handleComplete(id) {
        const newTodos = todos.map((t) => {
            if (t.id === id) {
                t.isCompleted = !t.isCompleted
            }
            return t
        })
        setTodos(newTodos)
    }

    const todosJsx = todos.map((t) => {
        return (
            <Todo key={t.id} id={t.id} title={t.title} description={t.description} isCompleted={t.isCompleted} deleteFunction={handleDelete} completeFunction={handleComplete} />
        )
    })

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
                    {todosJsx}
                    {/* ========== END ALL TODOS ==========*/}
                    {/* ========== START INPUT ==========*/}
                    <Grid container>
                        <Grid xs={8}>
                            <TextField
                                required
                                onChange={(e) => setTodoInput(e.target.value)}
                                style={{ width: "90%" }}
                                id="outlined-basic"
                                label="Add a task"
                                variant="outlined"
                                value={todoInput}
                            />
                        </Grid>
                        <Grid xs={4}>
                            <Button disabled={todoInput === ""} variant='contained' style={{ width: "100%", height: "100%" }}
                                onClick={handleTodoAdd}>Add a task</Button>
                        </Grid>
                    </Grid>
                    {/* ========== START INPUT ==========*/}

                </CardContent>
            </Card>

        </Container>
    );
}