
const exportFs = require('fs');

module.exports = () => {
    process.stdout.write('prompt > ');

// The stdin 'data' event fires after a user types in a line
process.stdin.on('data', (data) => {
    const cmdline = data.toString().trim();
    const cmd = cmdline.split(' ')[0];
    const fileName = cmdline.split(' ')[1];


    if (cmd === "cat"){
    exportFs.readFile(`./${fileName}`, 'utf8', (err, data) => {
        if (err) throw err;
        console.log(data);
      });
    }
});
}
