let $ = require('jquery');
let Datastore = require('nedb');  
let equipe = new Datastore({ filename: 'db/equipe.db', autoload: true });
const remote = require('electron').remote;

$('#match').on('click', function() {
	let name = $('#nom').val();
	localStorage.setItem('equipe', name);
	equipe.insert({
		equipeName: name,
		zoneAttaqueNon: 0,
		zoneAttaqueOui: 0,
		situationTirDefav: 0,
		situationTirFav: 0,
		panierNonMarque: 0,
		panierMarque: 0
	}, function(err, doc) {
		console.log('nouveau nom d\'équipe: ', doc.equipeName);
	});

});

$("#historique").on('click', function() {
	$("#histo").empty();
	equipe.find({}, function(err, docs) {
		for (let doc in docs) {
			for (let key in docs[doc]) {
				$("#histo").append("<li>" + key + ": " +docs[doc][key] + "</li>");
			}
			$("#histo").append("<br>");
		}
	})
})

document.getElementById("quitter").addEventListener("click", function (e) {
       var window = remote.getCurrentWindow();
       window.close();
}); 