// import React from 'react'

// const Dashboard = () => {
//     return (
//         <div>
//             <div classNameName="main_section">
//                 {/* <!-- left sidebar / left menu start --> */}
//                 <div className="sidebar_menu mobMenuOpen trf_scaleX1">
//                     <div className="main_menu">
//                         <div className="logo">
//                             <a href="./dashboard.html">
//                                 <img src="./assets/images/logo.png" alt="Logo" />
//                             </a>
//                             <span className="mob_side_menu_btn_cls cPointer" title="Hide Menu">
//                                 <i className="fas fa-angle-left"></i>
//                             </span>
//                             <span className="mob_side_menu_btn_cls2 cPointer" title="Hide Menu">
//                                 <i className="fas fa-angle-left"></i>
//                             </span>
//                         </div>
//                         <ul className="menu_box" id="menu_box">
//                             <li className="menu_item"><a href="dashboard.html">Dashboard</a></li>

//                             <li className="menu_item has_sub_menu" data-toggle="collapse" data-target="#menu1" aria-expanded="true" aria-controls="collapse1">
//                                 <a href="javascript:void(0);">Vendor Management</a>
//                                 <i className="collapseIcon cPointer fas fa-angle-down"></i>
//                             </li>
//                             <ul className="sub_menu collapse" id="menu1" aria-labelledby="heading1" data-parent="#menu_box">
//                                 <li className="menu_item"><a href="">Add Vendor</a></li>
//                                 <li className="menu_item"><a href="">Update Vendor</a></li>
//                             </ul>

//                             <li className="menu_item has_sub_menu" data-toggle="collapse" data-target="#menu2" aria-expanded="false" aria-controls="collapse2">
//                                 <a href="javascript:void(0);">Store Master</a>
//                                 <i className="collapseIcon cPointer fas fa-angle-down"></i>
//                             </li>
//                             <ul className="sub_menu collapse" id="menu2" aria-labelledby="heading2" data-parent="#menu_box">
//                                 <li className="menu_item"><a href="./store.master.html">Create Store</a></li>
//                                 <li className="menu_item"><a href="./edit-store.html">Update Store</a></li>
//                                 <li className="menu_item"><a href="./add-store-master.html">Add Store Manager</a></li>
//                             </ul>

//                             <li className="menu_item has_sub_menu" data-toggle="collapse" data-target="#menu3" aria-expanded="false" aria-controls="collapse3">
//                                 <a href="javascript:void(0);">Transactions Management</a>
//                                 <i className="collapseIcon cPointer fas fa-angle-down"></i>
//                             </li>
//                             {/* <!-- double dropdown menu --> */}
//                             <ul className="sub_menu has_sub_menu collapse" id="menu3" aria-labelledby="heading3" data-parent="#menu_box">
//                                 <li className="sub_menu_item has_sub_menu" data-toggle="collapse" data-target="#ddm1" aria-expanded="false" aria-controls="collapse31">
//                                     <a href="javascript:void(0);">Purchases Management</a>
//                                     <i className="collapseIcon cPointer fas fa-angle-down"></i>
//                                 </li>
//                                 <ul className="double_drop_menu collapse" id="ddm1" aria-labelledby="heading31" data-parent="#menu3">
//                                     <li className="sub_menu_item"><a href="">Purchse Invoice</a></li>
//                                     <li className="sub_menu_item"><a href="./upload-purchase.html">Upload purchases</a></li>
//                                     <li className="sub_menu_item"><a href="./purchase-report.html">Purchses report</a></li>
//                                 </ul>

//                                 <li className="sub_menu_item has_sub_menu" data-toggle="collapse" data-target="#ddm2" aria-expanded="false" aria-controls="collapse32">
//                                     <a href="javascript:void(0);">Sales Management</a>
//                                     <i className="collapseIcon cPointer fas fa-angle-down"></i>
//                                 </li>
//                                 <ul className="double_drop_menu collapse" id="ddm2" aria-labelledby="heading32" data-parent="#menu3">
//                                     <li className="sub_menu_item"><a href="">Sales Invoice</a></li>
//                                     <li className="sub_menu_item"><a href="./upload-sales.html">Upload Sales</a></li>
//                                     <li className="sub_menu_item"><a href="./sales-report.html">Sales Report</a></li>
//                                 </ul>

//                             </ul> 
//                             {/* <!-- double dropdown menu --> */}
//                             <li className="menu_item has_sub_menu " data-toggle="collapse" data-target="#menu4" aria-expanded="false" aria-controls="collapse4">
//                                 <a href="javascript:void(0);">Stock Management</a>
//                                 <i className="collapseIcon cPointer fas fa-angle-down"></i>
//                             </li>
//                             <ul className="sub_menu collapse" id="menu4" aria-labelledby="heading4" data-parent="#menu_box">
//                                 <li className="menu_item"><a href="./upload-stocks.html">Upload Stocks</a></li>
//                                 <li className="menu_item"><a href="./stock-report.html">Stock Report</a></li>
//                             </ul>

//                             <li className="menu_item has_sub_menu menu_item_active" data-toggle="collapse" data-target="#menu5" aria-expanded="true" aria-controls="collapse5">
//                                 <a href="javascript:void(0);">Role Management</a>
//                                 <i className="collapseIcon collapsRotate cPointer fas fa-angle-down"></i>
//                             </li>
//                             <ul className="sub_menu collapse show" id="menu5" aria-labelledby="heading5" data-parent="#menu_box">
//                                 <li className="menu_item"><a href="./add-role.html">Add Role</a></li>
//                                 <li className="menu_item"><a href="./update-role.html">Update Role</a></li>
//                             </ul>

//                             <li className="menu_item has_sub_menu" data-toggle="collapse" data-target="#menu6" aria-expanded="false" aria-controls="collapse6">
//                                 <a href="javascript:void(0);">Customer Management</a>
//                                 <i className="collapseIcon cPointer fas fa-angle-down"></i>
//                             </li>
//                             <ul className="sub_menu collapse" id="menu6" aria-labelledby="heading6" data-parent="#menu_box">
//                                 <li className="menu_item"><a href="">Customer Enquiry</a></li>
//                                 <li className="menu_item"><a href="">Item Master Management</a></li>
//                             </ul>

//                             <li className="menu_item has_sub_menu" data-toggle="collapse" data-target="#menu7" aria-expanded="false" aria-controls="collapse7">
//                                 <a href="javascript:void(0);">Loyalty Management</a>
//                                 <i className="collapseIcon cPointer fas fa-angle-down"></i>
//                             </li>
//                             <ul className="sub_menu collapse" id="menu7" aria-labelledby="heading7" data-parent="#menu_box">
//                                 <li className="menu_item"><a href="./loyalty-points.html">Loyalty point calculation</a></li>
//                             </ul>
//                         </ul>
//                         {/* <!-- .menu_box --> */}
//                     </div>
//                         {/* !-- .main_menu --> */}
//                 </div>
//                 {/* <!-- .sidebar_menu	 --> */}
//                 {/* <!-- sidebar menu icon --> */}
//                 <ul className="sidebar_menu_icon icon_scaleX0 disNone">
//                     <li className="sidebar_menu_icon_item cPointer">
//                         <div className="mob_side_menu_btn_opn cPointer dNone text-light" title="Show Menu">
//                             <i className="fas fa-angle-right"></i>
//                         </div>
//                         <div className="mob_side_menu_btn_opn2 cPointer text-light" title="Show Menu">
//                             <i className="fas fa-angle-right"></i>
//                         </div>
//                     </li>
//                     <li className="sidebar_menu_icon_item cPointer">
//                         <a href="./dashboard.html"><i className="fas fa-home"></i></a>
//                     </li>
//                     <li className="sidebar_menu_icon_item cPointer" title="Vendor Management">
//                         <i className="fas fa-list"></i>
//                         <span className="iconMenuItem trf_scaleX0">
//                             <a href="" title="Add Vendor">Add Vendor</a>
//                             <a href="" title="Update Vendor">Update Vendor</a>
//                         </span>
//                     </li>
//                     <li className="sidebar_menu_icon_item cPointer" title="Store Master">
//                         <i className="fas fa-store"></i>
//                         <span className="iconMenuItem trf_scaleX0">
//                             <a href="./store.master.html" title="Create Store">Create Store</a>
//                             <a href="./edit-store.html" title="Update Store">Update Store</a>
//                             <a href="./add-store-master.html" title="Add Store Manager">Add Store Manager</a>
//                         </span>
//                     </li>
//                     <li className="sidebar_menu_icon_item cPointer" title="Transactions Management">
//                         <i className="fas fa-exchange-alt"></i>
//                         <span className="iconMenuItem trf_scaleX0">
//                             <a href="" title="Purchse Invoice">Purchse Invoice</a>
//                             <a href="./upload-purchase.html" title="Upload purchases">Upload purchases</a>
//                             <a href="./purchase-report.html" title="Purchses report">Purchses report</a>
//                             <a href="" title="Sales Invoice">Sales Invoice</a>
//                             <a href="./upload-sales.html" title="Upload Sales">Upload Sales</a>
//                             <a href="./sales-report.html" title="Sales Report">Sales Report</a>
//                         </span>
//                     </li>
//                     <li className="sidebar_menu_icon_item cPointer" title="Stock Management">
//                         <i className="fas fa-warehouse"></i>
//                         <span className="iconMenuItem trf_scaleX0">
//                             <a href="./upload-stocks.html" title="Upload Stocks">Upload Stocks</a>
//                             <a href="./stock-report.html" title="Stock Report">Stock Report</a>
//                         </span>
//                     </li>
//                     <li className="sidebar_menu_icon_item cPointer menu_icon_active" title="Role Management">
//                         <i className="fas fa-user-tag"></i>
//                         <span className="iconMenuItem trf_scaleX0">
//                             <a href="./add-role.html" title="Add Role">Add Role</a>
//                             <a href="./update-role.html" title="Update Role">Update Role</a>
//                         </span>
//                     </li>
//                     <li className="sidebar_menu_icon_item cPointer" title="Customer Management">
//                         <i className="fas fa-users"></i>
//                         <span className="iconMenuItem trf_scaleX0">
//                             <a href="" title="Customer Enquiry">Customer Enquiry</a>
//                             <a href="" title="Item Master Management">Item Master Management</a>

//                         </span>
//                     </li>
//                     <li className="sidebar_menu_icon_item cPointer" title="Loyalty Management">
//                         <i className="fas fa-fingerprint"></i>
//                         <span className="iconMenuItem trf_scaleX0">
//                             <a href="./loyalty-points.html" title="Loyalty point calculation">Loyalty point calculation</a>
//                         </span>
//                     </li>
//                 </ul>
//                 {/* <!-- left sidebar / left menu end --> */}

//                 {/* <!-- main body start --> */}
//                 <div className="main_body">
//                     {/* <!-- header start --> */}
//                     <div className="section_head">
//                         <header>
//                             <div className="header_left">
//                                 <div className="headerLogo">
//                                     <a href="./dashboard.html">
//                                         <img src="./assets/images/logo.png" alt="Logo" />
//                                     </a>
//                                 </div>
//                             </div>
//                             <div className="welcome_title pt10 text-light"><h5>Welcom Admin</h5></div>
//                             <div className="nav_toggle_menu">
//                                 <div className="toggle_menu_btn cPointer">
//                                     <span className="rounded">
//                                         <i className="fas fa-user"></i>
//                                     </span>
//                                 </div>
//                                 <div className="toggle_menu_box trf_scaleY0">
//                                     <ul className="toggle_menu_wraper">
//                                         <li className="toggle_menu_item"><a href="#" title="Employee Name">Employee Name</a></li>
//                                         <li className="toggle_menu_item"><a href="#">Date</a></li>
//                                         <li className="toggle_menu_item" title="Logout"><a href="#">Logout</a></li>
//                                     </ul>
//                                 </div>
//                             </div>
//                         </header>
//                     </div>
//                     {/* <!-- .section_head --> */}
//                     {/* <!-- header end --> */}
//                     <div className="body_box">
//                         <div className="page_title"><h5>Add Role</h5></div>
//                         <div className="allPageBox">
//                             <div className="row">
//                                 <div className="col-md-3 col-sm-2 col-xs-12"></div>
//                                 <div className="col-md-6 col-sm-8 col-xs-12">
//                                     <div className="bg_box p20">
//                                         <form action="" method="POST">
//                                             <div className="w-100 p5">
//                                                 <div className="form-group">
//                                                     <label for="">Select Role*</label>
//                                                     <select name="" id="" className="form-control">
//                                                         <option value="">Select...</option>
//                                                         <option value="1">Store Manager</option>
//                                                         <option value="2">Office Manager</option>
//                                                         <option value="2">Admin</option>
//                                                     </select>
//                                                 </div>
//                                                 <div className="form-group d-flex">
//                                                     <input type="checkbox" id="roleItem1" className="roleCheckBox" placeholder="Ex. 1" required />
//                                                     <label for="roleItem1" className="roleLabel">Store Master</label>
//                                                 </div>
//                                                 <div className="form-group d-flex">
//                                                     <input type="checkbox" id="roleItem2" className="roleCheckBox" placeholder="Ex. 1" required />
//                                                     <label for="roleItem2" className="roleLabel">Create Store</label>
//                                                 </div>
//                                                 <div className="form-group d-flex">
//                                                     <input type="checkbox" id="roleItem3" className="roleCheckBox" placeholder="Ex. 1" required />
//                                                     <label for="roleItem3" className="roleLabel">Update Store</label>
//                                                 </div>
//                                                 <div className="form-group d-flex">
//                                                     <input type="checkbox" id="roleItem4" className="roleCheckBox" placeholder="Ex. 1" required />
//                                                     <label for="roleItem4" className="roleLabel">Transactions Management</label>
//                                                 </div>
//                                                 <div className="form-group d-flex">
//                                                     <input type="checkbox" id="roleItem5" className="roleCheckBox" placeholder="Ex. 1" required />
//                                                     <label for="roleItem5" className="roleLabel">Purchases Management</label>
//                                                 </div>
//                                                 <div className="form-group d-flex">
//                                                     <input type="checkbox" id="roleItem6" className="roleCheckBox" placeholder="Ex. 1" required />
//                                                     <label for="roleItem6" className="roleLabel">Upload purchases</label>
//                                                 </div>
//                                                 <div className="form-group d-flex">
//                                                     <input type="checkbox" id="roleItem7" className="roleCheckBox" placeholder="Ex. 1" required />
//                                                     <label for="roleItem7" className="roleLabel">Purchses report</label>
//                                                 </div>
//                                                 <div className="form-group d-flex">
//                                                     <input type="checkbox" id="roleItem8" className="roleCheckBox" placeholder="Ex. 1" required />
//                                                     <label for="roleItem8" className="roleLabel">Sales Management</label>
//                                                 </div>
//                                                 <div className="form-group d-flex">
//                                                     <input type="checkbox" id="roleItem9" className="roleCheckBox" placeholder="Ex. 1" required />
//                                                     <label for="roleItem9" className="roleLabel">Upload Sales</label>
//                                                 </div>
//                                                 <div className="form-group d-flex">
//                                                     <input type="checkbox" id="roleItem10" className="roleCheckBox" placeholder="Ex. 1" required />
//                                                     <label for="roleItem10" className="roleLabel">Sales Report</label>
//                                                 </div>
//                                                 <div className="form-group d-flex">
//                                                     <input type="checkbox" id="roleItem11" className="roleCheckBox" placeholder="Ex. 1" required />
//                                                     <label for="roleItem11" className="roleLabel">Stock Management</label>
//                                                 </div>
//                                                 <div className="form-group d-flex">
//                                                     <input type="checkbox" id="roleItem12" className="roleCheckBox" placeholder="Ex. 1" required />
//                                                     <label for="roleItem12" className="roleLabel">Upload Stocks</label>
//                                                 </div>
//                                                 <div className="form-group d-flex">
//                                                     <input type="checkbox" id="roleItem13" className="roleCheckBox" placeholder="Ex. 1" required />
//                                                     <label for="roleItem13" className="roleLabel">Stock Report</label>
//                                                 </div>
//                                                 <div className="form-group d-flex">
//                                                     <input type="checkbox" id="roleItem14" className="roleCheckBox" placeholder="Ex. 1" required />
//                                                     <label for="roleItem14" className="roleLabel">Role Management</label>
//                                                 </div>
//                                                 <div className="form-group d-flex">
//                                                     <input type="checkbox" id="roleItem16" className="roleCheckBox" placeholder="Ex. 1" required />
//                                                     <label for="roleItem16" className="roleLabel">Add Role</label>
//                                                 </div>
//                                                 <div className="form-group d-flex">
//                                                     <input type="checkbox" id="roleItem17" className="roleCheckBox" placeholder="Ex. 1" required />
//                                                     <label for="roleItem17" className="roleLabel">Update Role</label>
//                                                 </div>
//                                                 <div className="form-group text-center pt20">
//                                                     <input type="submit" name="" className="btn btn-primary bg_self" value="Submit" onclick="return confirm('Are you sure to add new role?');" />
//                                                 </div>
//                                             </div>
//                                         </form>
//                                     </div>
//                                 </div>
//                                 <div className="col-md-3 col-sm-2 col-xs-12"></div>
//                             </div>
//                         </div>
//                     </div>

//                     {/* <!-- footer start --> */}
//                     <div className="footer">
//                         <footer>
//                             <h6 className="text-center"><a href="./index.html" className="text-dark" title="Your Website">&copy; <script>document.write(new Date().getFullYear());</script> All Rights Reserved | your-website.com </a></h6>
//                         </footer>
//                     </div>
//                     {/* <!-- footer end --> */}

//                 </div>
//                 {/* <!-- .main_body --> */}
//                 {/* <!-- main body end --> */}

//             </div>
//             {/* <!-- .main_section --> */}
//         </div>
//     )
// }

// export default Dashboard
