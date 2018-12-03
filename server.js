const {ApolloServer} = require('apollo-server')
const typeDefs = require('./schema')
const resolvers = require('./resolvers')
const initData = [
    {
        carId:'C_001',
        name:'Car001',
        speed:12,
        carOwner:{
            carId:'C_001',
            ownerName:'Owner034',
            address:'Address 0431'
        }
    }
]


const apolloServer = new ApolloServer({
    typeDefs,
    resolvers,
    context:{
        data:initData
    }
})

apolloServer
    .listen(9696)
    .then(r=>{
        console.log('Server run',r.url , r.subscriptionsUrl)
    })
    .catch(e=>{
        console.error('Server error',e)
    })