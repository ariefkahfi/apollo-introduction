const {gql} = require('apollo-server')


module.exports  = gql(`
    type Car {
        carId: String!
        name: String!
        speed: Int!
        carOwner: Owner!
    }

    type Owner {
        carId: String!
        ownerName: String!
        address: String!
    }

    input OwnerInput {
        carId: String!
        ownerName: String!
        address: String!
    }

    type Query {
        allCar: [Car]
    }

    input CarInput {
        carId: String!
        name: String!
        speed: Int!
        carOwner: OwnerInput!
    }

    type Mutation {
        addCar(carInput: CarInput!): Car
    }
`)