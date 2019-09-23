const router = require("express").Router();
const fetch = require("node-fetch");

router.get("/score", async (req, res) => {
  try {
    const response = await fetch(
      `https://allsportsapi.com/api/football/?met=Livescore&APIkey=${process.env.API_KEY}`
      //https://allsportsapi.com/api/football/?met=&APIkey=!_your_account_APIkey_!
    );
    const data = await response.json();

    res.json(data);
  } catch (err) {
    console.log(err);
    res.status(500);
    res.json({ message: "Server Error" });
  }
});

router.get("/compare/:team1/:team2", async (req, res) => {
  const { team1, team2 } = req.params;
  try {
    const response = await fetch(
      `https://allsportsapi.com/api/football/?met=H2H&APIkey=${process.env.API_KEY}&firstTeamId=${team1}&secondTeamId=${team2}`
    );
    const data = await response.json();

    res.json(data);
  } catch (err) {
    console.log(err);
    res.status(500);
    res.json({ message: "Server Error" });
  }
});

module.exports = router;
