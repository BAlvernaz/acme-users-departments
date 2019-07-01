const router = require('express').Router();
const { Models } = require('./db');
const { User, Department } = Models;

router.get('/users', async (req, res, next) => {
  try {
    const users = await User.findAll();
    res.send(users);
  } catch (ex) {
    next(ex);
  }
});

router.post('/users', async (req, res, next) => {
  try {
   const newUser = await User.create({
      name: req.body.name,
      departmentId: req.body.departmentId
    });
    res.send(newUser)
  } catch (ex) {
    next(ex);
  }
});

router.put('/users/:id', async (req, res, next) => {
  try {
   await User.update({
      name: req.body.name,
      departmentId: req.body.departmentId
  },
  {
    where: {
      id: req.params.id
    }
  })
  res.sendStatus(204)
} catch(ex) {
  next(ex)
}
})

router.delete('/users/:id', async (req, res, next) => {
  try {
    await User.destroy({
      where: {
        id: req.params.id
      }
    })
    res.sendStatus(200)
    } catch(ex) {
      next(ex)
    }
})

router.get('/departments', async (req, res, next) => {
  try {
    const departs = await Department.findAll();
    res.send(departs);
  } catch (ex) {
    next(ex);
  }
});

router.post('/departments', async (req, res, next) => {
  try {
    const newDept = await Department.create({
       name: req.body.name,
     });
     res.send(newDept)
   } catch (ex) {
     next(ex);
   }
 });

router.put('/departments/:id', async (req, res, next) => {
  try {
    const upDept = await Department.update({
      name: req.body.name
    }, {
      where: {
        id: req.params.id
      }
    })
    res.send(upDept)
  } catch(ex) {
    next(ex)
  }
})

router.delete('/departments/:id', async (req, res, next) => {
  try {
    await Department.destroy({
      where: {
        id: req.params.id
      }
    })
    res.sendStatus(204)
  } catch(ex) {
    next(ex)
  }
})


module.exports = router;
