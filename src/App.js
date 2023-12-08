import './App.css';
import TodoList from './components/TodoList';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    fontFamily: ["myFont"]
  },
})

function App() {
  return (
    <ThemeProvider theme={theme}>   <div className="App" style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh"
    }}>
      <TodoList />
    </div></ThemeProvider>
  );
}

export default App;
