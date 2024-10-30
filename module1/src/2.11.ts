{
  // ternary operator || optional chaining || nullish coalescing operator

  const age: number = 18;

  if (age >= 18) {
    console.log("adult");
  } else {
    console.log("not adult");
  }

  const isAdult = age >= 18 ? "adult" : "not adult";
  // console.log({ isAdult });

  //nullish coalescing operator
  // null / undefined ---> decision making

  const isAuthenticated = "";

  const result1 = isAuthenticated ?? "Guest";
  const result2 = isAuthenticated ? isAuthenticated : "Guest";
  console.log({ result1 }, { result2 });

  type User = {
    name: string;
    address: {
      city: string;
      road: string;
      presentaddress: string;
      permanentAddress?: string;
    };
  };

  const user: User = {
    name: "Persian",
    address: {
      city: "ctg",
      road: "Awesome Road",
      presentaddress: "ctg town",
    },
  };

  const permanentAddress =
    user?.address?.permanentAddress ?? "No Permanent Address";
  console.log({ permanentAddress });
  //
}
