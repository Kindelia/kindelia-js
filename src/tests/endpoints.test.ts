import * as kindelia from "../endpoints";
import * as T from "../types";

const nodeURL = "https://node-sfo3.testnet.kindelia.org";

let blockHashHex: T.HashHex;

describe("should check functions", () => {
  test("should check if the function getStats has been defined", () =>
    expect(kindelia.getStats).toBeDefined());

  test("should check if the function getBlocks has been defined", () =>
    expect(kindelia.getBlocks).toBeDefined());

  test("should check if the function getBlock has been defined", () =>
    expect(kindelia.getBlock).toBeDefined());

  test("should check if the function getFunctions has been defined", () =>
    expect(kindelia.getFunctions).toBeDefined());

  test("should check if the function getFunction has been defined", () =>
    expect(kindelia.getFunction).toBeDefined());

  test("should check if the function getFunctionState has been defined", () =>
    expect(kindelia.getFunctionState).toBeDefined());

  test("should check if the function sendInteract has been defined", () =>
    expect(kindelia.sendInteract).toBeDefined());
});

describe("/blocks", () => {
  test("should run the function getBlocks and return the data", async () => {
    const response = await kindelia.getBlocks({ nodeURL });

    blockHashHex = response.data[0].hash;

    expect(response.data).toBeDefined();
  });
});

describe("/block", () => {
  test("should run the function getBlock and return the data", async () => {
    const response = await kindelia.getBlock({ nodeURL, blockHashHex });

    expect(response.data).toBeDefined();
  });

  test("should run the function getBlock and return 'AxiosError: Request failed with status code 400'", async () => {
    try {
      await kindelia.getBlock({
        nodeURL,
        blockHashHex: "0x0" as T.HashHex,
      });
    } catch (error) {
      expect(error).toBe("AxiosError: Request failed with status code 400");
    }
  });
});
