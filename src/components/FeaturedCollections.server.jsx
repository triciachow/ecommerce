import { Link, Image, gql, useShopQuery, CacheLong } from "@shopify/hydrogen";

export default function FeaturedCollections() {
  const {
    data: { collections },
  } = useShopQuery({
    query: QUERY,
    cache: CacheLong(),
  });

  // console.log(collections);

  return (
    <section className="w-full gap-4 md:gap-8 grid p-6 md:p-8 lg:p-12">
      <div className="whitespace-pre-wrap max-w-prose font-bold text-lead">
        Collections
      </div>
      <div className="grid-flow-row grid gap-2 gap-y-6 md:gap-4 lg:gap-6 grid-cols-1 false  sm:grid-cols-3 false false">
        {collections.nodes.map(collection => {
          return (
            <Link key={collection.id} to={`/collections/${collection.handle}`}>
              <div className="grid gap-4">
                {collection?.image && (
                  <Image
                    className="rounded shadow-border overflow-clip inline-block aspect-[5/4] md:aspect-[3/2] object-cover"
                    width={"100%"}
                    height={336}
                    alt={`Image of ${collection.title}`}
                    data={collection.image}
                  />
                )}
                <div className="whitespace-pre-wrap max-w-prose font-medium text-copy">
                  {collection.title}
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}

const QUERY = gql`
  query FeaturedCollections {
    collections(first: 1) {
      nodes {
        id
        title
        handle
        image {
          altText
          width
          height
          url
        }
      }
    }
  }
`;

// const QUERY = gql`
//   query FeaturedCollections {
//     collections(first: 3, query: "collection_type:smart", sortKey: UPDATED_AT) {
//       nodes {
//         id
//         title
//         handle
//         image {
//           altText
//           width
//           height
//           url
//         }
//       }
//     }
//   }
// `;