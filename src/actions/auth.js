export const success = (userData) => ({ type: "SUCCESS", data: userData });

export const fail = (text) => ({ type: "FAIL", errorMessage: text });

/*const login = (userName, password) => {
  if (userName === "Admin" && password === "test1A") {
    success();
  } else {
    fail();
  }
};
*/
