export async function fetchPosts(postsPerPage = 3, categoryFilter?: { id?: number; slug?: string }) {
    const query = `
      query GetPosts($first: Int!, $categoryId: Int, $categorySlug: String) {
        posts(
          first: $first, 
          where: { 
            categoryId: $categoryId,
            categoryName: $categorySlug
          }
        ) {
          nodes {
            id
            title
            excerpt
            slug
            date
            featuredImage {
              node {
                sourceUrl
                altText
              }
            }
            categories {
              nodes {
                name
                slug
              }
            }
          }
        }
      }
    `
  
    try {
      const response = await fetch("https://wemotif.com/api/graphql", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          query,
          variables: {
            first: postsPerPage,
            categoryId: categoryFilter?.id || null,
            categorySlug: categoryFilter?.slug || null,
          },
        }),
        next: { revalidate: 3600 }, // Revalidate every hour
      })
  
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`)
      }
  
      const { data } = await response.json()
      return data.posts.nodes
    } catch (error) {
      console.error("Error fetching posts:", error)
      throw error
    }
  }
  
  