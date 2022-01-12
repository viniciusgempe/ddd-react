import { HttpClientSpi } from "../../../data/test/mock-http-client";
import { RemoteAuthentication } from "./remote-authentication";
import faker from "faker";
import { mockAuthentication } from "../../../domain/test/mock-authentication";
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
});
