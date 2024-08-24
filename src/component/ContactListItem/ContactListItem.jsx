export default function ContactListItem({ newUser }) {
  return (
    <>
      <span>{newUser.name}</span>
      <span>{newUser.number}</span>
      <button>Delete</button>
    </>
  );
}
