const express=require('express');
const router=express.Router();
const homePageController=require('../controllers/homePageController')
const confirm_controller=require('../controllers/confirmController')
const submit_page=require('../controllers/submitController')

router.get('/',homePageController.homePage_controller );
router.post('/confirmPage', confirm_controller.confirm_info)
router.post('/submit', submit_page.submit_info)



module.exports = router;
