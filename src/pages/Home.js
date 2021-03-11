import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchContacts } from '../store/actions/contactAction'
import ContactCard from '../components/ContactCard'
import Modal from 'react-modal';
import AddForm from '../components/AddForm'

export default function Home (props) {
  const dispatch = useDispatch()
  const contacts = useSelector((state) => state.contactReducer.contacts)
  const contactsIsLoaded = useSelector((state) => state.contactReducer.contactsIsLoaded)

  useEffect(() => {
    dispatch(fetchContacts())
  }, [dispatch])
  
  if(!contactsIsLoaded) {
    return <p>loading</p>
  }
  
  return (
    <div className="d-flex container-fluid flex-wrap mt-5 justify-content-start">
      {
        contacts.data.map(contact =>
        <ContactCard
        key={contact.id}
        contact={contact}
        />)
      }
      <Modal
      className="Modal"
      isOpen={props.addModal}
      onRequestClose={() => props.setAddModal(false)}
      ariaHideApp={false}
      style={{
      }}>
        <AddForm
        setAddModal={props.setAddModal}/>
      </Modal>
    </div>
  )
}
