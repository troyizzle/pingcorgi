import { PingCorgi } from "../index";

describe("PingCorgiSDK", () => {
  it("should throw an error with an invalid API key", async () => {
    const sdk = new PingCorgi({ apiKey: "INVALID_API_KEY" });
    await expect(
      sdk.createEvent({
        category: "bug",
        fields: {
          user_id: "12345",
          user_email: "test@example.com",
        },
      })
    ).rejects.toThrow("fetch failed");
  })
})
