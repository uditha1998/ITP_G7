
import React from 'react';
import './Sidebar.css';
import logo from './images/logo.png';
import support from './images/support.png';
import {Link} from 'react-router-dom';

function Sidebar() {
  return (
    <div className='Sidebar'>

      <div className='Logo'>
      <img src={logo}/>
      </div>

    <div className='Menulist'>
    <ul>
      <li><a href="">Dashboard</a></li>
      <li><Link to="/SupplierRequests">Supplier Requests</Link></li>
      <li><a href="">View Suppliers</a></li>
      <li><Link to="/SupplierQuotations">Supplier Quotations</Link></li> 
      <li><a href="">Purchase Quotations</a></li>
      <li><a href="">Sales History</a></li>
      <li><a href="">Reports</a></li>
      <li><a href="">Inquiries</a></li>
     
    </ul>
    
    </div>

    <div className="contact-support">

<img src={support}/>

<h3 className='supporth3'>Support 24/7</h3>
<h5 className='supporth5'>Contact us anytime</h5>
<button>Contact</button>

    
</div>
    
    </div>
  );
}

export default Sidebar;
