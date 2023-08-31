# EcoDrive Chain Decentralized Application

EcoDriveChain(EcoChain) is a Decentralized Application (dApp) that allows user to properly Dispose and Recycle used plastic (pet bottles). User will get paid the EDC token upon successful disposal and the EDC Token can be converted back to USDC by the user.

## Presentation Description

https://www.figma.com/file/5GghlistnVKcAqSxT8DoGe/ECOCHAIN?type=design&node-id=19-7827&mode=design&t=sfKB9OmQ1Ta0IBWR-0
https://www.figma.com/file/5GghlistnVKcAqSxT8DoGe/ECOCHAIN?type=design&node-id=3-2629&mode=design&t=xudyEZ1Mg1WqZOCF-0

## Design System (UI/UX)

https://www.figma.com/file/5GghlistnVKcAqSxT8DoGe/ECOCHAIN?type=design&node-id=3-2629&mode=design&t=xudyEZ1Mg1WqZOCF-0

## How it Works

1. User comes to our Dapp and sign up using email, password or Wallet.
2. Upon Successful Sign Up, user Creates a USDC Wallet (The Wallet is Created using the Circle API which was fully integrated in our dApp).
3. After Wallet Creation the User will be taken to the pool where user can then submit their pet bottles.
4. Users can deposit their used plastic bottles to our trash collection center (Liquidity Pool) using unique ID, and upon successful deposit at our pool users get the receipt token which serves as evidence.
5. After Successful deposit of Pet bottles Validation by the Pool Admin starts. After validation user will be notified on the status of his/her deposit.
6. User can then Submit their USDC address for payment.
7. If Validation is successful, Users will be able to redeem their receipt by depositing the receipt back to the pool and then USDC equivalent of the amount will be paid directly to their USDC Wallet.
8. For now our conversion rate is 0.1 USDC per Plastic Bottle.
9. The Proceed is paid directly into the User's USDC address upon successful confirmation.

## Contract Address

0x41ef5D1173DB7c478a0fB259751483A78B1a60dA

## PolygonScan Address:

https://mumbai.polygonscan.com/address/0x41ef5D1173DB7c478a0fB259751483A78B1a60dA

## Live Url

https://ecochain.vercel.app/

## Demo Video:

https://youtu.be/qxAynevwxjY

## View of Our EcoChain dApp

- Login/SignUp
  ![signin](./images/signin.png)

- Create USDC Wallet Using Circle API
  ![createwallet](./images/Createwallet.png)

- Recycle Pet Bottles
  ![recycle](./images/recycle.png)
