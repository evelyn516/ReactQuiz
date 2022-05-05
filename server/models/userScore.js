const db = require("../db_config/config");

class userScore {
  constructor(data) {
    this.id = data.id;
    this.username = data.username;
    this.score = data.score;
    this.frequency = data.frequency;
  }

  static get all(){
    return new Promise(async (res,rej) => {
      try {
        const result = await db.query(`SELECT * FROM userScore ORDER BY score DESC limit 10`)
        const topScore = result.rows.map(a => new userScore(a));
        res(topScore);
      } catch {
        rej(`Error retrieving score`)
      }
    })
  }


  static newQuiz(data) {
    return new Promise(async (res, rej) => {
      try {
        let { username, score, frequency} = data;
        let result = await db.query(
          `INSERT INTO userScore (username, score, frequency) VALUES ($1, $2, $3) RETURNING *;`,
          [
            username,
            score,
            frequency,
          ]
        );
        let quiz = new userScore(result.rows[0]);
        res(quiz);
      } catch (err) {
        rej("Error logging score!");
      }
    });
  }

  static findByUsername(data) {
    return new Promise(async (res, rej) => {
        try {
            const { username } = data;
            let result = await db.query(`SELECT * FROM userScore WHERE username = $1 ORDER BY username DESC;`, [
                username,
            ]);
            let userScore = result.rows[0];
            res(userScore);
          } catch (err) {
            rej("Could not receive this user's scores");
          }
        });
  }

   updateScore(data) {
    return new Promise(async (res, rej) => {
        try {
            const { score, frequency } = data;
            console.log('Method called')
            const findUserDetail = await userScore.findByUsername(data)
            console.log(findUserDetail)
            const increaseFrequency = await db.query(`UPDATE userScore SET frequency = frequency+ $2 WHERE username =$1`,[findUserDetail, frequency]) 
            const increaseScore = await db.query(`UPDATE userScore SET score = score + $1 WHERE username = $2`, [score, findUserDetail])
            res('Quiz count increased')
        }
        catch(err){
            rej("Failed to update database")
        }
    })
  }
}

module.exports = userScore;
