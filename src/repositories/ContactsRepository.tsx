import { useContext } from "react";

import { Contact, ContactContext } from "../contexts/ContactContext.tsx";

const ContactsRepository = () => {
  const { setContact } = useContext(ContactContext);

  function save(contact: Contact): void {
    const contacts = JSON.parse(localStorage.getItem("fc_contacts") ?? "[]");
    contacts.push(contact);
    localStorage.setItem("fc_contacts", JSON.stringify(contacts));

    setContact(contact);
  }

  function get(): Contact[] {
    return JSON.parse(localStorage.getItem("fc_contacts") ?? "[]");
  }

  return { save, get };
};

export default ContactsRepository;
