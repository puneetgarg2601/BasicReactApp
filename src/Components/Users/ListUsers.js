import styles from "./ListUsers.module.css";
const ListUsers = (props) => {
  console.log(props);
  const users = props.users.map((user) => {
    return (
      <div className={styles.item} key={user.id}>
        {user.name} ({user.age} years old)
      </div>
    );
  });
  return <>{users}</>;
};
export default ListUsers;
