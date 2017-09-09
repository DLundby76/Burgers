module.exports = (app, db)=>{
  app.get('/', (req, res)=>{
    db.burger.findAll().then((result)=>{
      res.render('index.handlebars', {
        burgers: result
      });
    });
  });

  app.post('/createBurger', (req, res)=> {
    db.burger.create(req.body).then(result => {
      res.redirect('back')
    });
  });

  app.delete('/eatBurger/:burgerId', (req, res)=> {
    db.burger.destroy({
      where: {
        id: req.params.burgerId
      }})
      .then((result)=>{
        res.redirect('/');
      });
  });
};
