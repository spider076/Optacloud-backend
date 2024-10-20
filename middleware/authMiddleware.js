const jwt = require("jsonwebtoken");

const authMiddleware = (req, res, next) => {
  // Get the token from the 'Authorization' header
  const authHeader = req.header("Authorization");
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({ msg: "No token, authorization denied" });
  }

  try {
    // Extract the token from the "Bearer <token>" format
    const token = authHeader.split(" ")[1];

    console.log("token : ", token);

    // Verify the token with the secret key
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Attach the decoded user information to the request object
    req.user = decoded.user;

    // Move to the next middleware or route handler
    next();
  } catch (error) {
    console.error("Token verification error: ", error);
    res.status(401).json({ msg: "Invalid token" });
  }
};

module.exports = authMiddleware;
