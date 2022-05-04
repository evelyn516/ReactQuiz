const UserScore = require('../models/userScore');


const getAllScore = async (req,res) => {
  try {
    const UserScore = await UserScore.all
    res.status(200).json(UserScore);
  } catch (err){
    res.status(500).json({msg: "Could not get scores"})
  }
}

const newQuiz = async (req,res) => {
  try {
   console.log('new quiz function called')
   const score = await UserScore.newQuiz(req.body);
   res.status(201).json(score);
  } catch (err) {
    res.status(500).json({ msg: "Quiz could not be created!" });
  };
};

const findByUsername = async (req,res) => {
  try {
    console.log('filter by username function called')
    const score = await UserScore.findByUsername(req.params);
    res.status(200).send(score);
   } catch (err) {
     res.status(500).json({ msg: "Quiz could not be found!" });
   };
 };

const updateScore = async (req,res) => {
  try {
    const score = await UserScore.updateScore(req.params.username);
    console.log(result)
    res.status(200).send(score);
   } catch (err) {
     res.status(500).json({ msg: "Quiz could not be updated!" });
   };
 };

 module.exports = {
  getAllScore,
  newQuiz,
  findByUsername,
  updateScore,
};
