import styles from "./editPassword.module.css";
import Button from "../Button/Button";

function EditPassword() {
  return (
    <div className={styles["form-container"]}>
      <h1>Edit password</h1>

      <form action="" className={styles["personal-form"]}>
        <div>
          <label htmlFor="old">Old password</label>
          <input type="text" placeholder="Enter your old password" id="old" />
        </div>

        <div>
          <label htmlFor="new">New password</label>
          <input type="text" placeholder="Enter a new password" id="new" />
        </div>

        <div>
          <label htmlFor="confirm">New password</label>
          <input
            type="text"
            placeholder="Confirm your new password"
            id="confirm"
          />
        </div>

        <Button text="Save Changes" />
      </form>
    </div>
  );
}

export default EditPassword;
