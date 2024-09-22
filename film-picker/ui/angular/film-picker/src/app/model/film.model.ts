export interface Film {
  id: number;
  title: string;
  director: string;
  releaseYear: number;
  genre: string[];
  duration?: number;
  rating?: number;
  synopsis?: string;
  trailerId?: string;
  imdbUrl?: string;
  rottenTomatoesUrl?: string;
  cast: {
    actor: string;
    role: string;
  }[];
}
