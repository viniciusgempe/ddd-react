import {
  HttpPostClient,
  HttpPostParams,
} from "@/data/protocols/http/http-post-client";
import {
  HttpResponse,
  HttpResponseStatus,
} from "@/data/protocols/http/http-response";

export class HttpClientSpi<T, R> implements HttpPostClient<T, R> {
  url?: string;
  body?: T;
  response: HttpResponse<R> = {
    statusCode: HttpResponseStatus.ok,
  };

  async post(params: HttpPostParams<T>): Promise<HttpResponse<R>> {
    this.url = params.url;
    this.body = params.body;
    return Promise.resolve(this.response);
  }
}
