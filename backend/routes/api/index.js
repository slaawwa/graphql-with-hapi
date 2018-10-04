
import todos from './todos'

export default server =>  {
	return [{
		method: '*',
		path: '/api',
		config: {
			auth: false,
		},
		handler: (req, reply) => {
			return {
				success: true,
				data: todos,
			}
		}
	}]
}
