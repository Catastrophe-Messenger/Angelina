import {server} from "@/api/server";

export namespace Login {
  export const url = 'auth/login';

  export interface Request {
    username: string;
    password: string;
    time: number;
  }

  export async function request(params: Request) {
    await server.post<Response>(url, params);
  }
}