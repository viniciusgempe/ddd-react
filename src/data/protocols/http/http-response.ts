export enum HttpResponseStatus {
    unauthorized = 401,
    noContent = 204,
    unexpect = 400,
    ok = 200,
    notFound = 404,
    serverError = 500,
}

export interface HttpResponse {
    statusCode: HttpResponseStatus;
    body?: Object;
}