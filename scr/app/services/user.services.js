import { ConflictError, NotFoundError, UnauthenticatedError } from "../../lib/error.def.js";
//import {User} from "../schema/user.schema.js";


export class UserService {
  async createUser(data) {
    try {
      const user = await User.create(data);
      return user;
    } catch (error) {
      throw new UnauthenticatedError("Error creating user:" + error.message);
    }
  }
  async getUserById(id) {
    try {
      const user = await User.finByPk(id);
      if (!user) {
        throw new NotFoundError("User not Found");
      }
      return user;
    } catch (error) {
      throw new ConflictError("Error fetching user:" + error.message);
    }
  }

  async getAllUsers() {
    try {
      const users = await User.findAll();
      return users;
    } catch (error) {
      throw new UnauthorizedError("Error fetching users: " + error.message);
    }
  }

  async updateUser(id, data) {
    try {
      const user = await User.findByPk(id);
      if (!user) {
        throw new NotFoundError("User not found");
      }
      await user.update(data);
      return user;
    } catch (error) {
      throw new ConflictError("Error updating user: " + error.message);
    }
  }

  async deleteUser(id) {
    try {
      const user = await user.findByPk(id);
      if (!user) {
        throw new NotFoundError("User not found");
      }
      await user.destroy();
      return { message: "User deleted successfully" };
    } catch (error) {
      throw new ConflictError("User can not be deleted: " + error.message);
    }
  }
}