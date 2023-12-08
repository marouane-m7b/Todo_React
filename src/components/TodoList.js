import * as React from 'react';
import Container from '@mui/material/Container';
import { Button, Card, CardActions, CardContent, Divider, ToggleButton, ToggleButtonGroup, Typography } from '@mui/material';

export default function TodoList() {
    return (
        <Container maxWidth="sm">
            <Card sx={{ minWidth: 275 }}>
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
                        style={{ marginTop: "20px" }} >
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
                </CardContent>
                <CardActions>
                    <Button size="small">Learn More</Button>
                </CardActions>
            </Card>
        </Container>
    );
}