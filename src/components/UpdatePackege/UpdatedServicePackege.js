import React from 'react'
import './packege.css'

const UpdatedServicePackege = () => {
    return (
        <div className='service-top'>
            <div class="row pt-4">
                    <div class="d_box table-responsive">
                        <form action="" method="POST">
                            <div class="modal-body packege-table-body">
                                <table class="table table-striped">
                                    <thead class="thead-dark">
                                        <tr class="text-center">
                                            <th scope="col">Package Name</th>
                                            <th scope="col">Price</th>
                                            <th scope="col">Action</th>
                                        </tr>
                                    </thead>

                                    <tbody>
                                        <tr class="text-center">
                                            <th scope="row">Package 1</th>
                                            <td>100 INR</td>
                                            <td><a href="#" class="btn btn-sm btn-warning" title="Edit" onclick="return confirm('Are you confirm?');"><i class="fas fa-edit"></i></a></td>
                                        </tr>
                                        <tr class="text-center">
                                            <th scope="row">Package 2</th>
                                            <td>250 INR</td>
                                            <td><a href="#" class="btn btn-sm btn-warning" title="Edit" onclick="return confirm('Are you confirm?');"><i class="fas fa-edit"></i></a></td>
                                        </tr>
                                        <tr class="text-center">
                                            <th scope="row">Package 3</th>
                                            <td>400 INR</td>
                                            <td><a href="#" class="btn btn-sm btn-warning" title="Edit" onclick="return confirm('Are you confirm?');"><i class="fas fa-edit"></i></a></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </form>
                    </div>
                </div>
                <div class="col-md-3 col-sm-2 col-xs-12"></div>
            </div>
    )
}

export default UpdatedServicePackege
