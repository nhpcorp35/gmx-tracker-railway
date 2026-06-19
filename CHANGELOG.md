## 2026-06-19

### gmx-tracker (gmxtracker.com)

**Features**
- Added **Realized Partial Closes** table below TP/SL orders — shows each individual `PositionDecrease` event with date, market, LONG/SHORT, size closed, realized PnL (green/red), and Arbiscan tx link
- Extended `parsePositionDecrease` to extract market address, sizeDeltaUsd, isLong, basePnlUsd from EventLogData (previously only summed basePnlUsd)
- Block timestamps fetched per unique block number (batched) for human-readable dates
- Table hidden when no trades in scan window (~5 days)

---
