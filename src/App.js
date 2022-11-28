import { useState } from "react";
import styles from "./App.module.css";
import NewUser from "./Components/NewUser/NewUser";
import Card from "./Components/UI/Card";
import ListUsers from "./Components/Users/ListUsers";
import Modal from "./Components/Modal";

function App() {
  const [users, setUsers] = useState([]);
  const [invalidMessage, setInvalidMessage] = useState("");
  const addUser = (user) => {
    user.id = Math.floor(Math.random() * 1000 + 1);
    setUsers((prevUsers) => {
      return [...prevUsers, user];
    });
  };
  console.log(users);
  return (
    <div className={styles.container}>
      {invalidMessage.length > 0 && (
        <Modal message={invalidMessage} valid={() => setInvalidMessage("")} />
      )}
      <NewUser
        onAdd={(user) => addUser(user)}
        invalid={(message) => setInvalidMessage(message)}
      />
      {users.length > 0 && (
        <Card>
          <ListUsers users={users} />
        </Card>
      )}
    </div>
  );
}

export default App;
