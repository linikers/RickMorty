export interface iPersona {
  id: number;
  name: string;
  status?: string;
  species?: string;
  type: string | null;
  gender?: string;
  image?: string;

  origin?: {
    name?: string;
    url?: string;
  };
  location?: {
    name?: string;
    url?: string;
  };
}
