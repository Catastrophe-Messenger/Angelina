import axios from "axios";

export const server = axios.create({
  baseURL: "/api",
  timeout: 5000,
});


export class ApiError extends Error {
  public type: string;
  public loc?: Array<string>;

  public constructor(type: string, msg: string, loc?: Array<string>) {
    super(msg);
    this.type = type;
    this.loc = loc;
  }
}