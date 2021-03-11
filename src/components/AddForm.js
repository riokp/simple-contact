import { useState } from "react";
import { useDispatch } from "react-redux";
import { addContact } from '../store/actions/contactAction'
import { fetchContacts } from '../store/actions/contactAction'
import swal from 'sweetalert';

export default function AddForm (props) {
  const dispatch = useDispatch()
  const [addInput, setAddInput] = useState({
    firstName: "",
    lastName: "",
    age: 0,
    photo: ""
  })
  const [errors, setErrors] = useState('')


  const onChange = (event) => {
    let { name, value } = event.target
    const newInput = { ...addInput, [name]: value}
    setAddInput(newInput)
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    swal({
      title: "Are you sure?",
      text: "Are you sure that you want to add this contact?",
      icon: "info",
      buttons: ["Cancel", true]
    })
    .then(willAdd => {
      if (willAdd) {
        if(addInput.firstName !== "" || addInput.age !== 0 ) {
          dispatch(addContact({
            firstName: addInput.firstName,
            lastName: addInput.lastName,
            age: addInput.age,
            photo: addInput.photo
          }))
          dispatch(fetchContacts())
          props.setAddModal(false)
          swal("Success!", "Contact has been added", "success");
        } else {
          if(addInput.firstname === "" || addInput.age === 0) {
            setErrors('Please fill all the required field')
          }
        }
      }
    });
  }

  return (
    <div className="container align-middle" style={{marginTop: 100}}>
    <div className="modal-dialog">
      <div className="modal-content">
        <form onSubmit={handleSubmit}>
          <div className="container flex-column">
            <h1 className="mb-3">Add Contact</h1>
            <div className="mb-3">
              <label className="form-label">*First Name</label>
              <input type="text" className="form-control" onChange={onChange} name="firstName" value={addInput.firstName} placeholder="Input first name"></input>
            </div>
            <div className="mb-3">
            <label className="form-label">Last Name</label>
              <input type="text" className="form-control" onChange={onChange} name="lastName" value={addInput.lastName} placeholder="Input last name"></input>
            </div>
            <div className="mb-3">
            <label className="form-label">*Age</label>
              <input type="number" className="form-control" onChange={onChange} name="age" value={addInput.age} placeholder="Input age"></input>
            </div>
            <div className="mb-3">
            <label className="form-label">Photo</label>
              <input type="text" className="form-control" onChange={onChange} name="photo" value={addInput.photo} placeholder="Input photo URL"></input>
            </div>
            <div>
              <p style={{color: "red"}}>{errors}</p>
            </div>
            <div>
              <button className="btn btn-warning" onClick={() => {props.setAddModal(false)}} style={{marginRight: 20, marginBottom: 50, marginTop: 20}}>Cancel</button>
              <button className="btn btn-primary" type="submit" style={{marginRight: 20, marginBottom: 50, marginTop: 20}}> Add </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
    // <div className="container">
    //   <form >
    //     <div className="mb-3">
    //       <input name="firstName" onChange={onChange} placeholder="First Name" type="text" className="form-control" value={addInput.firstName}/>
    //     </div>
    //     <div className="mb-3">
    //       <input name="lastName" onChange={onChange} placeholder="Last name" type="text" className="form-control" value={addInput.lastName}/>
    //     </div>
    //     <div className="mb-3">
    //       <input name="age" onChange={onChange} placeholder="Age" type="number" className="form-control" value={addInput.age}/>
    //     </div>
    //     <div className="mb-3">
    //       <input name="photo" onChange={onChange} placeholder="Photo URL" type="text" className="form-control" value={addInput.photo}/>
    //     </div>
    //     <button type="submit" className="btn btn-primary">Create</button>
    //   </form>
    // </div>
  )
}