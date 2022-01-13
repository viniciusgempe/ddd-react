import { IAuthenticationParams } from "@/domain/usecases";
import { IAccountModel } from "../models/account-model";
import faker from "faker";

export const mockAuthentication = (): IAuthenticationParams => ({
  email: faker.internet.email(),
  password: faker.internet.password(),
});

export const mockAccountModel = (): IAccountModel => ({
  acessToken: faker.random.uuid(),
});
