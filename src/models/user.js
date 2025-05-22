import bcrypt from "bcrypt";

export default {
  name: "User",
  tableName: "users",
  columns: {
    id: {
      primary: true,
      type: "int",
      generated: true,
    },
    username: {
      type: "varchar",
      unique: true,
    },
    password: {
      type: "varchar",
    },
    role: {
      type: "enum",
      enum: ["Employee", "Manager", "Admin"],
      default: "Employee",
    },
  },
  beforeInsert: async (user) => {
    user.password = await bcrypt.hash(user.password, 10);
  },
};
