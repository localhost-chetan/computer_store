"use server";

const getProductData = async (productId?: string) => {
  try {
    const response = await fetch(`/api/all_products`);
    const data = await response.json();

    console.log(data);

    return data;
  } catch (error) {
    return { message: `Unable to get the product data` };
  }
};

export { getProductData };
