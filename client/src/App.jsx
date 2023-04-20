import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom'
import Pets from './components/pets';
import New from './components/new';
import View from './components/view';
import Edit from './components/edit';


function App() {
  return (
    <div className='App'>
      <h1>Pet Shelter</h1>
      <Routes>
        <Route path='/' element={<Pets />} />
        <Route path='/pets/new' element={<New />} />
        <Route path='/pets/:id' element={<View />} />
        <Route path='/pets/edit/:id' element={<Edit />} />
      </Routes>
    </div>
  );
}

export default App;
