import React from 'react'

const StoreDetailsTable = ({storeData}) => {
    console.log(storeData,'STD')
    return (
        <div className="table-container-store p-5" >

            <table className="">

                <tr>
                    <th>StoreID</th>
                    <th style={{minWidth: '200px'}}>Store Category</th>
                    <th>Location</th>
                    <th style={{minWidth: '300px'}}>Name</th>
                    <th>Pincode</th>
                    <th>District</th>
                    <th style={{minWidth: '300px'}}>Owner Name</th>
                    <th style={{minWidth: '200px'}}>Owner Contact</th>
                    <th style={{minWidth: '300px'}}>Owner Secondary Contact</th>
                    <th >Owner Email</th>
                    <th>State</th>
                    <th>Town</th>
                    <th style={{minWidth: '300px'}}>Added By</th>
                    <th>Status</th>
                    <th style={{minWidth: '300px'}}>Date</th>
                    <th>Time</th>
                </tr>
                <tbody className='store_table'>
            {
                    storeData?.length>0 && storeData.map((data) => {
                        return (
                            <tr >
                                <td><b>{data.id}</b></td>
                                <td>{data.type}</td>
                                <td>{data.location}</td>
                                <td>{data.name}</td>
                                <td>{data.pincode}</td>
                                <td>{data.district}</td>
                                <td>{data.owner}</td>
                                <td>{data.ownerContact}</td>
                                <td>{data.secondaryContact}</td>
                                <td>{data.ownerEmail}</td>
                                <td>{data.state}</td>
                                <td>{data.town}</td>
                                <td>{data.status}</td>
                                <td>{data.addedBy}</td>
                                <td>{new Date(data.registrationDate).toDateString()}</td>
                                <td>{new Date(data.modifiedTimeStamp).toLocaleTimeString()}</td>





                            </tr>
                        )
                    })
                }
                </tbody>



            </table>
        </div>
    )
}

export default StoreDetailsTable
