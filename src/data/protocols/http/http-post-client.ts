import { HttpResponse } from "./http-response";

export interface HttpPostParams {
  url: string;
  body?: Object;
}

export interface HttpPostClient {
  post(params: HttpPostParams): Promise<HttpResponse>;
}
