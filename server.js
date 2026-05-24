const express = require('express');
const path    = require('path');
const app     = express();

// ── Basic password gate ───────────────────────────────────────────────────────
// Set PASSWORD env var in Railway → Variables tab
// Falls back to 'changeme' if not set (change it!)
const PASSWORD = process.env.PASSWORD || 'changeme';

app.use((req, res, next) => {
  const auth = req.headers.authorization;
  if (auth) {
    const [type, encoded] = auth.split(' ');
    if (type === 'Basic') {
      const [, pass] = Buffer.from(encoded, 'base64').toString().split(':');
      if (pass === PASSWORD) return next();
    }
  }
  res.set('WWW-Authenticate', 'Basic realm="GMX Tracker"');
  res.status(401).send('Unauthorized');
});

app.use(express.static(path.join(__dirname, 'public')));
app.get('*', (_, res) => res.sendFile(path.join(__dirname, 'public', 'index.html')));

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`GMX tracker running on port ${port}`));
