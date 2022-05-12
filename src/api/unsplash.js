import axios from 'axios'

export default axios.create({
	baseURL: 'https://api.unsplash.com',
	headers: {
		Authorization: 'Client-ID kFKU3Z7sI0-nyGXpmTrJdk_zYg38N7LrWx2SbZZFQEY'
	}
})
