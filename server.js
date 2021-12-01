import express from 'express';
import session from 'express-session';
import cookieParser from 'cookie-parser';

const app = express();
const PORT = 5001;

app.use(cookieParser());
app.use(
	session({
		resave: true,
		saveUninitialized: true,
		secret: "secret"
	})
);

app.get("/login", (req, res) => {
	req.session.user = user;
	req.session.save();
	res.send("User logged in");
});

app.get("/user", (req, res) => {
	res.send(user);
});

app.get("/logout", (req, res) => {
	req.session.destroy();
	res.send("User logged out");
});

app.listen(PORT, (req, res) => {
	console.log(`API listening on port ${PORT}`);
});
