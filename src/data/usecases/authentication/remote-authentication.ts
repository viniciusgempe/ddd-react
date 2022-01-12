import { IAuthenticationParams } from "@/domain/usecases/authentication";
import { HttpPostClient } from "@/data/protocols/http/http-post-client";
import { HttpResponseStatus } from "@/data/protocols/http/http-response";
import { InvalidCredentialsError } from "@/domain/erros/InvalidCredentialsError";
import { UnexpectError } from "@/domain/erros/UnexpectError";

export class RemoteAuthentication {
  constructor(
    private readonly url: string,
    private readonly httpPostCLient: HttpPostClient
  ) {}

  async auth(params: IAuthenticationParams): Promise<void> {
    const response = await this.httpPostCLient.post({
      url: this.url,
      body: params,
    });
    switch (response.statusCode) {
      case HttpResponseStatus.ok:
        break;
      case HttpResponseStatus.unauthorized:
        throw new InvalidCredentialsError();
      default:
        throw new UnexpectError();
    }
  }
}
