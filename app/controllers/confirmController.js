

const confirm_info= (req, res)=>{

    const firstName=req.body.firstName;

    res.render('confirmPage', {firstName})

 
}



module.exports={


    confirm_info
}