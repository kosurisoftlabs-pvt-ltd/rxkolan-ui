import React from 'react'

const StoreDetailsTable = ({storeData}) => {
    console.log(storeData,'STD')
    return (
        <div className="store-table">

            <table className="table-container">

                <tr>
                    <th>StoreID</th>
                    <th>Store Category</th>
                    <th>Location</th>
                    <th>Pincode</th>
                    <th>District</th>
                    <th>Town</th>
                    <th>addedby</th>
                    <th>Date</th>
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
                                <td>{data.pincode}</td>
                                <td>{data.district}</td>
                                <td>{data.town}</td>
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
