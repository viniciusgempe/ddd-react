import { HttpPostClient, HttpPostParams } from "@/data/protocols/http/http-post-client";
import { HttpResponse, HttpResponseStatus } from "@/data/protocols/http/http-response";

export class HttpClientSpi implements HttpPostClient {
  url?: string;
  body?: Object;
  response: HttpResponse = {
    statusCode : HttpResponseStatus.ok,
  }
  async post(params: HttpPostParams): Promise<HttpResponse> {
    this.url = params.url;
    this.body = params.body;
    return Promise.resolve(this.response);
  }
}
