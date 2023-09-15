
import Login from './Login';
import Register from './Register';
import { BrowserRouter,Routes,Route,Redirect } from 'react-router-dom';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
      <Routes>

      
      <Route path="/" element={<Login/>}/>
   
      <Route path="/register" element={<Register/>}/>
   
      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;