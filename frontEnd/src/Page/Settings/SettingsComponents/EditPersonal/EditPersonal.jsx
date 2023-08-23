import styles from "./editPersonal.module.css";
import Button from "../Button/Button";

function EditPersonal() {
  return (
    <div className={styles["form-container"]}>
      <h1>Edit personal profile</h1>

      <form action="" className={styles["personal-form"]}>
        <section>
          <div>
            <label htmlFor="name">Full name</label>
            <input type="text" placeholder="Chioma Shiela" id="name" />
          </div>

          <div>
            <label htmlFor="email">Email address</label>
            <input type="email" placeholder="Iamchioma@gmail.com" id="email" />
          </div>

          <div>
            <label htmlFor="country">Country</label>
            <input type="text" placeholder="Nigeria" id="country" />
          </div>

          <div>
            <label htmlFor="city">City</label>
            <input type="text" placeholder="Abuja" id="city" />
          </div>

          <div>
            <label htmlFor="phone">Phone number</label>
            <input type="text" placeholder="+234-800-000-1234" id="phone" />
          </div>
        </section>

        <Button text="Save Changes" />
      </form>
    </div>
  );
}

export default EditPersonal;
