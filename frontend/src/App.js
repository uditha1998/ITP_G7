
import './App.css';

import Sidebar from './Components/Sidebar';
import SupplierRequests from './Components/SupplierRequests';
import SupplierQuotations from './Components/SupplierQuotations';
import {Route,Routes,BrowserRouter} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <div className="Left">
      <Sidebar/>
      </div>
      <div className="Right">
      <Routes>
       <Route path="/SupplierRequests" element={<SupplierRequests/>} />
       <Route path="/SupplierQuotations" element={<SupplierQuotations/>} />
      </Routes>
      </div>
      
      </BrowserRouter>
    
    </div>
  );
}

export default App;
