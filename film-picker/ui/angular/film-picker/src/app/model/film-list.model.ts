export interface List {
  id: number;
  title: string;
  imageName: string;
  films: {
    id: number;
  }[];
}
