
const exportFs = require('fs');

module.exports = () => {
    process.stdout.write('prompt > ');

// The stdin 'data' event fires after a user types in a line
process.stdin.on('data', (data) => {
    const cmd = data.toString().trim();
    if (cmd === "ls"){
    exportFs.readdir('./', 'utf8', (err, files) => {
        if (err) {
          throw err;
        } else {
          process.stdout.write(files.join('\n'));
          process.stdout.write('prompt > ');
        }
      });

    }
});
}
