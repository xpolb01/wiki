var Sequelize = require('sequelize');
var db = new Sequelize('postgres://localhost:5432/wikistack', {
    logging: false
});

var Page = db.define('page', {
    title: {
        type: Sequelize.STRING, allowNull: false,
    },
    urlTitle: {
        type: Sequelize.STRING, allowNull: false
    },
    content: {
        type: Sequelize.TEXT, allowNull: false
    },
    status: {
        type: Sequelize.ENUM('open', 'closed')
    },
    date: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW
    },

    route:{
    	get      : function()  {
      var urlTitle = this.getDataValue('urlTitle');
      // 'this' allows you to access attributes of the instance
      return this.getDataValue('/wiki/') + ' (' + title + ')';
    	}
    }
    


});

var User = db.define('user', {
    name: {
        type: Sequelize.STRING, allowNull: false
    },
    email: {
        type: Sequelize.STRING, allowNull: false, isEmail: true
    }
});

module.exports = {
  Page: Page,
  User: User
};	