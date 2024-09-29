




export const permissions = {
  vehicle: {
    create: ["admin", "super admin"],
    read: ["user", "admin", "super admin"],
    delete: ["super admin"],
    update: ["admin", "super admin"],
  },
  destination: {
    create: ["admin", "super admin"],
    read: ["user", "admin", "super admin"],
    delete: ["super admin"],
    update: ["admin", "super admin"],
  },
  schedule: {
    create: ["admin", "super admin"],
    read: ["user", "admin", "super admin"],
    delete: ["admin", "super admin"],
    upadate: ["admin", "super admin"],
  },
  tickets: {
    create: ["admin", "super admin"],
    read: ["user", "admin", "super admin"],
    delete: ["admin", "super admin"],
    upadate: ["admin", "super admin"],
    get: ["user", "admin", "super admin", "driver"],
  },
  reports: {
    create: ["admin", "super admin", "driver"],
    read: ["admin", "super admin"],
    delete: ["admin", "super admin"],
    upadate: ["admin", "super admin"],
  },
  manifests: {
    create: ["admin", "driver"],
    update: ["admin", "super admin"],
  },
  user: {
    create: ["admin", "super admin",],
    read: ["admin", "super admin"],
    delete: ["admin", "super admin"],
    upadate: ["admin", "super admin"],
  },
  role: {
    create: ["super admin"],
    read: ["super admin"],
    update: [" super admin"],
    delete:["super admin"],
    }
};



export function getOperationType(method) {
  let operation;
  switch (method) {
    case "post":
      operation = "create";
      break;
    case "get":
      operation = "read";
      break;
    case "put":
      operation = "update";
      break;
    case "delete":
      operation = "delete";
      break;
    default:
      operation = "read";
  }
  return operation;
};

