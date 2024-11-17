let user = {
  name: "Tushar",
  roll_no: "21BIT273D",
  subjects: { sub1: "Maths", sub2: "Science", sub3: "Computer" },
};

// Shallow Copy
console.log(
  "############################# Shallow COPY ####################################################"
);
let prayag = { ...user };
console.log("user: ", user);
console.log("Prayag: ", prayag);
console.log("\nAfter Modification\n");
user.name = "aniket";
user.subjects.sub2 = "";
console.log("user:", user);
console.log("Prayag:", prayag);

// Deep Copy
console.log(
  "############################# DEEP COPY ####################################################"
);
let deepCopy = JSON.parse(JSON.stringify(user));
deepCopy.name = "Shyam";
deepCopy.subjects.sub2 = "History";

console.log("User:", user);
console.log("DeepCopy: ", deepCopy);
console.log("\nAfter Modification\n");
console.log("User:", user);
console.log("DeepCopy: ", deepCopy);
