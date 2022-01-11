import { HttpPostClient } from "../../protocols/http/http-post-client";
import { RemoteAuthentication } from "./remote-authentication";


describe("RemoteAuthentication", () => {
  test("Should call HttpCLient with correct URL", async () => {
    class HttpClientSpi implements HttpPostClient {
      url?: string;
      async post(url: string): Promise<void> {
        this.url = url;

        return Promise.resolve();
      }
    }
    const url = "any_url";
    const httpClient = new HttpClientSpi();
    const sut = new RemoteAuthentication(url, httpClient);
    await sut.auth();
    expect(httpClient.url).toBe(url);
  });
});
