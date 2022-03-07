const express = require('express');
const app = express();
const port = parseInt(process.env.PORT, 10);

app.get('/', (req, res) => {
	const date = new Date();

	let time = date.getMinutes();
	if (time < 10) {
		time = `0${time}`;
	}
	res.status(200).json({ time: `${date.getHours()}:${time}` });
});

app.listen(port, () => console.log(`Listening on port ${port}`));
