import { useState } from 'react';
import './App.css';
import MyStackBar from './components/MySnackBar';
import TodoList from './components/TodoList';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { SnackBarContext } from './contexts/SnackBarContext';

const theme = createTheme({
  typography: {
    fontFamily: ["myFont"]
  },
})

function App() {

  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState(false);


  const showHideSnackBar = (message) => {
    setMessage(message)
    setOpen(true);
    setTimeout(() => {
      setOpen(false);
    }, 2000)
  };

  return (

    <>
      <ThemeProvider theme={theme}>
        <SnackBarContext.Provider value={{ showHideSnackBar }}>
          <MyStackBar open={open} message={message} />
          <div className="App" style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            minHeight: "100vh"
          }}>
            <TodoList />
          </div>
        </SnackBarContext.Provider>
      </ThemeProvider>
    </>
  );
}

export default App;
