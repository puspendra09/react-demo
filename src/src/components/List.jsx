import React, { useState, useEffect } from 'react';
import ListItem from '@mui/material/ListItem';
import List from '@mui/material/List';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';

export default function FormDialog(props) {
    const { todos } = props

    return (
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper', margin: '10px' }}>
            {
                todos && todos.length && todos.map((todo, index) => {
                    return (
                        <>
                            <ListItem key={index} alignItems="flex-start">
                                <ListItemText
                                    primary={todo.title}
                                    secondary={todo.desc}
                                />
                            </ListItem>
                            <Divider variant="inset" component="li" />
                        </>
                    )
                })
            }
        </List>
    );
}