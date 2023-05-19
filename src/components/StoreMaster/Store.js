import React, { useState } from 'react'
import InputField from '../inputfield/InputField'
import './storeStyle.css'
import StoreTable from './StoreTable'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
const AddStore = () => {

const [storeData,setStoreData]=useState({
    category:"",
    storeId:""
})
const [show, setShow] = useState(false);

const handleClose = () => setShow(false);
const handleShow = () => setShow(true);


    return (
        <div className='add-store'>
            <Button variant="success" onClick={handleShow}>
            Add Store+
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body> <StoreTable setStoreData={setStoreData} onClose={handleClose}/></Modal.Body>

      </Modal>

        </div>
    )
}

export default AddStore
