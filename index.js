require('dotenv').config();
const express = require('express');
const app = express();
const fetch = require('https').get;
const api_key = process.env.API_KEY;
const PORT = process.env.PORT;

app.get('/account/puuid/:puuid', (req, res) => {
    fetch(
        `https://asia.api.riotgames.com/riot/account/v1/accounts/by-puuid/${req.params.puuid}?api_key=${api_key}`,
        (r) => {
            let data = "";
            r.on("data", (chunk) => data += chunk);
            r.on("end", () => res.status(r.statusCode).json(JSON.parse(data))); 
        }
    );
});

app.get('/account/gamename/:gamename/tagline/:tagline', (req, res) => {
    fetch(
        `https://asia.api.riotgames.com/riot/account/v1/accounts/by-riot-id/${req.params.gamename}/${req.params.tagline}?api_key=${api_key}`,
        (r) => {
            let data = "";
            r.on("data", (chunk) => data += chunk);
            r.on("end", () => res.status(r.statusCode).json(JSON.parse(data))); 
        }
    );
});

app.get('/activeshard/puuid/:puuid', (req, res) => {
    fetch(
        `https://asia.api.riotgames.com/riot/account/v1/active-shards/by-game/val/by-puuid/${req.params.puuid}?api_key=${api_key}`,
        (r) => {
            let data = "";
            r.on("data", (chunk) => data += chunk);
            r.on("end", () => res.status(r.statusCode).json(JSON.parse(data))); 
        }
    );
});

app.get('/content/region/:region/locale/:locale', (req, res) => {
    fetch(
        `https://${req.params.region}.api.riotgames.com/val/content/v1/contents?locale=${req.params.locale}&api_key=${api_key}`,
        (r) => {
            let data = "";
            r.on("data", (chunk) => data += chunk);
            r.on("end", () => res.status(r.statusCode).json(JSON.parse(data))); 
        }
    );
});

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`);
});