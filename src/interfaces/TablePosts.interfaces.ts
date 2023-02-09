export interface IColumn {
  label: string;
  width: string;
}

export interface IData {
  user: string;
  title: string;
  body: string;
  actions?: JSX.Element;
}
