import axios from 'axios';
export default function handler(req, res) {
	if (req.method === 'GET') {
		const weight = req.query.weight || 0;
		const height = req.query.height || 0;
		const options = {
			method: 'GET',
			url: 'https://body-mass-index-bmi-calculator.p.rapidapi.com/metric',
			params: {weight, height},
			headers: {
				'X-RapidAPI-Host':
					'body-mass-index-bmi-calculator.p.rapidapi.com',
                    'X-RapidAPI-Key': '1902e17025mshdc6190f8fb7d3a3p110f7ajsn542ad3eec913'
			}
		};
		axios
			.request(options)
			.then(function (response) {
				res.status(200).json(response.data);
			})
			.catch(function (error) {
				console.error(error);
			});
	} else {
		res.status(400);
	}
}