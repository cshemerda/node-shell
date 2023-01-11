// Output a prompt
process.stdout.write('prompt > ');

// The stdin 'data' event fires after a user types in a line
process.stdin.on('data', (data) => {
  const cmd = data.toString().trim(); //remove the newline

  console.log("Hello!")
  process.stdout.write('You typed: ' + cmd);
  process.stdout.write('\nprompt > ');
});

const exportsFromPwd = require('./pwd.js');

exportsFromPwd();


const exportsFromLs = require('./ls.js');
exportsFromLs();

