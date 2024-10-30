"use strict";
// destructuring
var user = {
    id: 345,
    name: {
        firstName: "Mezbaul",
        middleName: "Abedin",
        lastName: "Persian",
    },
    contactNo: "0170000000",
    address: "Uganda",
};
var contactNo = user.contactNo, midName = user.name.middleName;
// array destructuring
var myFriends = ["chandler", "joey", "ross", "rachel", "monica", "phoebe"];
var bestFriend = myFriends[2], rest = myFriends.slice(3);
