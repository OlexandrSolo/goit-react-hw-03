import ContactListItem from "../ContactListItem/ContactListItem";

export default function ContactList({ userList }) {
  return (
    <ul>
      {userList.map((user) => (
        <li key={user.id}>
          <ContactListItem newUser={user} />
        </li>
      ))}
    </ul>
  );
}
