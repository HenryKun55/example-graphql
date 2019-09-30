const { GraphQLServer } = require('graphql-yoga')
const data = require('./data')

const typeDefs = `
    type Query {
        users (id: Int!): User,
    }

    type User {
        id: ID!,
        name: String,
        movies: [Movie],
        series: [Serie]
    }

    type Movie {
        id: ID!,
        name: String,
        year: Int,
        genre: String,
        duration: Float
    }

    type Serie {
        id: ID!,
        name: String,
        year: Int,
        genre: String,
        seasons: [Season]
    }

    type Season {
        id: ID!,
        number: Int,
        episodes: [Episode]
    }

    type Episode {
        id: ID!,
        number: Int,
        name: String,
        duration: Float
    }
`

const resolvers = {
    Query: {
        users(obj, args) {
            return data.users.find(user => user.id === args.id) 
        }
    },
    User: {
        movies(obj, args) {
            return data.movies.filter(movie => movie.idUser === obj.id)
        },
        series(obj, args) {
            return data.series.filter(serie => serie.idUser === obj.id)
        }
    },
    Serie: {
        seasons(obj, args){
            return data.seasons.filter(season => season.idSerie === obj.id)
        }
    },
    Season: {
        episodes(obj, args){
            return data.episodes.filter(episode => episode.idSeason === obj.id)
        }
    }
}

const server = new GraphQLServer({typeDefs, resolvers})

server.start()