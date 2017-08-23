module.exports = (app, db)=>{
  app.get('/burgers',(req, res)=>{
    db.Burger.findAll().then((result)=>{
      res.json(result);
    });
  });


  app.post('/burgers',(req, res)=>{
  db.Burger.create(req.body).then((result)=>{
  res.json(result);
    });
  });
}
