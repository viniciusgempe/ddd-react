import { HttpClientSpi } from "@/data/test/mock-http-client";
import { RemoteAuthentication } from "./remote-authentication";
import faker from "faker";
import { mockAuthentication } from "@/domain/test/mock-authentication";
import { InvalidCredentialsError } from "@/domain/erros/InvalidCredentialsError";
import { UnexpectError } from "@/domain/erros/UnexpectError";
import { HttpResponseStatus } from "@/data/protocols/http/http-response";
interface SutTypes {
  sut: RemoteAuthentication;
  httpClientSpi: HttpClientSpi;
}

const makeType = (url: string = faker.internet.url()): SutTypes => {
  const httpClientSpi = new HttpClientSpi();
  const sut = new RemoteAuthentication(url, httpClientSpi);

  return {
    sut,
    httpClientSpi,
  };
};

describe("RemoteAuthentication", () => {
  test("Should call HttpCLient with correct URL", async () => {
    const url = faker.internet.url();
    const { httpClientSpi, sut } = makeType(url);
    await sut.auth(mockAuthentication());
    expect(httpClientSpi.url).toBe(url);
  });

  test("Should call correct body", async () => {
    const { httpClientSpi, sut } = makeType();
    const authenticationParams = mockAuthentication();
    await sut.auth(authenticationParams);
    expect(httpClientSpi.body).toBe(authenticationParams);
  });
  test("Should throw InvalidCredentialsError 401", async () => {
    const { httpClientSpi, sut } = makeType();
    httpClientSpi.response = {
      statusCode: HttpResponseStatus.unauthorized
    }
    const promisse = sut.auth(mockAuthentication());
    await expect(promisse).rejects.toThrow(new InvalidCredentialsError());
  });
  test("Should throw UnexpectError 400", async () => {
    const { httpClientSpi, sut } = makeType();
    httpClientSpi.response = {
      statusCode: HttpResponseStatus.unexpect
    }
    const promisse = sut.auth(mockAuthentication());
    await expect(promisse).rejects.toThrow(new UnexpectError());
  });
  test("Should throw InternalError 500", async () => {
    const { httpClientSpi, sut } = makeType();
    httpClientSpi.response = {
      statusCode: HttpResponseStatus.unexpect
    }
    const promisse = sut.auth(mockAuthentication());
    await expect(promisse).rejects.toThrow(new UnexpectError());
  });
  test("Should throw UnexpectError 404", async () => {
    const { httpClientSpi, sut } = makeType();
    httpClientSpi.response = {
      statusCode: HttpResponseStatus.notFound
    }
    const promisse = sut.auth(mockAuthentication());
    await expect(promisse).rejects.toThrow(new UnexpectError());
  });
});
