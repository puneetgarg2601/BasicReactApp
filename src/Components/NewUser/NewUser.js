import { useState } from "react";
import Card from "../UI/Card";
import styles from "./NewUser.module.css";

const NewUser = (props) => {
  const [userDetails, setUserDetails] = useState({ name: "", age: "" });
  const changeInput = (e) => {
    setUserDetails({ ...userDetails, [e.target.name]: e.target.value });
  };
  const addUser = (e) => {
    e.preventDefault();
    userDetails.name = userDetails.name.trim();
    userDetails.age = userDetails.age.trim();
    if (userDetails.name.length === 0 || userDetails.age.length === 0) {
      props.invalid("Please enter a valid name and age (non-empty values).");
    } else if (userDetails.age <= 0 || userDetails.age > 100) {
      props.invalid("Please enter a valid age (>0 and <=100).");
    } else if (userDetails.age.includes(".")) {
      props.invalid("Decimal not allowed in age.");
    } else {
      userDetails.age = parseInt(userDetails.age);
      props.onAdd(userDetails);
      setUserDetails({ name: "", age: "" });
    }
  };
  return (
    <Card>
      <form action="" onSubmit={addUser}>
        <label className={styles.form__label} htmlFor="username">
          UserName
        </label>
        <input
          className={styles.form__input}
          type="text"
          name="name"
          value={userDetails.name}
          onChange={changeInput}
          id="username"
        />
        <label className={styles.form__label} htmlFor="age">
          Age (Years)
        </label>
        <input
          className={styles.form__input}
          value={userDetails.age}
          onChange={changeInput}
          type="number"
          name="age"
          id="age"
        />
        <button className={styles.form__button}>Add User</button>
      </form>
    </Card>
  );
};
export default NewUser;
