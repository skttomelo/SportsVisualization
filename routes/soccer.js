const router = require("express").Router();
const fetch = require("node-fetch");

router.get("/score", async (req, res) => {
  try {
    const response = await fetch(
      `https://allsportsapi.com/api/football/?met=Fixtures&APIkey=${process.env.API_KEY}&from=2019-08-23&to=2019-09-23`
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

//gets team json data with team key
router.get("/team/:teamkey", async (req,res) => {
  const { teamkey } = req.params;
  try{
    const response = await fetch(
      `https://allsportsapi.com/api/football/?&met=Teams&teamId=${teamkey}&APIkey=${process.env.API_KEY}`
    );
    const data = await response.json();

    res.json(data);
  } catch(err){
    console.log(err);
    console.log(teamkey);
    res.status(500);
    res.json({ message: "Server Error" });
  }
});

module.exports = router;
