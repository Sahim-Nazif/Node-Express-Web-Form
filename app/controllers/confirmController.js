

const confirm_info= (req, res)=>{

    //storing the fields name in const
    const firstName=req.body.firstName;
    const lastName=req.body.lastName;
    const address=req.body.address;
    const city=req.body.city
    const email=req.body.email;
    const phoneNumber=req.body.phoneNumber;
    const maritalStatus=req.body.maritalStatus;
    const employment=req.body.employment;
    const gender=req.body.gender;
    const numberOfFamilyMembers=req.body.numberOfFamilyMembers;


    res.render('confirmPage', 
                {firstName,
                lastName,
                address,
                city,
                email,
                phoneNumber,
                maritalStatus,
                employment,
                gender,
                numberOfFamilyMembers})

 
}


module.exports={


    confirm_info
}