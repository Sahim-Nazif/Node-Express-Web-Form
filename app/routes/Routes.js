const express=require('express');
const router=express.Router();
const homePageController=require('../controllers/homePageController')
const confirm_controller=require('../controllers/confirmController')


router.get('/',homePageController.homePage_controller );
router.post('/confirmPage', confirm_controller.confirm_info)




module.exports = router;
