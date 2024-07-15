export type ProductType = {
  id: number;
  image: string;
  name: string;
  price: number;
  material: string;
  badge: "NEW" | "EVENT" | "NONE";
  details: { image: string; description: string }[];
};
