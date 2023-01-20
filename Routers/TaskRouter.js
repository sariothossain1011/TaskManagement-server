const express = require('express');
const router = express.Router()
const TaskControll = require('../Controllers/TaskControll');
const Authentication = require('../Middleware/Authentication')

router.post('/createTask',Authentication,TaskControll.createTask)
router.delete('/deleteTask/:id',Authentication,TaskControll.deleteTask)
router.put('/updateStatusTask/:id/:status',Authentication,TaskControll.updateStatusTask)
router.get('/listTaskByStatus/:status',Authentication,TaskControll.listTaskByStatus)
router.get('/taskStatusCount',Authenticaion,TaskControll.taskStatusCount)



module.exports = router ;