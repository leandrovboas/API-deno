import { IUser } from "../model/user.ts";
import { usersDatabase } from "../database/users.ts";

class userController {

  UserDatabase: usersDatabase

  constructor(){
    this.UserDatabase = new usersDatabase();
  }

  getUsers = async ({ response }: { response: any }) => {
    let users = await this.UserDatabase.getUsers();

    this.responseValidate(response, users)
  };

  getUser = async (
    { params, response }: { params: { id: string }; response: any },
  ) => {
    const user: IUser | undefined = await this.UserDatabase
      .getUsers()
      .filter(x => x.id === Number(params.id))[0];

      this.responseValidate(response, user)
  };

  addUser = async (
    { request, response }: { request: any; response: any },
  ) => {

    const body = await request.body();
    const user: IUser = await body.value;

    user.create_at = new Date();
    user.update_at = new Date();

    const users = await this.UserDatabase.addUsers(user)

    response.body = users;
    response.status = 200;
  };

  updateUser = async ({params, request, response }:{
      params: { id: string };
      request: any;
      response: any},
  ) => {
    let user = await this.UserDatabase
      .getUsers()
      .filter(x => x.id == Number(params.id))[0]

    const body = await request.body()
    const userMod: {email?: string} = await body.value

    user = {... user, ...userMod, update_at: new Date()}
      this.UserDatabase.users = [
      ...this.UserDatabase.users.filter((user) => user.id !== Number(params.id)),
      user]

    response.body = this.UserDatabase.users;
    response.status = 200;
  };

  deleteUser = async (
    { params, response }: { params: { id: string }; response: any },
  ) => {
    this.UserDatabase.users = [
      ...this.UserDatabase.users.filter((user) => user.id !== Number(params.id))
    ]

    response.body = this.UserDatabase.getUsers()
    response.Status = 200
  }

  responseValidate(response: any, result: any) :void{
    if (result) {
      response.status = 200;
      response.body = result;
    } else {
      response.status = 404;
      response.body = { message: "result not found." };
    }
  }

}

export { userController };
