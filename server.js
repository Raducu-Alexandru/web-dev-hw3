const express = require('express');
const bodyParser = require('body-parser');
const knex = require('knex')({
	client: 'YOUR_DATABASE_CLIENT', // Replace with your actual database client (e.g., 'pg' for PostgreSQL, 'mysql' for MySQL)
	connection: {
		host: 'YOUR_DATABASE_HOST',
		user: 'YOUR_DATABASE_USER',
		password: 'YOUR_DATABASE_PASSWORD',
		database: 'YOUR_DATABASE_NAME',
	},
});

const app = express();
const port = 3000;

app.use(bodyParser.json());

// CRUD operations for follows table
app.get('/follows', async (req, res) => {
	const follows = await knex('follows').select('*');
	res.json(follows);
});

app.post('/follows', async (req, res) => {
	const { following_user_id, followed_user_id, created_at } = req.body;
	await knex('follows').insert({ following_user_id, followed_user_id, created_at });
	res.json({ success: true });
});

app.put('/follows/:id', async (req, res) => {
	const { id } = req.params;
	const { following_user_id, followed_user_id, created_at } = req.body;
	await knex('follows').where({ id }).update({ following_user_id, followed_user_id, created_at });
	res.json({ success: true });
});

app.delete('/follows/:id', async (req, res) => {
	const { id } = req.params;
	await knex('follows').where({ id }).del();
	res.json({ success: true });
});

// CRUD operations for users table
app.get('/users', async (req, res) => {
	const users = await knex('users').select('*');
	res.json(users);
});

app.post('/users', async (req, res) => {
	const { username, role, created_at } = req.body;
	await knex('users').insert({ username, role, created_at });
	res.json({ success: true });
});

app.put('/users/:id', async (req, res) => {
	const { id } = req.params;
	const { username, role, created_at } = req.body;
	await knex('users').where({ id }).update({ username, role, created_at });
	res.json({ success: true });
});

app.delete('/users/:id', async (req, res) => {
	const { id } = req.params;
	await knex('users').where({ id }).del();
	res.json({ success: true });
});

// CRUD operations for posts table
app.get('/posts', async (req, res) => {
	const posts = await knex('posts').select('*');
	res.json(posts);
});

app.post('/posts', async (req, res) => {
	const { title, body, user_id, status, created_at } = req.body;
	await knex('posts').insert({ title, body, user_id, status, created_at });
	res.json({ success: true });
});

app.put('/posts/:id', async (req, res) => {
	const { id } = req.params;
	const { title, body, user_id, status, created_at } = req.body;
	await knex('posts').where({ id }).update({ title, body, user_id, status, created_at });
	res.json({ success: true });
});

app.delete('/posts/:id', async (req, res) => {
	const { id } = req.params;
	await knex('posts').where({ id }).del();
	res.json({ success: true });
});

app.listen(port, () => {
	console.log(`Server is running on port ${port}`);
});
