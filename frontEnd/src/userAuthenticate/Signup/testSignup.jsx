import axios from "axios";
import PropTypes from "prop-types";
import Button from "../Button/Button";
import { Link, useNavigate } from "react-router-dom";
import {
  faCheck,
  faInfoCircle,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import styles from "../Login/login.module.css";
import linekdln from "../../assets/Vector.png";
import google from "../../assets/Social icon.png";
import { useRef, useEffect, useState } from "react";
import recycleHand from "../../assets/signupImg.png";
import CircularProgress from "@mui/material/CircularProgress";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { v4 as uuidv4 } from "uuid";

const USERNAME_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
const EMAIL_REGEX =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
const PASSWORD_REGEX =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
const SIGNUP_URL = "https://circle-wms.onrender.com/api/v1/users";
const CREATE_WALLET_ACCOUNT = "https://api-sandbox.circle.com/v1/wallets";

function Signup({ Clickhandler }) {
  const userRef = useRef();
  const errRef = useRef();
  const navigate = useNavigate();

  const [fullName, setFullName] = useState("");
  const [validName, setValidName] = useState(false);
  const [userFocus, setUserFocus] = useState(false);

  const [email, setEmail] = useState("");
  const [validEmail, setValidEmail] = useState(false);
  const [emailFocus, setEmailFocus] = useState(false);

  const [password, setPassword] = useState("");
  const [validPassword, setValidPassword] = useState(false);
  const [passwordFocus, setPasswordFocus] = useState(false);

  const [errMessage, setErrMessage] = useState("");
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const [walletData, setWalletData] = useState(null);
  const [walletId, setWalletId] = useState(null);

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setValidName(USERNAME_REGEX.test(fullName));
  }, [fullName]);

  useEffect(() => {
    setValidPassword(PASSWORD_REGEX.test(password));
  }, [password]);

  useEffect(() => {
    setValidEmail(EMAIL_REGEX.test(email));
  }, [email]);

  useEffect(() => {
    setErrMessage("");
  }, [fullName, email, password]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const idempotencyKey = uuidv4();

    // if button enabled with JS hack
    const v1 = USERNAME_REGEX.test(fullName);
    const v2 = PASSWORD_REGEX.test(password);
    if (!v1 || !v2) {
      setErrMessage("Invalid Entry");
      return;
    }

    try {
      setLoading(true);
      // create wallet
      const createWalletOptions = {
        method: "POST",
        headers: {
          accept: "application/json",
          "content-type": "application/json",
          authorization:
            "Bearer SAND_API_KEY:d4f5a846ab735475be2c55be25cc7953:72903f7cb32e324f5bc3c6fa87fd6869",
        },
        body: JSON.stringify({
          idempotencyKey: idempotencyKey,
        }),
      };

      const walletResponse = await fetch(
        CREATE_WALLET_ACCOUNT,
        createWalletOptions
      );
      const walletData = await walletResponse.json();
      console.log("Wallet:", walletData);

      // Create the address
      const createAddressOptions = {
        method: "POST",
        headers: {
          accept: "application/json",
          "content-type": "application/json",
          authorization:
            "Bearer SAND_API_KEY:d4f5a846ab735475be2c55be25cc7953:72903f7cb32e324f5bc3c6fa87fd6869",
        },
        body: JSON.stringify({
          currency: "USD",
          chain: "ETH",
          idempotencyKey: idempotencyKey,
        }),
      };

      const addressResponse = await fetch(
        `https://api-sandbox.circle.com/v1/wallets/${walletData.data.walletId}/addresses`,
        createAddressOptions
      );
      const addressData = await addressResponse.json();
      console.log("Address:", addressData);

      setWalletData({
        email: email,
        walletId: walletData.data.walletId,
        balance: walletData.data.balance,
        address: addressData.data.address,
      });
      setWalletId(walletData.data.walletId);

      // normal login

      const createUser = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: email,
          password: password,
          fullName: fullName,
        }),
      };

      const response = await fetch(SIGNUP_URL, createUser);
      const userData = await response.json();
      console.log("User:", userData);
      // const response = await axios.post(
      //   SIGNUP_URL,
      //   { fullName, email, password, walletId }, // Pass payload as an object
      //   {
      //     headers: { "Content-Type": "application/json" },
      //   }
      // );

      // const response = await axios.post(
      //   SIGNUP_URL,
      //   JSON.stringify({ fullName, email, password, walletId }),
      //   {
      //     headers: { "Content-Type": "application/json" },
      //   }
      // );

      const apiResponse = response?.data;
      console.log(apiResponse);
      setSuccess(true);
      setFullName("");
      setPassword("");
      setEmail("");
    } catch (err) {
      if (!err?.response) {
        setErrMessage("No Server Response");
      } else if (err.response?.status === 409) {
        setErrMessage("Username or Email Taken");
      } else {
        setErrMessage("Registration Failed");
      }
      errRef.current.focus();
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (success) {
      navigate("/login"); // Redirect to login page on success
    }
  }, [success, navigate]);

  return (
    <>
      {success ? (
        <section className={styles["page-like"]}>
          <h1>Success, Your Account has been created</h1>
          <Link to="/login"> Sign in here</Link>
        </section>
      ) : (
        <div className={styles["page-like"]}>
          <aside className={styles["img-container"]}>
            <img src={recycleHand} alt="" />
          </aside>

          <main className={styles["main"]}>
            <header>
              <h1 className={styles["title"]}>Sign up</h1>
              <p className={styles["subtitle"]}>
                Start turning plastic wastes to CRYPTO
              </p>
            </header>

            <p
              ref={errRef}
              className={errMessage ? styles.errmsg : styles.offscreen}
              aria-live="assertive"
            >
              {errMessage}
            </p>

            <section className={styles["content"]}>
              <form onSubmit={handleSubmit}>
                <label className={styles["input-label"]} htmlFor="name">
                  Full name&#42;
                  <FontAwesomeIcon
                    icon={faCheck}
                    className={validName ? styles.valid : styles.hide}
                  />
                  <FontAwesomeIcon
                    icon={faTimes}
                    className={
                      validName || !fullName ? styles.hide : styles.invalid
                    }
                  />
                </label>
                <input
                  className={styles["input-elem"]}
                  type="text"
                  id="name"
                  ref={userRef}
                  autoComplete="off"
                  onChange={(e) => setFullName(e.target.value)}
                  value={fullName}
                  required
                  aria-invalid={validName ? "false" : "true"}
                  aria-describedby="uidnote"
                  onFocus={() => setUserFocus(true)}
                  onBlur={() => setUserFocus(false)}
                  placeholder="Enter your full name here"
                />

                <p
                  id="uidnote"
                  className={
                    userFocus && fullName && !validName
                      ? styles.instructions
                      : styles.offscreen
                  }
                >
                  <FontAwesomeIcon icon={faInfoCircle} />
                  4 to 24 characters.
                  <br />
                  Must begin with a letter.
                  <br />
                  Letters, numbers, underscores, hyphens allowed.
                </p>

                <label className={styles["input-label"]} htmlFor="email">
                  Email&#42;
                  <FontAwesomeIcon
                    icon={faCheck}
                    className={validEmail ? styles.valid : styles.hide}
                  />
                  <FontAwesomeIcon
                    icon={faTimes}
                    className={
                      validEmail || !email ? styles.hide : styles.invalid
                    }
                  />
                </label>
                <input
                  className={styles["input-elem"]}
                  type="email"
                  id="email"
                  autoComplete="off"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  required
                  aria-invalid={validEmail ? "false" : "true"}
                  aria-describedby="mailnote"
                  onFocus={() => setEmailFocus(true)}
                  onBlur={() => setEmailFocus(false)}
                  placeholder="Enter your Email here"
                />

                <p
                  id="mailnote"
                  className={
                    emailFocus && email && !validEmail
                      ? styles.instructions
                      : styles.offscreen
                  }
                >
                  <FontAwesomeIcon icon={faInfoCircle} />
                  Please Make use of a Valid Email address.
                  <br />
                  <br />
                </p>

                <label className={styles["input-label"]} htmlFor="password">
                  Password&#42;
                  <FontAwesomeIcon
                    icon={faCheck}
                    className={validPassword ? styles.valid : styles.hide}
                  />
                  <FontAwesomeIcon
                    icon={faTimes}
                    className={
                      validPassword || !password ? styles.hide : styles.invalid
                    }
                  />
                </label>
                <input
                  className={styles["input-elem"]}
                  type="password"
                  id="password"
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                  required
                  aria-invalid={validPassword ? "false" : "true"}
                  aria-describedby="pwdnote"
                  placeholder="Create a password"
                  onFocus={() => setPasswordFocus(true)}
                  onBlur={() => setPasswordFocus(false)}
                />
                <p
                  id="pwdnote"
                  className={
                    passwordFocus && !validPassword
                      ? styles.instructions
                      : styles.offscreen
                  }
                >
                  <FontAwesomeIcon icon={faInfoCircle} />
                  8 to 24 characters.
                  <br />
                  Must include uppercase and lowercase letters, a number and a
                  special character.
                  <br />
                  Allowed special characters:
                  <span aria-label="exclamation mark">!</span>
                  <span aria-label="at symbol">@</span>
                  <span aria-label="hashtag">#</span>
                  <span aria-label="dollar sign">$</span>
                  <span aria-label="percent">%</span>
                </p>

                <p className={styles["caption"]}>
                  Must be at least 8 characters long
                </p>

                <Button
                  style={{ background: "#7F56D9", width: "99%" }}
                  text={
                    loading ? (
                      <CircularProgress style={{ color: "#fff" }} size={23} />
                    ) : (
                      "Create account"
                    )
                  }
                  disabled={loading}
                />
              </form>

              <p className={styles["texty"]}>
                Already have an account?
                <Link to="/login">
                  <span>Login</span>
                </Link>
              </p>
              <div className={styles["liney-texty"]}>
                <p className={styles["liney"]}></p>
                <p className={styles["demac"]}>OR</p>
                <p className={styles["liney"]}></p>
              </div>

              <Button
                style={{ background: "#344054" }}
                text="Sign in with metamask"
              />
              <Button
                img={google}
                style={{ color: "#344054" }}
                text="Sign in with Google"
              />
              <Button
                img={linekdln}
                style={{ background: "#1877F2" }}
                text="Sign in with Linkedin"
              />
            </section>
          </main>
        </div>
      )}
    </>
  );
}

Signup.propTypes = {
  Clickhandler: PropTypes.func,
};

export default Signup;
