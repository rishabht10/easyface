
import './App.css';
import {Routes, Route} from 'react-router-dom'
import HomePage from './Pages/home';
import RoomPage from './Pages/room';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<HomePage/>}></Route>
        <Route path='/room/:roomId' element={<RoomPage/>}></Route>
      </Routes>
      
    </div>
  );
}

export default App;
