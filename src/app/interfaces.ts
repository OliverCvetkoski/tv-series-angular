export interface Show {
  id: number;
  genres: [];
  image: { medium: string; original: string };
  externals: { imdb: string };
  language: string;
  name: string;
  premiered: string;
  rating: { average: number };
  runtime: number;
  status: string;
  ended: string;
  summary: string;
}
