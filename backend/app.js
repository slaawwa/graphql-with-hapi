
import Hapi from 'hapi'

import GraphQL from 'hapi-graphql-2';

// console.log(typeof GraphQL.register)
// console.log(Object.keys(GraphQL))
// process.exit();


import {GraphQLSchema} from 'graphql';

import routes from './routes'

const TestSchema = new GraphQLSchema({
	//
})

const cnf = {
	port: 8029,
},

registers = [{
	plugin: GraphQL,
	options: {
		query: (req) => {
			console.log('req::graphql:', req)
			return {
				schema: TestSchema,
			}
		},
		route: {
			path: '/api/graphql',
			// type: '*',
			config: {},
			// context: {},
			// route: {
			// 	path: '/api/graphql',
			// 	type: '*',
			// 	config: {},
			// },
		},
	},
		// route: {
		// 	path: '/api/graphql',
		// 	type: '*',
		// 	config: {},
		// },
}]//,

// routes = server => {
// 	return [
// 		// TODO: Add routes
// 	]
// }


export default runServer

async function runServer() {

    const server = Hapi.server({
        host: '0.0.0.0',
        port: cnf.port,
    })

    await server.register(registers)

    // await setStrategies(server)

    server.route( routes(server) )

    // server.ext('onPreResponse', function (req, reply) {
    //     if (cnf.isDev) {
    //         if (!req.url.path.startsWith('/swaggerui/')) {
    //             console.log(` - REQ: [${req.method}] ${req.url.path}`)
    //         }
    //     }

    //     if (req.response.isBoom && req.response.output.statusCode === 401 && req.method === 'get' && (
    //         req.path.indexOf('/dev') === 0 || req.path.indexOf('/admin') === 0)) {
    //         return reply.redirect('/admin/login?next='+req.path)
    //     }

    //     const isDebug = req.headers.cookie && req.headers.cookie.indexOf('_debug=1') !== -1
    //     const isAjax = req.headers['x-requested-with'] === 'XMLHttpRequest'

    //     // console.log(' -> isDebug:', isDebug)
    //     // console.log(' -> isAjax:', isAjax)

    //     return errorsPage(req, reply, server, isDebug, isAjax)
    // })

    await server.start()

    // db.setSchemas(server)

    console.log('Server running at:', server.info.uri)
}


// NOTE: If this code run as CLI
if (!module.parent) {

    process.on('unhandledRejection', (err) => {
        console.log('')
        console.log('--- Error:unhandledRejection ---')
        console.log('')
        console.log(err)
        process.exit(1)
    })

    runServer()
}
