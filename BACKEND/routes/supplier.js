const router = require("express").Router();
let Supplier = require("../models/Supplier");

router.route("/add").post((req,res)=>{
    const name = req.body.name;
    const email = req.body.email;
    const nic = req.body.nic;
    const contactno = Number(req.body.contactno);
    const address = req.body.address;
    const password = req.body.password;

    const newSupplier = new Supplier({
        name,
        email,
        nic,
        contactno,
        address,
        password
    })

    newSupplier.save().then(()=>{
        res.json("Supplier Added")
    }).catch((err)=>{
        console.log(err);
    })
})

router.route("/").get((req,res)=>{
    Supplier.find().then((supplier)=>{
        res.json(supplier)
    }).catch((err)=>{
        console.log(err);
    })
})

router.route("/update/:id").put(async(req,res)=>{
    let userId = req.params.id;
    const{name,email,nic,contactno,address,password}=req.body;

    const updateSupplier={
        name,
        email,
        nic,
        contactno,
        address,
        password
    }
    const update = await Supplier.findByIdAndUpdate(userId,updateSupplier).then(()=>{
        res.status(200).send({status: "user updated"})
    }).catch((err)=>{
        console.log(err);
        res.status(500).send({status:"Error with updating data",error:err.message})
    })
 
})


router.route("/delete/:id").delete(async(req,res)=>{
    let userId = req.params.id;

    await Supplier.findByIdAndDelete(userId).then(()=>{
        res.status(200).send({status:"User deleted"});
    }).catch((errr)=>{
        console.log(errr.message);
        res.status(500).send({status: "Error with delete user"})
    })
    
})

router.route("/get/:id").get(async(req,res)=>{
    let userId = req.params.id;
    await Supplier.findById(userId).then((supplier)=>{
        res.status(200).send({status: "User fetched",supplier})
    }).catch((err)=>{
        console.log(err.message);
        res.status(500).send({status: "Error with get user",error: err.message});
    })
})

module.exports = router;
