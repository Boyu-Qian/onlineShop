import bcrypt from "bcryptjs";

const users = [
  {
    name: "Admin User",
    email: "admin@email.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: true,
  },
  {
    name: "Boyu Qian",
    email: "Bo123@email.com",
    password: bcrypt.hashSync("Sep-16-2023", 10),
    isAdmin: false,
  },
  {
    name: "Kat Cat",
    email: "Kat@email.com",
    password: bcrypt.hashSync("14:20", 10),
    isAdmin: false,
  },
];

export default users;
