import { IData } from "./TablePosts.interfaces";

export interface IModal {
  open: boolean;
  onClose: () => void;
  action: string;
  setPosts?: (posts: IData[]) => void;
  posts: IData[];
  indexPost?: number;
}

export interface IFields {
  "User's name": string;
  Title: string;
  Body: string;
}
