import {Category} from "./category.model";

export interface Movie {
  id: number;
  title: string;
  mainStars?: string[];
  director?: string;
  lastWatched?: Date;
  categories:number[]; // todo: tbd the data structure for this
}
