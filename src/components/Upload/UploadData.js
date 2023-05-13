import React from 'react'

const UploadData = () => {
  return (
    <div>
      <div className="upload_purchase">
							<div className="row">
								<div className="col-md-2 col-sm-1 col-xs-12"></div>
								<div className="col-md-8 col-sm-10 col-xs-12">
									<div className="edit_store_box">
										<form action="" method="POST">
											<div className="form-group">
												<label for="" className="text-danger">Store ID*</label>
												<select name="storeCat" id="" className="form-control" required>
													<option value="" selected>Select...</option>
													<option value="1">KDKR0001</option>
													<option value="2">KDKR0002</option>
													<option value="3">KDKR0003</option>
													<option value="4">KDKR0004</option>
													<option value="5">KDKR0005</option>
												</select>
											</div>
											<div className="form-group">
												<label for="" className="text-danger">Upload File*</label>
												<input type="file" className="form-control"  required />
											</div>
											<div className="form-group text-center pt10">
												<input type="submit" name="" className="btn btn-primary" value="Upload Puchases" onClick="" />
											</div>
										</form>
									</div>
								</div>
								<div className="col-md-2 col-sm-1 col-xs-12"></div>
							</div>
						</div>
    </div>
  )
}

export default UploadData
