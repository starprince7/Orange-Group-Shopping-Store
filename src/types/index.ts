export type Product = {
  id: string;
  title: string;
  image: string;
  price: string;
  rating: string;
  category: string;
  description: string;
};

export interface IProductStore {
  products: Product[] | null;
  error: string;
  authRequestStatus: "idle" | "loading" | "succeeded" | "failed";
}
