import fs from 'fs';

const fileNmeList = [
	"",
	""
]

for (const fileName of fileNmeList) {
	fs.writeFile(fileName + '.pug', '', function (err) {
		if (err) throw err;
	  });
	fs.writeFile(fileName + '.scss', '', function (err) {
		if (err) throw err;
	  });
  }