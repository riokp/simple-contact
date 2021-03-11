// import { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { useParams } from "react-router"
// import { fetchContact,  } from '../store/actions/contactAction'

// export default function EditForm (props) {
//   const {id} = useParams();
//   const dispatch = useDispatch()
//   const contact = useSelector((state) => state.contactReducer.contact)
//   const contactIsLoaded = useSelector((state) => state.contactReducer.contactIsLoaded)
//   const [editInput, setEditInput] = useState({
//     firstName: "",
//     lastName: "",
//     age: 0,
//     photo: ""
//   })
  

//   const onChange = (event) => {
//     let { name, value } = event.target
//     const newInput = { ...editInput, [name]: value}
//     setEditInput(newInput)
//   }

//   useEffect(() => {
//     dispatch(fetchContact(id))
//   }, [])

//   useEffect(() => {
//     setEditInput({
//       firstName: contact.data.firstName,
//       lastName: contact.data.lastName,
//       age: contact.data.age,
//       photo: contact.data.photo
//     })
//   }, [])

//   const onSubmit = (event) => {
//     event.preventDefault();
//     if(editInput.firstName !== "" || editInput.age === 0) {
//       dispatch(updateContact({
//         firstName: editInput.firstName,
//         lastName: editInput.lastName,
//         age: editInput.age,
//         photo: editInput.photo
//       }))
//       dispatch(fetchContacts())
//       props.setEditModal(false)
//     } else {
//       if(editInput.firstName === "" || editInput.age === 0) {
//         setErrors('Please fill all the required field')
//       }
//     }
//   }

//   if(!contactIsLoaded) {
//     return <p>loading</p>
//   }

//   return (
//     <div className="container align-middle" style={{marginTop: 100}}>
//     <div className="modal-dialog">
//       <div className="modal-content">
//         <form onSubmit={onSubmit}>
//           <div className="container flex-column">
//             <h1 className="mb-3">Add Contact</h1>
//             <div className="mb-3">
//               <label className="form-label">First Name</label>
//               <input className="form-control" onChange={onChange} name="firstName" value={editInput.firstName} placeholder="Input first name"></input>
//             </div>
//             <div className="mb-3">
//             <label className="form-label">Last Name</label>
//               <input className="form-control" onChange={onChange} name="lastName" value={editInput.lastName} placeholder="Input last name"></input>
//             </div>
//             <div className="mb-3">
//             <label className="form-label">Age</label>
//               <input className="form-control" onChange={onChange} name="age" value={editInput.age} placeholder="Input age"></input>
//             </div>
//             <div className="mb-3">
//             <label className="form-label">Photo</label>
//               <input className="form-control" onChange={onChange} name="photo" value={editInput.photo} placeholder="Input photo URL"></input>
//             </div>
//             <div>
//               <p style={{color: "red"}}>{errors}</p>
//             </div>
//             <div>
//               <button className="btn btn-warning" onClick={() => {props.setEditModal(false)}} style={{marginRight: 20, marginBottom: 50, marginTop: 20}}>Cancel</button>
//               <button className="btn btn-primary" type="submit" style={{marginRight: 20, marginBottom: 50, marginTop: 20}}> Update </button>
//             </div>
//           </div>
//         </form>
//       </div>
//     </div>
//   </div>
//     // <div className="container">
//     //   <form>
//     //     <div className="mb-3">
//     //       <input name="firstName" onChange={onChange} placeholder="First Name" type="text" className="form-control" value={editInput.firstName}/>
//     //     </div>
//     //     <div className="mb-3">
//     //       <input name="lastName" onChange={onChange} placeholder="Last name" type="text" className="form-control" value={editInput.lastName}/>
//     //     </div>
//     //     <div className="mb-3">
//     //       <input name="age" onChange={onChange} placeholder="Age" type="number" className="form-control" value={editInput.age}/>
//     //     </div>
//     //     <div className="mb-3">
//     //       <input name="photo" onChange={onChange} placeholder="Photo URL" type="text" className="form-control" value={editInput.photo}/>
//     //     </div>
//     //     <button type="submit" className="btn btn-primary">Update</button>
//     //   </form>
//     // </div>
//   )
// }