export interface IMainForm {
  id: number;
  name: string;
  moreDetail: MoreDetail[] | null;
}

export class MainForm implements IMainForm {
  id: number | null = 0;
  name: string = '';
  moreDetail: MoreDetail[] | null = [];
}

export interface IMoreDetail {
  id: number;
  mainFormId: number | null;
  phoneNumber: number | null;
  address: Adress[] | null;
}

export class MoreDetail implements IMoreDetail {
  id: number | null = 0;
  mainFormId: number | null = 0;
  phoneNumber: number | null = 0;
  address: Adress[] | null = [];
}

export interface IAdress {
  id: number;
  moreDetailId: number | null;
  street: string | null;
  pincode: number | null;
}

export class Adress implements IAdress {
  id: number | null = 0;
  moreDetailId: number | null = 0;
  street: string | null = '';
  pincode: number | null = 0;
}
