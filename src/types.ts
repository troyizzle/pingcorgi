export interface EventFields {
  [key: string]: string | number;
}

export interface CreateEventParams {
  category: string;
  fields: EventFields;
}

export interface PingCorgiSDKOptions {
  apiKey: string;
}
