import type { ProductTableProps, SingleProductProps } from "@/models/Products";

function ProductRow({ product }: SingleProductProps) {
  console.log("ProductRow");
  const productUnaviable = (
    <span style={{ color: "red" }}> {product.name} </span>
  );

  const name = product.stocked ? product.name : productUnaviable;

  return (
    <tr>
      <td> {name} </td>
      <td> {product.price} </td>
    </tr>
  );
}

function ProductCategoryRow({ category }: { category: string }) {
  console.log("ProductCategoryRow");
  return (
    <tr>
      <th colSpan={2}> {category} </th>
    </tr>
  );
}

const ProductTable = ({
  products,
  filterText,
  inStockOnly,
}: ProductTableProps) => {
  const rows: JSX.Element[] = [];
  let lastCategory: string | null = null;

  products.forEach((product) => {
    if (product.name.toLowerCase().indexOf(filterText.toLowerCase()) === -1)
      return;
    if (inStockOnly && !product.stocked) return;

    if (product.category !== lastCategory) {
      rows.push(
        <ProductCategoryRow
          key={product.category}
          category={product.category}
        />
      );
    }

    rows.push(<ProductRow key={product.name} product={product} />);
    lastCategory = product.category;
  });

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
};

export default ProductTable;
