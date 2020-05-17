export interface TreeData<T = any, V = any> {
  title: string;
  items?: T[];
  content?: V;
}
