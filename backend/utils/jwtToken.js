export const sendToken = (user, statusCode, message, res) => {
  const token = user.getJwtToken();

  // Set the token in the cookie
  res
    .status(statusCode)
    .cookie("token", token, {
      expires: new Date(Date.now() + process.env.JWT_COOKIE_EXPIRE * 24 * 60 * 60 * 1000),
      httpOnly: true,
      secure: process.env.NODE_ENV === "production", // Enable for HTTPS
      sameSite: "strict",
    })
    .json({
      success: true,
      message,
      token,
      user,
    });
};
