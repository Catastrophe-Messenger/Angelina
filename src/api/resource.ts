import {server} from "@/api/server";

export namespace NotificationArkLightsSearch {
  export const url = 'resource/notification/ark-lights/search';

  export interface Request {
    account?: string;
    account_remarks?: string;
    content?: string;
    device_remarks?: string;
    duration_ge?: number;
    duration_le?: number;
    fuzzy_str?: string;
    notification_type?: string;
    page?: number;
    page_size?: number;
    send_time_ge?: string;
    send_time_le?: string;
    server?: string;
  }

  export interface Response {
    total: number;
    items: Array<{
      content?: string;
      id: number;
      image_path?: string;
      notification_type: string;
      send_time: string;
    }>
  }

  export async function request(params: Request): Promise<Response> {
    try {
      let response = await server.get<Response>(url, {params});
      return response.data
    } catch (error) {
      throw error;
    }
  }
}
