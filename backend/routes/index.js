
import index from './indexCtrl'

import api from './api'

export default server => {

	// const ctrls = []

	// const r1 = [
	// 	{
	// 		method: '*',
	// 		path: '/api',
	// 		config: {
	// 			auth: false,
	// 		},
	// 		handler: (req, reply) => {
	// 			return {
	// 				success: true,
	// 			}
	// 		}
	// 	}
	// ]

	// ctrls.push(...r1)

	// return ctrls
	return [
		index(server),
		...api(server),
		// ...r1,
	]
} 
