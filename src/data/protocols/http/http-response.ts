export enum HttpResponseStatus {
    unauthorized = 401,
    noContent = 204,
}

export interface HttpResponse {
    statusCode: HttpResponseStatus;
    body?: Object;
}