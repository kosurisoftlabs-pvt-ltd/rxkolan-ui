import React from 'react'

const UpdateServicePrice = () => {
    return (
        <div className='service-bottom'>
            <div class="row pt-4">
                    <div class="d_box table-responsive">
                        <form action="" method="POST" >
                            <div class="modal-body updated-service-list">
                                <table class="table table-striped">
                                    <thead class="thead-dark">
                                        <tr class="text-center">
                                            <th scope="col">Service Name</th>
                                            <th scope="col">Amount</th>
                                            <th scope="col">Action</th>
                                        </tr>
                                    </thead>

                                    <tbody>
                                        <tr class="text-center">
                                            <th scope="row">Service 1</th>
                                            <td>500 INR</td>
                                            <td>
                                                <a href="#" class="btn btn-sm btn-warning"><i class="fas fa-edit"></i> Edit</a>
                                            </td>
                                        </tr>
                                        <tr class="text-center">
                                            <th scope="row">Service 2</th>
                                            <td>100 INR</td>
                                            <td>
                                                <a href="#" class="btn btn-sm btn-warning"><i class="fas fa-edit"></i> Edit</a>
                                            </td>
                                        </tr>
                                        <tr class="text-center">
                                            <th scope="row">Service 3</th>
                                            <td>250 INR</td>
                                            <td>
                                                <a href="#" class="btn btn-sm btn-warning"><i class="fas fa-edit"></i> Edit</a>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </form>
                    </div>
                </div>
                
            </div>

    )
}

export default UpdateServicePrice
