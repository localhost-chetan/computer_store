import Container from "@/components/Container";
import GridView from "@/components/ProductComps/ProductSection/GridView";

const SearchResultsPage = async ({ params }: { params: { query: string } }) => {
  const response = await fetch(
    `${process.env.BASE_URL}/api/search/${params.query}`,
  );

  const searchedProducts = await response.json().then();

  console.log(searchedProducts);

  return (
    <Container>
      <div className={`mb-10 mt-5`}>
        <h1 className={`mb-10 text-lg font-semibold`}>
          {`Search results for `}
          <span className={`font-extrabold text-green-700 dark:text-green-500`}>
            {`"${decodeURIComponent(params.query)}"`} (
            {searchedProducts?.length})
          </span>
        </h1>
        {searchedProducts === null ||
          !searchedProducts ||
          (searchedProducts?.length === 0 && (
            <div className={`border`}>No results found</div>
          ))}
        <GridView data={searchedProducts} />
      </div>
    </Container>
  );
};

export default SearchResultsPage;
