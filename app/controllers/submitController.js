
const submit_info=(req, res)=>{

    const firstName=req.body.firstName;

    res.render('submit', {firstName})

    console.log(req.body.firstName)
}


module.exports={

    submit_info
}