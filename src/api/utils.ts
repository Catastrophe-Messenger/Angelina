import axios from "axios";
import {AxiosError} from "axios";

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

interface rawApiError {
  type: string;
  msg: string;
  loc?: Array<string>;
}

export async function convertToApiError<T>(promise: Promise<T>): Promise<T> {
  try {
    return await promise;
  } catch (error) {
    if (!(error instanceof AxiosError)) {
      throw error;
    }
    console.log(error);
    if (error.response == undefined) {
      throw error;
    }
    let status = error.response.status;
    if (!(400 <= status && status < 500)) {
      throw error;
    }
    let data = <rawApiError>error.response.data;
    throw new ApiError(data.type, data.msg, data.loc);
  }
}