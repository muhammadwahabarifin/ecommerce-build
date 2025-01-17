import { defineQuery } from "next-sanity";
import { sanityFetch } from "../live";

export const getAllProducts = async () => {
  const ALL_PRODUCTS_QUERY = defineQuery(`
        *[
            _type == "product"
        ] | order(name asc)
        `);

  try {
    // use sanityfetch to send
    const products = await sanityFetch({
      query: ALL_PRODUCTS_QUERY,
    });

    // return the list
    return products.data || [];
  } catch (error) {
    console.log("Error fetching all products:", error);
    return [];
  }
};
