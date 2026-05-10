import dotenv from "dotenv";
dotenv.config();
import jwt from "jsonwebtoken";

const generateToken = (user) => {
  const payload = {
    id: user.id,
    email: user.email,
    role: user.role,
  };

  const token = jwt.sign(payload, process.env.JWT_SECRET, {
    expiresIn: process.env.EXPIRES_JWT,
  });

  return token;
};

export default generateToken;
