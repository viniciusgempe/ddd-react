import { HttpPostClient, HttpPostParams } from "@/data/protocols/http/http-post-client";

export class HttpClientSpi implements HttpPostClient {
  url?: string;
  body?: Object;
  async post(params: HttpPostParams): Promise<void> {
    this.url = params.url;
    this.body = params.body;
    return Promise.resolve();
  }
}
