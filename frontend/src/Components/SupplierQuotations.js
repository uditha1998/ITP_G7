import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './SupplierRequests.css';



function SupplierQuotations() {
    const [supplierquotatons, setSupplierQuotations] = useState([])

    useEffect(() => {
        axios.get('http://localhost:8090/supplierquotation/').then(res => {
            console.log(res);
            setSupplierQuotations(res.data);
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
                        <th scope="col">Item</th>
                        <th scope="col">Price</th>
                        <th scope="col">Quantity</th>
                        <th scope="col"><center>Actions</center></th>
                    </tr>
                </thead>
                <tbody>

                    {
                        supplierquotatons.map(supplierquotaton => <tr key={supplierquotaton.id}>

                            <th scope="row">{x}</th>

                            <td>{supplierquotaton.item}</td>
                            <td>{supplierquotaton.price}</td>
                            <td>{supplierquotaton.quantity}</td>
                            <td className='action-buttons'>
                                <button type="button" class="btn btn-success me-2">Accept</button>
                                <button type="button" class="btn btn-danger me-2">Decline</button>
                                <button type="button" class="btn btn-warning button3 me-2">View</button>
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

export default SupplierQuotations;
