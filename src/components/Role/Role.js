import React from 'react'
import Button from '../button/Button'
import './role.css'
const Role = () => {
  return (
    <div>
             <form action="" method="POST">
             <div class="form-group-select">
                  <label for="">Select Role*</label>
                  <select name="" id="" class="form-control">
                    <option value="">Select...</option>
                    <option value="1">Store Manager</option>
                    <option value="2">Office Manager</option>
                    <option value="2">Admin</option>
                  </select>
                </div>
              <div class="role-container p5">

              <div class="form-group d-flex">
												<input type="checkbox" id="roleItem1" class="roleCheckBox" placeholder="Ex. 1" required />
												<label for="roleItem1" class="roleLabel">Store Master (1001)</label>
											</div>
											<div class="form-group d-flex">
												<input type="checkbox" id="roleItem2" class="roleCheckBox" placeholder="Ex. 1" required />
												<label for="roleItem2" class="roleLabel">Create Store (1002)</label>
											</div>
											<div class="form-group d-flex">
												<input type="checkbox" id="roleItem3" class="roleCheckBox" placeholder="Ex. 1" required />
												<label for="roleItem3" class="roleLabel">Update Store (1003)</label>
											</div>
											<div class="form-group d-flex">
												<input type="checkbox" id="roleItem4" class="roleCheckBox" placeholder="Ex. 1" required />
												<label for="roleItem4" class="roleLabel">Transactions Management (2100)</label>
											</div>
											<div class="form-group d-flex">
												<input type="checkbox" id="roleItem5" class="roleCheckBox" placeholder="Ex. 1" required />
												<label for="roleItem5" class="roleLabel">Purchases Management (2101)</label>
											</div>
											<div class="form-group d-flex">
												<input type="checkbox" id="roleItem6" class="roleCheckBox" placeholder="Ex. 1" required />
												<label for="roleItem6" class="roleLabel">Upload purchases (2102)</label>
											</div>
											<div class="form-group d-flex">
												<input type="checkbox" id="roleItem7" class="roleCheckBox" placeholder="Ex. 1" required />
												<label for="roleItem7" class="roleLabel">Purchses report (2103)</label>
											</div>
											<div class="form-group d-flex">
												<input type="checkbox" id="roleItem8" class="roleCheckBox" placeholder="Ex. 1" required />
												<label for="roleItem8" class="roleLabel">Sales Management (3001)</label>
											</div>
											<div class="form-group d-flex">
												<input type="checkbox" id="roleItem9" class="roleCheckBox" placeholder="Ex. 1" required />
												<label for="roleItem9" class="roleLabel">Upload Sales (3101)</label>
											</div>
											<div class="form-group d-flex">
												<input type="checkbox" id="roleItem10" class="roleCheckBox" placeholder="Ex. 1" required />
												<label for="roleItem10" class="roleLabel">Sales Report (3102)</label>
											</div>
											<div class="form-group d-flex">
												<input type="checkbox" id="roleItem11" class="roleCheckBox" placeholder="Ex. 1" required />
												<label for="roleItem11" class="roleLabel">Stock Management (4001)</label>
											</div>
											<div class="form-group d-flex">
												<input type="checkbox" id="roleItem12" class="roleCheckBox" placeholder="Ex. 1" required />
												<label for="roleItem12" class="roleLabel">Upload Stocks (4101)</label>
											</div>
											<div class="form-group d-flex">
												<input type="checkbox" id="roleItem13" class="roleCheckBox" placeholder="Ex. 1" required />
												<label for="roleItem13" class="roleLabel">Stock Report (4102)</label>
											</div>
											<div class="form-group d-flex">
												<input type="checkbox" id="roleItem14" class="roleCheckBox" placeholder="Ex. 1" required />
												<label for="roleItem14" class="roleLabel">Role Management (5001)</label>
											</div>
											<div class="form-group d-flex">
												<input type="checkbox" id="roleItem16" class="roleCheckBox" placeholder="Ex. 1" required />
												<label for="roleItem16" class="roleLabel">Add Role (5101)</label>
											</div>
											<div class="form-group d-flex">
												<input type="checkbox" id="roleItem17" class="roleCheckBox" placeholder="Ex. 1" required />
												<label for="roleItem17" class="roleLabel">Update Role (5102)</label>
											</div>

              </div>
            </form>
            <div className='role-btn-container'>
                  <button className='update-role-btn' onClick={() => console.log("hello update")} type="button">Submit</button>
                </div>
    </div>
  )
}

export default Role
