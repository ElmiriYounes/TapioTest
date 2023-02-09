import { IFields } from "./modal.interfaces";
import { IData } from "./TablePosts.interfaces";

export interface IPosts {
  posts?: IData[];
  setPosts?: (posts: IData[]) => void;
  handleClickOpen?: () => void;
  action?: string;
  setAction?: (action: string) => void;
  indexPost?: number;
  setIndexPost?: (i: number) => void;
}

export interface IDisplay {
  fields: IFields;
}

export interface IPostsPage {
  mode: string;
  setMode: (mode: string) => void;
}
