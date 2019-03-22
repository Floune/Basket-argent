let $ = require('jquery');
let Datastore = require('nedb');
let equipe = new Datastore({ filename: 'db/equipe.db', autoload: true });
let team = localStorage.getItem('equipe');

let i = 0;
$("#stats").empty();
equipe.find({equipeName: team}, function(err, docs) {
	for (let key in docs[0]) {
		$("#stats").append("<li>" + key + ": " +docs[0][key] + "</li>");
	}
})