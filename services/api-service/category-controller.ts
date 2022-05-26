import {
  ICategory,
  ICategoryListResponse,
  ICategoryResponse,
} from "../../types/category";
import { IMerchant } from "../../types/merchant";
import { CATEGORY_END_POINT } from "./api-endpoints";
import axiosClient from "./axiosClient";

export const getAllCategoriesAndMerchants = (): Promise<
  ICategoryListResponse<ICategory<IMerchant>>
> => {
  return axiosClient.get(`${CATEGORY_END_POINT}/get-following-merchants`);
};

export const getAllMerchantsByCategory = (
  categoryId
): Promise<ICategoryResponse<IMerchant>> => {
  return axiosClient.get(
    `${CATEGORY_END_POINT}/get-following-merchants/${categoryId}`
  );
};
