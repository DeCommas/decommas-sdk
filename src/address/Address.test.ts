import { Address } from "./Address";
import { IHttpRequest } from "../network/httpRequest";
import { mockResponse, mockResponseRaw } from "./mock";

test("Address: getTokens", async () => {
    const httpRequestMock: IHttpRequest = {
        fetch: jest.fn().mockReturnValue(mockResponseRaw)
    };

    const address = new Address(httpRequestMock);

    expect(await address.getTokens({ address: "0x9648652A24E513434AEA6B38fF1E4eeB32367699", verified: true })).toStrictEqual(mockResponse);
});
