function fifthStep(input) {
    // Your code here
    // Array.reduce - to convert an array into an object (TRICKY to use so don't use this unless you have a good idea of how to do this)
    // [
    //   ["username", "azure green"],
    //   ["password", "password!"],
    // ]
    // {
    //   username: "azure green",
    //   password: "password!",
    // }
    return input.reduce((accum, item) => {
      accum[item[0]] = item[1]
      return accum
    }, {})
  }
  console.log(fifthStep([
      ["username", "azure green"],
      ["password", "password!"],
    ]))
