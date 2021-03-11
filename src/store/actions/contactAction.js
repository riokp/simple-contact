export const fetchContacts = () => {
  return async (dispatch) => {
    try {
      const data = await fetch('https://simple-contact-crud.herokuapp.com/contact');
      const contacts = await data.json();
      dispatch({
        type: 'FETCH_CONTACTS',
        payload: contacts
      })
      .then(dispatch({
        type: 'SET_CONTACTS_LOADING',
        payload: true
      }))
    } catch (error) {}
  }
}

export const fetchContact = (id) => {
  return async (dispatch) => {
    try {
      const data = await fetch(`https://simple-contact-crud.herokuapp.com/contact/${id}`)
      const contact = await data.json();
      dispatch({
        type: "FETCH_CONTACT",
        payload: contact
      })
      .then(dispatch({
        type: 'SET_CONTACT_LOADING',
        payload: true
      }))
    } catch (error) {}
  }
}

export const addContact = (contact) => {
  return async (dispatch) => {
    try {
      const data = await fetch('https://simple-contact-crud.herokuapp.com/contact', {
        method: "POST",
        body: JSON.stringify(contact),
        headers: {
          "Content-Type": "application/json"
        }
      })
      console.log(data);
      const newContact = await data.json()
      dispatch({
        type: "ADD_CONTACT",
        payload: newContact
      })
    } catch (error) {
      console.log(error);
    }
  }
}

export const deleteContact = (id) => {
  return async (dispatch) => {
    try {
      await fetch(`https://simple-contact-crud.herokuapp.com/contact/${id}`, {
        method: "DELETE"
      })
      dispatch({
        type: "DELETE_CONTACT",
        payload: id
      })
    } catch (error) {
      console.log(error);
    }
  }
}

export const updateContact = (id, contact) => {
  return async (dispatch) => {
    try {
      const data = await fetch(`https://simple-contact-crud.herokuapp.com/contact/${id}`, {
        method: "PUT",
        body: JSON.stringify(contact),
        mode: 'cors',
        headers: {
          "Content-Type": "application/json",
          "Accept": 'application/json',
        }
      })
      console.log(data);
      const newContact = await data.json();
      dispatch({
        type: "UPDATE_CONTACT",
        payload: newContact
      })
    } catch (error) {
      console.log(error);
    }
  }
}

export const setLoading = (loading) => {
  return(dispatch) => {
    dispatch({
      type: "SET_CONTACT_LOADING",
      payload: loading
    })
  }
}