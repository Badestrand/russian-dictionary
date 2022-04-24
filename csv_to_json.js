var fs = require('fs');
var process = require('process');

if (process.argv[2] === undefined) {
	console.log('Error: set first argument to file.csv');
	process.exit(1);
}

console.log('read file ' + process.argv[2]);

var csv = fs.readFileSync(process.argv[2]);

var lines = csv.toString('utf8').split('\n');

var en_to_russian = {};
var russian_to_en = {};

var c = 1;
while (c < lines.length) {

	// bare	accented	translations_en	translations_de
	var tabs = lines[c].split('\t');

	if (tabs.length < 4) {
		// skip
		c++;
		continue;
	}

	var bare = tabs[0];
	var accented = tabs[1];
	var en = tabs[2];
	var de = tabs[3];

	if (en === '') {
		// skip
		c++;
		continue;
	}

	// en and de are seperated by
	// space slash space
	// comma space
	// semicolon space
	// period space
	var ens = en.split(/ \/ |, |; |\. /);

	//console.log(bare, en, ens);

	// created en<>russian translation json
	en_to_russian[ens[0]] = bare;
	russian_to_en[bare] = ens[0];

	c++;
}

fs.writeFileSync(process.argv[2] + '-en_to_russian.json', JSON.stringify(en_to_russian));
fs.writeFileSync(process.argv[2] + '-russian_to_en.json', JSON.stringify(russian_to_en));
