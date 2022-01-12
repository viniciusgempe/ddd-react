import { IAuthenticationParams } from "../usecases/authentication";
import faker from "faker";

export const mockAuthentication = (): IAuthenticationParams => ({
    email: faker.internet.email(),
    password: faker.internet.password(),
});