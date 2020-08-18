export interface IUser {
  id?: number;
  firstName: string;
  gender: string;
  materialStatus: string;
  amountOfChildren: number;
  email: string;
  comment?: string;
  dateOfBirth: string;
}

export class User implements IUser {
  amountOfChildren: number;
  comment: string;
  dateOfBirth: string;
  email: string;
  firstName: string;
  gender: string;
  id: number;
  materialStatus: string;

  constructor(user: IUser) {
    this.id = new Date().getTime();
    this.firstName = user.firstName;
    this.gender = user.gender;
    this.materialStatus = user.materialStatus;
    this.amountOfChildren = user.amountOfChildren;
    this.email = user.email;
    this.comment = user.comment;
    this.dateOfBirth = new Date(user.dateOfBirth).toLocaleDateString();
  }
}
