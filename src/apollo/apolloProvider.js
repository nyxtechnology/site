import Vue from 'vue'
import VueApollo from 'vue-apollo'

import { InMemoryCache } from 'apollo-cache-inmemory'
import { ApolloClient } from 'apollo-client'
import { createHttpLink } from 'apollo-link-http'

import defaultOptions from './defaultOptions'

Vue.use(VueApollo)

const link = createHttpLink({
  uri: process.env.VUE_APP_GRAPHQL_HTTP
})

const cache = new InMemoryCache()
const apolloClient = new ApolloClient({ link, cache })

const apolloProvider = new VueApollo({
  defaultClient: apolloClient,
  defaultOptions
})

export default apolloProvider
