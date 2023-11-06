export interface ProductProps {
  category: string;
  price: string;
  stocked: boolean;
  name: string;
}

export type ProductTableProps = {
  products: ProductProps[];
  filterText: string;
  inStockOnly: boolean;
};

export type ProductsProps = { products: ProductProps[] };
export type SingleProductProps = { product: ProductProps };
