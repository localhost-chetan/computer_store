const ProductCategory = ({
    
  params,
}: {
  params: { productCategory: string };
}) => {
  return <div>{params.productCategory} page</div>;
};

export default ProductCategory;
