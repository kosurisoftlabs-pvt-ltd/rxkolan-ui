import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import { useSelector } from 'react-redux';


import { useLoyaltyRedeemMutation } from '../../services/apis/LoyalityPoints'

const LoyaltyPointRedeem = ({ loyaltyPoint, setLoyaltyPoint }) => {
   console.log(loyaltyPoint,'LP')
    const [date, setDate] = useState("")
    let {  loyaltyDiscountList } = useSelector((state) => state.loyalty);
    let {  storeId } = useSelector((state) => state.auth);



    const [loyaltyRedeem] = useLoyaltyRedeemMutation()

    const Redeem = async (e) => {
        try {
            e.preventDefault()
            console.log(date)

            const userData={
               dateOfDiscount:date,
               firstName:loyaltyDiscountList?.firstName,
               lastName:loyaltyDiscountList?.lastName,
               storeId,
               customerPhone:loyaltyDiscountList?.customerPhone,
               totalSales: loyaltyDiscountList?.totalSalesVolume,
               loyaltyPoints: loyaltyDiscountList?.loyaltyPoints,
               discountAmount: loyaltyDiscountList?.discountEligible,

            }
            await loyaltyRedeem(userData).unwrap()
            toast.success("Loyalty Redeemed successfully")

        } catch (error) {
            toast.error('error')
        }






    }
    return (
        <>
                 <ToastContainer  theme="colored" autoClose={2000}/>

        <div>
            <table className="table table-striped">
                <thead className="thead-dark">
                    <tr>
                        <th scope="col" className="w200">Phone Number</th>
                        <th scope="col" className="w200">First Name</th>
                        <th scope="col" className="w200">Last Name</th>
                        <th scope="col" className="w200">Total Sales Volume</th>
                        <th scope="col" className="w200">Loyalty points</th>
                        <th scope="col" className="w200">Discount eligible</th>
                        <th scope="col" className="w200">Date of discount</th>
                    </tr>
                </thead>

                <tbody>
                    {/* <form action=""> */}
                    {loyaltyPoint?.data ? <>
                        <tr>
                            {loyaltyPoint?.data.map(result => {
                                <>
                                    <th className="w200"><input type="text" className="form-control" value={result.customerPhone} readonly /></th>
                                    <td className="w200"><input type="text" className="form-control" value={result.firstName} /></td>
                                    <td className="w200"><input type="text" className="form-control" value={result.lastName} readonly /></td>
                                    <td className="w200"><input type="text" className="form-control" value={result.totalSalesVolume} readonly /></td>
                                    <td className="w200"><input type="text" className="form-control" value={result.loyaltyPoints} readonly /></td>
                                    <td className="w200"><input type="text" className="form-control" value={result.discountEligible} readonly /></td>
                                    <td className="w200"><input type="date" className="form-control" value={date} onChange={(e) => setDate(e.target.value)} /></td>
                                </>

                            })}

                        </tr>
                    </> : <>
                        <tr>
                            <th className="w200"><input type="text" className="form-control" value={loyaltyDiscountList?.customerPhone} readonly /></th>
                            <td className="w200"><input type="text" className="form-control" value={loyaltyDiscountList?.firstName} /></td>
                            <td className="w200"><input type="text" className="form-control" value={loyaltyDiscountList?.lastName}  readonly /></td>
                            <td className="w200"><input type="text" className="form-control" value={loyaltyDiscountList?.totalSalesVolume} readonly /></td>
                            <td className="w200"><input type="text" className="form-control" value={loyaltyDiscountList?.loyaltyPoints} readonly /></td>
                            <td className="w200"><input type="text" className="form-control" value={loyaltyDiscountList?.discountEligible} readonly /></td>
                            <td className="w200"><input type="date" className="form-control" value={date} onChange={(e) => setDate(e.target.value)} /></td>
                        </tr>
                    </>}

                    <tr>
                        <td colspan="7">
                            <div className="text-center" ><input type="submit" className="btn btn-primary" value="Submit" onClick={Redeem} /></div>
                        </td>
                    </tr>
                    {/* </form> */}
                </tbody>
            </table>
        </div>
        </>

    )
}

export default LoyaltyPointRedeem
