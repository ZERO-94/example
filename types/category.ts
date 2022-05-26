export interface ICategory<T> {
  id: number;
  name: string;
  merchants: T[];
}

export interface ICategoryListResponse<T> {
  code: number;
  message: string;
  data: T[];
}

export interface ICategoryResponse<T> {
  code: number;
  message: string;
  merchants: T[];
}
