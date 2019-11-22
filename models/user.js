var Sequelize = require('sequelize')


module.exports = function(sequelize) {

	var User = sequelize.define('user', {
		id: {
			type: Sequelize.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},
		name: {
			type: Sequelize.STRING
		},
		email: {
			type: Sequelize.STRING
		},
		password: {
			type: Sequelize.TEXT
		},
	}, {
		timestamps: true,
	})

	return Contactus

}
