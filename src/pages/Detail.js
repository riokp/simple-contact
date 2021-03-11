import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router"
import { fetchContact, fetchContacts, setLoading, updateContact } from '../store/actions/contactAction'
import swal from 'sweetalert';

export default function Detail (props) {
  const {id} = useParams();
  const dispatch = useDispatch()
  const history = useHistory()
  const contact = useSelector((state) => state.contactReducer.contact)
  const contactIsLoaded = useSelector((state) => state.contactReducer.contactIsLoaded)
  const [editInput, setEditInput] = useState({
    firstName: "",
    lastName: "",
    age: "",
    photo: ""
  })
  const [errors, setErrors] = useState('')

  const onChange = (event) => {
    let { name, value } = event.target
    const newInput = { ...editInput, [name]: value}
    setEditInput(newInput)
  }

  
  const handleSubmit = (event) => {
    event.preventDefault();
    swal({
      title: "Are you sure?",
      text: "Are you sure that you want to update this contact?",
      icon: "info",
      buttons: ["Cancel", true]
    })
    .then(willUpdate => {
      if (willUpdate) {
        if(editInput.firstName !== "" || editInput.age === 0) {
          dispatch(updateContact(contact.data.id, {
            firstName: editInput.firstName,
            lastName: editInput.lastName,
            age: editInput.age,
            photo: editInput.photo
          }))
          dispatch(fetchContacts())
          history.push('/')
          swal("Success!", "Contact has been updated", "success");
        } else {
          if(editInput.firstName === "" || editInput.age === 0) {
            setErrors('Please fill all the required field')
          }
        }
      }
    })
  }
  
  useEffect(() => {
    dispatch(setLoading(false))
    dispatch(fetchContact(id))
    console.log(contactIsLoaded);
  }, [])

  useEffect(() => {
    setEditInput({
      firstName: contact.data.firstName,
      lastName: contact.data.lastName,
      age: contact.data.age,
      photo: contact.data.photo
    })
  }, [contact])
  
  if(!contactIsLoaded) {
    return <p>loading</p>
  }

  return (
    <div className="container" style={{marginTop: 100}}>
      <div style={{backgroundColor: "white", borderRadius: 20, padding: 100}}>
        <div className="mb-5">
          <h1>Update Contact</h1>
        </div>
        <div className="container">
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <input name="firstName" onChange={onChange} placeholder="First Name" type="text" className="form-control" value={editInput.firstName}/>
            </div>
            <div className="mb-3">
              <input name="lastName" onChange={onChange} placeholder="Last name" type="text" className="form-control" value={editInput.lastName}/>
            </div>
            <div className="mb-3">
              <input name="age" onChange={onChange} placeholder="Age" type="number" className="form-control" value={editInput.age}/>
            </div>
            <div className="mb-3">
              <input name="photo" onChange={onChange} placeholder="Photo URL" type="text" className="form-control" value={editInput.photo}/>
            </div>
            <p style={{color: "red"}}>{errors}</p>
            <button type="submit" className="btn btn-primary mt-5">Update</button>
          </form>
        </div>
      </div>
    </div>
  )
}