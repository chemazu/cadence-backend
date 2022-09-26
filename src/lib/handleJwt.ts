import jwt from "jsonwebtoken";

function generateAccessToken(username: any) {
  return jwt.sign({ username }, process.env.REACT_APP_JWT_SECRET, {
    expiresIn: "60d",
  });
}
export default generateAccessToken;
