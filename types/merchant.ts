export interface IMerchant {
  position: number;
  keyTracking: number;
  image: string;
  description: string;
  website: string;
  type: string;
  name: string;
}

export interface IMerchantListResponse {
  code: number;
  message: string;
  data: IMerchant[];
}
