import { IBanner, IBannerListResponse } from "../../types/banner";
import { BANNER_END_POINT } from "./api-endpoints";
import axiosClient from "./axiosClient";

export const getAllBanners = (): Promise<IBannerListResponse<IBanner>> => {
  return axiosClient.get(`${BANNER_END_POINT}`);
};
