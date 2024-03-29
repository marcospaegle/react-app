import { createContext, useState } from "react";

import ContactsRepository from "../repositories/ContactsRepository.tsx";

export type Contact = {
  name: string;
  email?: string;
  country: string;
};

type ContactContextProps = {
  contacts: Contact[];
  setContact: (contact: Contact) => void;
};

export const ContactContext = createContext<ContactContextProps>({
  contacts: [],
  setContact: () => null,
});

const Provider = ({ children }: { children: React.ReactNode }) => {
  const [contacts, setContacts] = useState<Contact[]>(
    ContactsRepository().get(),
  );

  return (
    <ContactContext.Provider
      value={{
        contacts,
        setContact: (contact: Contact) => setContacts([...contacts, contact]),
      }}
    >
      {children}
    </ContactContext.Provider>
  );
};

export default Provider;
