import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Main from './pages/Main';
import NotFound404 from './pages/NotFound404';
import Room from './pages/Room';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/room/:id" element={<Room/>}/>
        <Route exact path="/" element={<Main/>}/>
        <Route path="*" element={<NotFound404/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
