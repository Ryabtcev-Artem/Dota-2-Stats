# 🎯 Dota 2 Stats

A web application that provides real-time statistics, winrates, and meta analysis for Dota 2 heroes.

🔗 **Live Demo**: [https://dota-2-stats-production.up.railway.app](https://dota-2-stats-production.up.railway.app)

---

## 📌 Features

- 🦸 Hero statistics and winrates
- 📊 Current meta trends
- ⚡ Fast and simple UI
- 🛡️ CORS proxy to avoid cross-origin issues
- 🚀 Hosted on Railway

---

## 🧠 Data Sources

This app uses public APIs to fetch up-to-date Dota 2 stats:

- [Dota2ProTracker](https://dota2protracker.com/)
- [OpenDota API](https://docs.opendota.com/)

---

## 🛠 Tech Stack

- Frontend: **Vite** + **JavaScript**
- Backend: **Express** + **Axios** + **CORS**
- Deployment: **Railway**

---

## 📦 Server Endpoint

You can fetch hero data from:

```bash
GET https://dota-2-stats-server-production.up.railway.app/api/heroes
