import React, { useState, useEffect } from "react";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useLocation } from "react-router-dom";
import userTodos from "../assets/userTodos.json"

// const theme = createTheme();

function Home(props) {
  const location = useLocation()
  const { user } = location.state
  const { userId, type } = user
  console.log('user', user, 'userId', userId, 'type', type);
  let todos = []
  if (type === 'admin') {
    todos = [...userTodos]
  } else {
    todos = userTodos.filter((userTodo) => userTodo.userId === userId)
  }
  return (
    <React.Fragment>

    </React.Fragment>
  );
}

export default React.memo(Home);
