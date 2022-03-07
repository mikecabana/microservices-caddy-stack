const express = require('express');
require('isomorphic-fetch');

const app = express();
const port = parseInt(process.env.PORT, 10);

app.get('/', (req, res) => {
	res.status(200).json({ status: 'running' });
});

app.get('/config', async (req, res) => {
	try {
		// todo: figure out how to have an api sit in-front of caddy admin api
		const caddyRes = await fetch('http://caddy:2019/config', { method: 'GET', headers: { 'Content-Type': 'application/json' } });
		const data = await caddyRes.json();
		return res.status(200).json(data);
	} catch (error) {
		console.log(JSON.stringify(error, null, 2));
		return res.status(500).json(error);
	}
});

app.listen(port, () => console.log(`Listening on port ${port}`));
