import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const CreateWalletAccount = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [walletData, setWalletData] = useState(null);

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  // const createCircleWallet = async () => {
  //   const idempotencyKey = uuidv4();
  //   const options = {
  //     method: "POST",
  //     headers: {
  //       accept: "application/json",
  //       "content-type": "application/json",
  //       authorization:
  //         "Bearer SAND_API_KEY:d4f5a846ab735475be2c55be25cc7953:72903f7cb32e324f5bc3c6fa87fd6869",
  //     },
  //     body: JSON.stringify({
  //       idempotencyKey: idempotencyKey,
  //     }),
  //   };

  //   try {
  //     const response = await fetch(
  //       "https://api-sandbox.circle.com/v1/wallets",
  //       options
  //     );
  //     const data = await response.json();

  //     setWalletData({
  //       email: email,
  //       walletId: data.data.walletId,
  //       balance: data.data.balance,
  //     });
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  const createCircleWallet = async () => {
    const idempotencyKey = uuidv4();

    try {
      // Create the wallet
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
        "https://api-sandbox.circle.com/v1/wallets",
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
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <input
        type="text"
        value={email}
        onChange={handleEmailChange}
        placeholder="Email"
      />
      <input
        type="password"
        value={password}
        onChange={handlePasswordChange}
        placeholder="Password"
      />
      <button onClick={createCircleWallet}>Create Wallet</button>
      {walletData && (
        <div>
          <h2>Wallet Details</h2>
          <p>Email: {walletData.email}</p>
          <p>Wallet ID: {walletData.walletId}</p>
          <p>Balance: {walletData.balance}</p>
          <p>Address: {walletData.address}</p>
        </div>
      )}
    </div>
  );
};

export default CreateWalletAccount;

// import { useState } from "react";

// const CreateWalletAccount = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [walletDetails, setWalletDetails] = useState(null);
//   const [error, setError] = useState("");

//   const handleEmailChange = (event) => {
//     setEmail(event.target.value);
//   };

//   const handlePasswordChange = (event) => {
//     setPassword(event.target.value);
//   };

//   const createWallet = () => {
//     const options = {
//       method: "POST",
//       headers: {
//         accept: "application/json",
//         "content-type": "application/json",
//         authorization:
//           "Bearer SAND_API_KEY:d4f5a846ab735475be2c55be25cc7953:72903f7cb32e324f5bc3c6fa87fd6869",
//       },
//       body: JSON.stringify({
//         idempotencyKey: generateIdempotencyKey(),
//       }),
//     };

//     fetch("https://api-sandbox.circle.com/v1/wallets", options)
//       .then((response) => response.json())
//       .then((data) => {
//         setWalletDetails({ email, walletId: data.id });
//         setError("");
//       })
//       .catch((error) => {
//         console.error(error);
//         setError("Error creating wallet. Please try again.");
//       });
//   };

//   const handleLogout = () => {
//     setEmail("");
//     setPassword("");
//     setWalletDetails(null);
//     setError("");
//   };

//   const handleLogin = () => {
//     // Perform login logic here
//     // You can check the email and password against a stored user data or authenticate with a server
//     // For simplicity, we will assume login is successful if email and password match
//     if (email === email && password === password) {
//       setError("");
//       // Set the wallet details here if available
//       setWalletDetails({ email, walletId: "123456" });
//     } else {
//       setError("Invalid email or password");
//     }
//   };

//   const generateIdempotencyKey = () => {
//     return "25aa9d73-842e-4453-bc2d-cb29098b99b8"; // Replace with your own logic to generate idempotency key
//   };

//   if (walletDetails) {
//     return (
//       <div>
//         <h2>Wallet Details</h2>
//         <p>Email: {walletDetails.email}</p>
//         <p>Wallet ID: {walletDetails.walletId}</p>
//         <button onClick={handleLogout}>Logout</button>
//       </div>
//     );
//   } else {
//     return (
//       <div>
//         <input
//           type="email"
//           value={email}
//           onChange={handleEmailChange}
//           placeholder="Email"
//         />
//         <input
//           type="password"
//           value={password}
//           onChange={handlePasswordChange}
//           placeholder="Password"
//         />
//         <button onClick={createWallet}>Create Wallet</button>
//         <button onClick={handleLogin}>Login</button>
//         {error && <p>{error}</p>}
//       </div>
//     );
//   }
// };

// export default CreateWalletAccount;
