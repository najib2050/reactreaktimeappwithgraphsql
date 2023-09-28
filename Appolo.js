
import {ApolloClient, HttpLink, InMemoryCache} from "@apollo/client";
 
const clienmtLink=new HttpLink({
    // uri specifies the URL of our GraphQL server
    url:"https://proper-iguana-40.hasura.app/v1/graphql",
    // url:import.meta.VIT_HASURA_URL N ,
    // cache is an instance of InMemoryCache, which Apollo Client uses to cache query results after fetching them.
    headr:{
       " x-hasura-admin-secret":'qnNq2zCC0SPbeuLQ1gjoyFyKM1lSPv3FtG3uS5HjLDm93u2fOH2fZNrGxVBNyzjR'
    }
})

export const client=new ApolloClient({
    link:clienmtLink,
    cache:new InMemoryCache()
})
