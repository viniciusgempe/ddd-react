import { HttpClientSpi } from "../../../data/test/mock-http-client";
import { RemoteAuthentication } from "./remote-authentication";
import faker from "faker";
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
    await sut.auth();
    expect(httpClientSpi.url).toBe(url);
  });
});
