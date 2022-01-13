import {
  Authentication,
  IAuthenticationParams,
} from "@/domain/usecases";
import { HttpPostClient } from "@/data/protocols/http";
import { HttpResponseStatus } from "@/data/protocols/http";
import { InvalidCredentialsError, UnexpectError } from "@/domain/erros";
import { IAccountModel } from "@/domain/models";

export class RemoteAuthentication implements Authentication {
  constructor(
    private readonly url: string,
    private readonly httpPostCLient: HttpPostClient<
      IAuthenticationParams,
      IAccountModel
    >
  ) {}

  async auth(params: IAuthenticationParams): Promise<IAccountModel> {
    const response = await this.httpPostCLient.post({
      url: this.url,
      body: params,
    });
    switch (response.statusCode) {
      case HttpResponseStatus.ok:
        return response.body;
      case HttpResponseStatus.unauthorized:
        throw new InvalidCredentialsError();
      default:
        throw new UnexpectError();
    }
  }
}
