const express = require('express');

const app = express();

app.use(express.static(process.cwd()+"/WebApp/dist/WebApp/"));

const port = 3080;

app.get('/', (req, res) => {
  console.log(process.cwd())
  console.log('in the server')
  res.sendFile(process.cwd()+"/WebApp/dist/WebApp/index.html")
});

app.listen(port, (err) => {
  if (err) {
    logger.error('Error::', err);
  }
  console.log(`running v2 server on from port:::::::${port}`);
});