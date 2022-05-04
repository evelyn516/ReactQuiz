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
        resolve(topScore);
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
            let userScore = result.rows;
            res(userScore);
          } catch (err) {
            rej("Could not receive this user's scores");
          }
        });
  }

  static updateScore(data) {
    return new Promise(async (res, rej) => {
        try {
            console.log('Method called')
            const findQuiz = await userScore.findByUsername(username)
            console.log(findQuiz)

            if(findQuiz.frequency === findQuiz.frequency){
                res('Cannot update')
            } else {
                const increaseFrequency = await db.query(`UPDATE userScore SET frequency = frequency+1 WHERE username =$1`,[username])
                const increaseScore = await db.query(`UPDATE userScore SET score = `)
                res('Quiz count increased')
            } 
        }
        catch(err){
            rej("Failed to update database")
        }
    })
  }
}

module.exports = userScore;
