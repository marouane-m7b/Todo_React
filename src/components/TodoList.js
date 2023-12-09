import * as React from 'react';
import Container from '@mui/material/Container';
import { Button, Card, CardContent, Divider, Grid, TextField, ToggleButton, ToggleButtonGroup, Typography } from '@mui/material';

import Todo from './Todo';
import { v4 } from 'uuid';




export default function TodoList() {


    const [todos, setTodos] = React.useState(() => {
        const storedData = localStorage.getItem('todos');
        return storedData ? JSON.parse(storedData) : [];
    });

    React.useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);

    const [todoInput, setTodoInput] = React.useState('')
    const [displayedTodosType, setDisplayedTodosType] = React.useState('all')



    function changeDisplayedType(e) {
        setDisplayedTodosType(e.target.value)
    }

    function handleTodoAdd() {
        const newTodo = {
            id: v4(),
            title: todoInput,
            description: '',
            isCompleted: false,
        }
        const newTodos = [...todos, newTodo]
        setTodos(newTodos)
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


    function handleEdit(id, newTodo) {
        const newTodos = todos.map((t) => {
            if (t.id === id) {
                return { ...t, title: newTodo.title, description: newTodo.description }
            }
            else {
                return t
            }
        })
        setTodos(newTodos)
    }

    const completedTodos = todos.filter((t) => {
        return t.isCompleted
    })

    const NonCompletedTodos = todos.filter((t) => {
        return !t.isCompleted
    })

    let todosToShow = todos
    if (displayedTodosType === 'todo') {
        todosToShow = NonCompletedTodos
    }
    if (displayedTodosType === 'done') {
        todosToShow = completedTodos
    }

    const todosJsx = todosToShow.map((t) => {
        return (
            <Todo key={t.id} id={t.id} title={t.title} description={t.description} isCompleted={t.isCompleted} deleteFunction={handleDelete} completeFunction={handleComplete} editFunction={handleEdit} />
        )
    })

    return (
        <Container className='container' maxWidth="sm">
            <Card className='todo-list' sx={{ minWidth: 250 }}>
                <CardContent>
                    <Typography variant='h3'>
                        ToDo List
                    </Typography>
                    <Divider />
                    <ToggleButtonGroup
                        exclusive
                        value={displayedTodosType}
                        aria-label="text alignment"
                        onChange={changeDisplayedType}
                        style={{
                            marginTop: "20px",
                            marginBottom: "20px"
                        }} >
                        {/* ========== START FILTER ==========*/}
                        <ToggleButton value="todo">
                            To Do
                        </ToggleButton>
                        <ToggleButton value="done">
                            Done
                        </ToggleButton>
                        <ToggleButton value="all">
                            All
                        </ToggleButton>
                        {/* ========== END FILTER ==========*/}
                    </ToggleButtonGroup>
                    {/* ========== START ALL TODOS ==========*/}
                    <div className='todos-show' style={{ maxHeight:"60vh", overflow:'auto', margin:'0 0 30px 0' }}>
                    {todosJsx}
                    </div>
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