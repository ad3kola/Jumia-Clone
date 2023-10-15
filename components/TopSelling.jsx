import TopSellingProduct from "./utils/TopSellingProduct";

const getProducts = async (num) => {
  const res = await fetch(
    `https://fakestoreapi.com/products?limit=${num}`
  );
  return res.json();
};

export default async function TopSelling() {
  const data = await getProducts(12);
  const productData = data;

  return (
    <div className="bg-white rounded-lg shadow-md w-full ">
      <div className="flex flex-col items-start gap-2 py-4 md:px-3 w-full mx-auto justify-center">
        <h1 className="text-lg sm:text-base ml-5 text-gray-900 font-semibold">
          Top Selling Items
        </h1>
        <div className="grid rounded-lg grid-cols-2 md:grid-cols-3 min-w-full lg:grid-cols-6 place-items-center gap-3 md:gap-5 p-2">
          {productData.map((product) => (
            <TopSellingProduct
              key={product.id}
              id={product.id}
              productTitle={product.title}
              productPrice={product.price}
              productCategory={product.category}
              productImage={product.image}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
