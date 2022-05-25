export interface Patron {
  "@id"?: string;
  title: string;
  free: boolean;
  color: string;
  stitch: string;
  sizeNeedle: number;
  level: string;
  price: number;
  category: string;
  picture: string;
  picture1: string;
  picture2?: string;
  description: string;
  slug: string;
}
