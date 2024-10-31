const posts = require('../public/data/post');
  
  
  const index = (req, res) => {
    res.json({
      conteggio: posts.length,
      lista: posts
    });
  };
  
  module.exports = { index };