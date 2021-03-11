const initialState = {
  contacts: [],
  contact: {},
  contactsIsLoaded: false,
  contactIsLoaded: false
}

const contactReducer = (state = initialState, action) => {
  switch(action.type) {
    case ('FETCH_CONTACTS'):
      return { ...state, contacts: action.payload }
    case ('SET_CONTACTS_LOADING'):
      return { ...state, contactsIsLoaded: action.payload }
    case ('FETCH_CONTACT'):
      return { ...state, contact: action.payload }
    case ('SET_CONTACT_LOADING'):
      return { ...state, contactIsLoaded: action.payload }
    case ('ADD_CONTACT'):
      return { ...state, contacts: state.contacts.concat(action.payload) }
    case ('DELETE_CONTACT'):
      const newContacts = state.contacts.filter(contact => contact.id !== action.payload);
      return { ...state, contacts: newContacts }
    case ('UPDATE_CONTACT'):
        return { ...state, contacts: state.contacts.concat(action.payload) }
    default:
      return state;
  }
}

export default contactReducer;