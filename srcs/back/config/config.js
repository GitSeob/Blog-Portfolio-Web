const dotenv = require('dotenv');

dotenv.config();

module.exports = {
	"development": {
		"username": "anjoy",
		"password": process.env.DB_PASSWORD,
		"database": "portfolio",
		"host": "127.0.0.1",
		"dialect": "mysql",
	  },
	  "test": {
		"username": "anjoy",
		"password": process.env.DB_PASSWORD,
		"database": "portfolio",
		"host": "127.0.0.1",
		"dialect": "mysql",
	  },
	  "production": {
		"username": "anjoy",
		"password": process.env.DB_PASSWORD,
		"database": "portfolio",
		"host": "127.0.0.1",
		"dialect": "mysql",
	  },
}
