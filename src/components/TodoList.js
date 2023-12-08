import * as React from 'react';
import Container from '@mui/material/Container';
import { Card, CardContent, Divider, ToggleButton, ToggleButtonGroup, Typography } from '@mui/material';

import Todo from './Todo';

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
                        // value={alignment}
                        exclusive
                        // onChange={handleAlignment}
                        aria-label="text alignment"
                        style={{
                            marginTop: "20px",
                            marginBottom: "20px"
                        }} >
                        <ToggleButton value="left">
                            To Do
                        </ToggleButton>
                        <ToggleButton value="center">
                            In Progress
                        </ToggleButton>
                        <ToggleButton value="right">
                            Done
                        </ToggleButton>
                    </ToggleButtonGroup>
                    <Todo />
                </CardContent>
            </Card>

        </Container>
    );
}