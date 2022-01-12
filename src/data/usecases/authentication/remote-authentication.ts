import { HttpPostClient } from "../../protocols/http/http-post-client";

export class RemoteAuthentication {
  constructor(
    private readonly url: string,
    private readonly httpPostCLient: HttpPostClient
  ) {}

  async auth(): Promise<void> {
    await this.httpPostCLient.post({
      url: this.url,
    });
  }
}
