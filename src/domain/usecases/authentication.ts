import { IAccountModel } from "@/domain/models/account-model";

export interface IAuthenticationParams {
  email: string;
  password: string;
}

export interface Authentication {
  auth(IAuthenticationParams): Promise<IAccountModel>;
}
