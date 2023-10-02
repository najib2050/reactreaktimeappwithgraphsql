
import {ApolloClient,  InMemoryCache} from "@apollo/client";
 
// const clientLink=new HttpLink({
//     // uri specifies the URL of our GraphQL server
//     uri:"https://proper-iguana-40.hasura.app/v1/graphql",
//     //  uri :import.meta.env.VITE_HASURA_URL,
//     // cache is an instance of InMemoryCache, which Apollo Client uses to cache query results after fetching them.
//     headers:{
//     //   " x-hasura-admin-secret":import.meta.env.VITE_SECRET
//       " x-hasura-admin-secret":"qnNq2zCC0SPbeuLQ1gjoyFyKM1lSPv3FtG3uS5HjLDm93u2fOH2fZNrGxVBNyzjR",
//        Accept: "application/json",
//       "Content-Type": "application/json"
//     }
// })

export const client=new ApolloClient({
    // link:clientLink,
    uri:"https://proper-iguana-40.hasura.app/v1/graphql",
    /* OR 
            uri specifies the URL of our GraphQL server
    */
    // uri :import.meta.env.VITE_HASURA_URL,
    headers:{
      "x-hasura-admin-secret":"qnNq2zCC0SPbeuLQ1gjoyFyKM1lSPv3FtG3uS5HjLDm93u2fOH2fZNrGxVBNyzjR",
        /* OR */
        // " x-hasura-admin-secret":import.meta.env.VITE_SECRET
          },
          // cache is an instance of InMemoryCache, which Apollo Client uses to cache query results after fetching them.
    cache:new InMemoryCache()
})
