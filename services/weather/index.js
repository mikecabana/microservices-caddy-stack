const express = require('express');
const app = express();
const port = parseInt(process.env.PORT, 10);

app.get('/', (req, res) => {
	const date = new Date();
	res.status(200).json({
		weather: {
			temperature: 28,
			humidity: 'high',
			description: 'it will be a scorcher',
		},
	});
});

app.listen(port, () => console.log(`Listening on port ${port}`));
