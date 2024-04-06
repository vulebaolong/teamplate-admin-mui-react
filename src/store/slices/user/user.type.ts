export type TInfomation = {
  id: number | null;
  email: string | null;
  address: string | null;
  token: string | null;
  name: any | null;
  refcode: string | null;
  status: number | null;
  ref: any | null;
  created_at: string | null;
  updated_at: string | null;
};

export type TUserInitialState = {
  information: TInfomation;
};
