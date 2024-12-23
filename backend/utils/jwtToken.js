export const sendToken = (user, statusCode, message, res) => {
  const token=  user.getJWTToken();

  // Set the token in the cookie
  res
    .status(statusCode)
    .cookie("token", token, {
      expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
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
