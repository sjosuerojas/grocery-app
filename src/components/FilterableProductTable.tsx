import { useState } from "react";
import ProductTable from "@/components/Products";
import SearchBar from "@/components/SearchBar";
import type { ProductsProps } from "@/models/Products";
import { Flex, Grid, Box } from "@radix-ui/themes";

export default function FilterableProductTable({ products }: ProductsProps) {
  const [filterText, setFilterText] = useState<string>("");
  const [inStockOnly, setInStockOnly] = useState<boolean>(false);

  return (
    <Grid columns="1" gap="2">
      <Flex direction="column" justify="center" align="center">
        <Box>
          <SearchBar
            filterText={filterText}
            inStockOnly={inStockOnly}
            onFilterTextChange={setFilterText}
            onInStockOnlyChange={setInStockOnly}
          />
        </Box>
        <Box>
          <ProductTable
            products={products}
            filterText={filterText}
            inStockOnly={inStockOnly}
          />
        </Box>
      </Flex>
    </Grid>
  );
}
