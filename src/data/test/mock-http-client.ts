import {
  HttpPostClient,
  HttpPostParams,
  HttpResponseStatus,
  HttpResponse,
} from "@/data/protocols/http";

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
