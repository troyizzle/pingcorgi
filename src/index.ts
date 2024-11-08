import { CreateEventParams, PingCorgiSDKOptions } from "./types";

export class PingCorgi {
  private apiKey: string;
  private apiBase = "https://www.pingcorgi.com/api/v1";

  constructor(options: PingCorgiSDKOptions) {
    this.apiKey = options.apiKey;
    this.validateApiKey(this.apiKey);
  }

  public async createEvent(params: CreateEventParams): Promise<void> {
    const response = await fetch(`${this.apiBase}/events`, {
      method: "POST",
      headers: {
        'Authorization': `Bearer ${this.apiKey}`,
      },
      body: JSON.stringify(params),
    })

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message);
    }
  }

  private validateApiKey(apiKey: string): void {
    if (!apiKey || apiKey === "") {
      throw new Error("API key is required");
    }
  }
}
