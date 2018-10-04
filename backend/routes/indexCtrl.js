
export default server => {

	return {
		method: 'GET',
		path: '/',
		handler: (req, reply) => {
			return 'Hello'
		},
	}
}
