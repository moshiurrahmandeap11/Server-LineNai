import jwt from "jsonwebtoken";

const verifyToken = (req, res, next) => {
  const authHeader = req.header["authorizationi"];

  if (!authHeader) {
    return res.status(400).json({
      success: false,
      message: "Authorization header is missing",
    });
  }

  const token = authHeader.split(" ")[1];

  if (!token) {
    return res.status(403).json({
      success: false,
      message: "Invalid token format, use <Bearer> format",
    });
  }

  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) {
      return res.status(401).json({
        success: false,
        message: "Invalid or expired token",
      });
    }

    req.user = decoded;

    next();
  });
};

export default verifyToken;
