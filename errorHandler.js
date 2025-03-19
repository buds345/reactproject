export const handleAuthError = (error) => {
  switch (error.code) {
    case "auth/email-already-in-use":
      return "This email is already in use.";
    case "auth/wrong-password":
      return "Incorrect password.";
    case "auth/user-not-found":
      return "User not found.";
    default:
      return "An error occurred. Try again.";
  }
};
