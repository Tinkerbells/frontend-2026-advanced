const { exec } = require('child_process');
const fs = require('fs');

const filesToWatch = ['index.html', 'index.js', 'style.css'];

console.log('Watching for file changes...');

filesToWatch.forEach(file => {
  if (fs.existsSync(file)) {
    fs.watch(file, (eventType, filename) => {
      if (filename) {
        console.log(`[${new Date().toLocaleTimeString()}] ${filename} changed (${eventType})`);
      }
    });
  }
});

// Start server
const serverProcess = exec('node server.js', (error, stdout, stderr) => {
  if (error) {
    console.error(`Error: ${error.message}`);
    return;
  }
  if (stderr) {
    console.error(`stderr: ${stderr}`);
    return;
  }
  console.log(`stdout: ${stdout}`);
});

serverProcess.stdout.on('data', (data) => {
  console.log(data);
});

serverProcess.stderr.on('data', (data) => {
  console.error(data);
});

process.on('SIGINT', () => {
  console.log('\nStopping watcher and server...');
  serverProcess.kill();
  process.exit();
});
