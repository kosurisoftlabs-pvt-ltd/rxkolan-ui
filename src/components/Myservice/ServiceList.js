import React from 'react'

const ServiceList = () => {
    return (
        <div className='service-top'>
            <div class="row pt-4">
                
                    <div class="d_box table-responsive">
                        <form action="" method="POST" >
                            <div class="modal-body">
                                <table class="table table-striped">
                                    <thead class="thead-dark">
                                        <tr class="text-center">
                                            <th scope="col">Srl</th>
                                            <th scope="col">Services</th>
                                        </tr>
                                    </thead>

                                    <tbody>
                                        <tr class="text-center">
                                            <th scope="row">01</th>
                                            <td>Searvice 1</td>
                                        </tr>
                                        <tr class="text-center">
                                            <th scope="row">02</th>
                                            <td>Searvice 2</td>
                                        </tr>
                                        <tr class="text-center">
                                            <th scope="row">03</th>
                                            <td>Searvice 3</td>
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

export default ServiceList
