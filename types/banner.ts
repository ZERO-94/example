export interface IBanner {
  position: number;
  content: string;
  image: string;
  redirectUrl: string;
}

export interface IBannerListResponse<T> {
  code: number;
  message: string;
  banners: T[];
}
