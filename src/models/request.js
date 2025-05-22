import { EntitySchema } from "typeorm";

export default new EntitySchema({
  name: "Request",
  tableName: "requests",
  columns: {
    id: {
      primary: true,
      type: "int",
      generated: true,
    },
    accessType: {
      type: "varchar", // "Read", "Write", "Admin"
    },
    reason: {
      type: "text",
    },
    status: {
      type: "varchar",
      default: "Pending", // Pending / Approved / Rejected
    },
  },
  relations: {
    user: {
      type: "many-to-one",
      target: "User",
      eager: true,
      joinColumn: true,
    },
    software: {
      type: "many-to-one",
      target: "Software",
      eager: true,
      joinColumn: true,
    },
  },
});
