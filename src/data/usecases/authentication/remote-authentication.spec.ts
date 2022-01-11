import { HttpClientSpi } from "../../../data/test/mock-http-client";;
import { RemoteAuthentication } from "./remote-authentication";


describe("RemoteAuthentication", () => {
  test("Should call HttpCLient with correct URL", async () => {
    const url = "any_url";
    const httpClient = new HttpClientSpi();
    const sut = new RemoteAuthentication(url, httpClient);
    await sut.auth();
    expect(httpClient.url).toBe(url);
  });
});
