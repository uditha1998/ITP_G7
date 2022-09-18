import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './SupplierRequests.css';



function App() {
    const [suppliers, setSuppliers] = useState([])

    useEffect(() => {
        axios.get('http://localhost:8090/supplier/').then(res => {
            console.log(res);
            setSuppliers(res.data);
        })
            .catch(err => {
                console.log(err);
            })

    })

    const x = 1;
    return (
        <div className="SupplierRequests">



            <center><h2>Supplier Requests</h2></center>
            <div className='row'>
                <div className='col-md-4'>
                    <div class="input-group ml-2">
                        <input type="search" class="form-control rounded" placeholder="Search" aria-label="Search" aria-describedby="search-addon" />
                        <button type="button" class="btn btn-outline-warning">search</button>
                    </div>
                </div>
                <div className='col-md-8'></div>

            </div>
            <br />

            <table class="table table-striped styled-table ">
                <thead class="thead-dark" >
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Location</th>
                        <th scope="col">Company</th>
                        <th scope="col"><center>Actions</center></th>
                    </tr>
                </thead>
                <tbody>

                    {
                        suppliers.map(supplier => <tr key={supplier.id}>

                            <th scope="row">{x}</th>

                            <td>{supplier.name}</td>
                            <td>{supplier.contactno}</td>
                            <td>{supplier.address}</td>
                            <td className='action-buttons'>
                                <button type="button" class="btn btn-success me-2">Success</button>
                                <button type="button" class="btn btn-danger me-2">Danger</button>
                                <button type="button" class="btn btn-warning button3 me-2">Warning</button>
                            </td>
                        </tr>
                        
                        )
                        
                    }

                </tbody>
            </table>
            <div className="row">
                <div className='col-sm-4'></div>
                <div className='col-sm-2'>
                    {/* <div className='pagination-me'> */}
                    <nav aria-label="...">
                        <ul class="pagination">
                            <li class="page-item disabled">
                                <span class="page-link">Previous</span>
                            </li>
                            <li class="page-item"><a class="page-link" href="#">1</a></li>
                            <li class="page-item active">
                                <span class="page-link">
                                    2

                                </span>
                            </li>
                            <li class="page-item"><a class="page-link" href="#">3</a></li>
                            <li class="page-item">
                                <a class="page-link" href="#">Next</a>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div className='col-sm-4'></div>
            </div>
        </div>






    );
}

export default App;
