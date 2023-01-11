
const exportFs = require('fs');
// const done = require('./bash.js');
// console.log("after doneFunc")

module.exports = (done) => {
    process.stdout.write('prompt > ');

// The stdin 'data' event fires after a user types in a line
process.stdin.on('data', (data) => {
    const cmd = data.toString().trim();
    if (cmd === "ls"){
    console.log("after if statement ls")
    exportFs.readdir('./', 'utf8', (err, files) => {
        if (err) {
          console.log("inside error")
          throw err;
        } else {
          console.log("inside else")
          // process.stdout.write(files.join('\n'));
          done(files.join('\n'))
        }
      });

    }
});
}
