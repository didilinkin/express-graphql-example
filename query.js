const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLInt,
} = require('graphql')
const find = require('lodash/find')

// DATA
const { movies, directors } = require('./data')

// TYPE
const { movieType, directorType } = require('./types')

//Define the Query
const queryType = new GraphQLObjectType({
    name: 'Query',
    fields: { // 指定 各种端点
        hello: {
            type: GraphQLString,
            resolve: function () {
                return "Hello World";
            }
        },

        hola: {
            type: GraphQLString,
            resolve: () => 'Hola!',
        },

        movie: {
            type: movieType,
            args: {
                id: { type: GraphQLInt }
            },
            resolve: (source, args) => find(
                movies, {
                    id: args.id,
                }
            )
        },

        director: {
            type: directorType,
            args: {
                id: { type: GraphQLInt }
            },
            resolve: function (source, args) {
                return find(directors, { id: args.id });
            }
        }
    }
});

exports.queryType = queryType;