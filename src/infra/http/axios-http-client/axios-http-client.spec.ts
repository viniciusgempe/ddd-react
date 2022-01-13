import { AxiosHttpClient } from "./axios-http-client";
import { mockAxios } from "@/infra/test";
import axios from "axios";
import { mockPostRequest } from "@/data/test";

jest.mock("axios");

interface SutTypes {
  sut: AxiosHttpClient;
  mockedAxios: jest.Mocked<typeof axios>;
}

const makeSut = (): SutTypes => {
  const sut = new AxiosHttpClient();
  const mockedAxios = mockAxios();
  return {
    mockedAxios,
    sut,
  };
};

describe("AxiosHttpClient", () => {
  test("Should axios correct url", async () => {
    const request = mockPostRequest();
    const { sut, mockedAxios } = makeSut();

    await sut.post(request);

    expect(mockedAxios.post).toHaveBeenCalledWith(request.url, request.body);
  });

  test("Should axios return the correct status code", () => {
    const { sut, mockedAxios } = makeSut();

    const promisse = sut.post(mockPostRequest());

    expect(promisse).toEqual(mockedAxios.post.mock.results[0].value);
  });
});
