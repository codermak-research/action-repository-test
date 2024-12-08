// dist/poc.js

console.log('This is a log message');
// Or run an echo command using Node's child process
const { exec } = require('child_process');
exec('echo "This is a message from the action forked!"', (err, stdout, stderr) => {
  if (err) {
    console.error(`Error executing echo: ${err}`);
    return;
  }
  console.log(stdout);
});
