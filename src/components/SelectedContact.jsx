import { useEffect, useState } from "react";

function SelectedContact({ selectedContactId, setSelectedContactId }) {
  const [contact, setContact] = useState(null);

  useEffect(() => {
    async function fetchContacts() {
      try {
        const response = await fetch(
          `https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users/${selectedContactId}`
        );
        const json = await response.json();
        console.log(json);
        setContact(json);
      } catch (error) {
        console.error(error);
      }
    }
    fetchContacts();
  }, []);

  return (
    <div className="contact-view">
      <button onClick={()=> setSelectedContactId(null)}>Back</button>
      <h1>Name: {contact?.name} </h1>
      <p>Username: {contact?.username} </p>
      <p>Email: {contact?.email} </p>
      <p>Website: {contact?.website} </p>
    </div>
  );
}

export default SelectedContact;
