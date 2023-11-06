import products from "./data/products.json";
import FilterableProductTable from "./components/FilterableProductTable";

export default function App() {
  return <FilterableProductTable products={products} />;
}
