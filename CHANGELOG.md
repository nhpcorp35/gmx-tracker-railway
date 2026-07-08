## 2026-06-19

### gmx-tracker (gmxtracker.com)

**Features**
- Added **Realized Partial Closes** table below TP/SL orders — shows each individual `PositionDecrease` event with date, market, LONG/SHORT, size closed, realized PnL (green/red), and Arbiscan tx link
- Extended `parsePositionDecrease` to extract market address, sizeDeltaUsd, isLong, basePnlUsd from EventLogData (previously only summed basePnlUsd)
- Block timestamps fetched per unique block number (batched) for human-readable dates
- Table hidden when no trades in scan window (~5 days)

---


## 2026-07-08

### gmx-tracker (gmxtracker.com)

**Avg entry price**
- Added `parsePositionIncrease()` — extracts executionPrice, sizeDeltaUsd, isLong, market from EventLog1
- Added `fetchAvgEntry()` — scans PositionIncrease events, groups by market+direction, computes volume-weighted avg entry
- Shows "avg $X (Nx)" below entry price in positions table when position has been added to more than once

**Realized PnL date range selector**
- Dropdown in Realized PnL card: 1d / 5d / 7d / 30d / 90d / All time
- Selecting a range re-fetches only realized PnL (no full reload) — shows "…" while loading
- Scan block ranges map to Arbitrum block counts (~400k/block per day)


### 2026-07-08 (continued)

- Fixed: range dropdown now updates instantly using cached RPC provider
- Fixed: null-safe label update in setRpnlRange
- Fixed: renderRealizedPnl no longer overwrites the range label span
