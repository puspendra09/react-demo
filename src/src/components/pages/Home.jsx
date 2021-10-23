import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import userTodos from "../../assets/userTodos.json"
import { Header } from "../../components/header"
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';
import { DialogBox, List } from '../../components';

function Home(props) {
  const location = useLocation()
  const user = location.state && location.state.user
  const [open, setOpen] = useState(false)
  const [title, setTitleData] = useState('')
  const [desc, setDesc] = useState('')
  const [todos, setTodos] = useState([])
  const { userId, type } = user

  useEffect(() => {
    if (type === 'admin') {
      setTodos([...userTodos])
    } else {
      setTodos(userTodos.filter((userTodo) => userTodo.userId === userId))
    }
  }, [])

  useEffect(() => {
    if (title !== '' && desc !== '') {
      handleAppendTodo()
    }
  }, [title, desc])

  const handleOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const handleAppendTodo = () => {
    let addedTodo = {
      id: Math.random() * (300 - 100),
      userId: user.userId,
      title: title,
      desc: desc
    }
    todos.push(addedTodo)
  };

  console.log('========todos============================');
  console.log(todos);
  console.log('====================================');

  return (
    <React.Fragment>
      <Header auth={true} userData={user} />
      <div style={{ display: 'flex' }}>
        <List todos={todos} />
        <div style={{ width: '130px', margin: 'auto' }}>
          <Button variant='outlined' onClick={handleOpen}>Add todo</Button>
        </div>
        <DialogBox
          open={open}
          handleClose={handleClose}
          setDesc={setDesc}
          t={title}
          setTitleData={setTitleData}
          handleAppendTodo={handleAppendTodo}
        />
      </div>
    </React.Fragment>
  );
}

export default React.memo(Home);
