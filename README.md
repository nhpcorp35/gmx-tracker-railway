# GMX Position Tracker

Live GMX v2 position tracker. Reads directly from Arbitrum RPC — no subgraph required.

## Deploy to Railway

### Option A — GitHub (recommended)
1. Push this folder to a GitHub repo
2. Go to [railway.app](https://railway.app) → New Project → Deploy from GitHub
3. Select your repo → Railway auto-detects Node.js and deploys

### Option B — Railway CLI
```bash
npm install -g @railway/cli
railway login
railway init
railway up
```

## Run locally
```bash
npm install
npm start
# open http://localhost:3000
```
