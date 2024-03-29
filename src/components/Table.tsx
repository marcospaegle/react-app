import { useContext } from "react";

import { ContactContext } from "../contexts/ContactContext.tsx";

function Table() {
  const { contacts } = useContext(ContactContext);

  return (
    <div className="container mx-auto mt-10">
      <table className="table-auto w-full">
        <thead>
          <tr className="text-left">
            <th>Nome</th>
            <th>Email</th>
            <th>Country</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((c, key) => (
            <tr key={`CONTACT-${key}`}>
              <td>{c.name}</td>
              <td>{c.email}</td>
              <td>{c.country}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
