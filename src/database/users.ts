import { IUser } from "../model/user.ts";

class usersDatabase {

    users: IUser[] = new Array();

    constructor(){
      this.users = [
        {
          id: 1,
          name: 'Leandro',
          email: 'leandrovboas@teste.com',
          create_at: new Date('2020-07-10'),
          update_at: new Date('2020-07-10')
        },
        {
          id: 2,
          name: 'teste',
          email: 'leandrovboas@teste.com',
          create_at: new Date('2020-07-13'),
          update_at: new Date('2020-07-20')
        }
      ]
  }

  getUsers() : Array<IUser>{
    return this.users;
  }

  addUsers(user : IUser) : Array<IUser> {
    this.users.push(user)
    return this.users
  }

}

export { usersDatabase };
