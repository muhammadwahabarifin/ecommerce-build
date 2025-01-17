import { defineQuery } from "next-sanity";
import { sanityFetch } from "../live";

export const getAllCategories = async () => {
  const ALL_CATEGORIES_QUERY = defineQuery(`
        *[
            _type == "category"
        ] | order(name asc)
        `);

  try {
    // use sanityfetch to send
    const categories = await sanityFetch({
      query: ALL_CATEGORIES_QUERY,
    });

    // return the list
    return categories.data || [];
  } catch (error) {
    console.log("Error fetching all categories:", error);
    return [];
  }
};
