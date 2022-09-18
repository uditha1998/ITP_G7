const router = require("express").Router();
let Supplier_quotation = require("../models/Supplier_quotation");

router.route("/add").post((req,res)=>{
    const item = req.body.item;
    const price = Number(req.body.price);
    const quantity = Number(req.body.quantity);
    

    const newSQuotation = new Supplier_quotation({
        item,
        price,
        quantity
    })

    newSQuotation.save().then(()=>{
        res.json("Supplier Quotation Added")
    }).catch((err)=>{
        console.log(err);
    })
})

router.route("/").get((req,res)=>{
    Supplier_quotation.find().then((supplier_quotations)=>{
        res.json(supplier_quotations)
    }).catch((err)=>{
        console.log(err);
    })
})

router.route("/update/:id").put(async(req,res)=>{
    let squotationId = req.params.id;
    const{item,price,quantity}=req.body;

    const updateSupplierQuotation={
        item,
        price,
        quantity
    }
    const update = await Supplier_quotation.findByIdAndUpdate(squotationId,updateSupplierQuotation).then(()=>{
        res.status(200).send({status: "supplier quotation updated"})
    }).catch((err)=>{
        console.log(err);
        res.status(500).send({status:"Error with updating data",error:err.message})
    })
 
})


router.route("/delete/:id").delete(async(req,res)=>{
    let squotationId = req.params.id;

    await Supplier_quotation.findByIdAndDelete(squotationId).then(()=>{
        res.status(200).send({status:"Supplier quotation deleted"});
    }).catch((errr)=>{
        console.log(errr.message);
        res.status(500).send({status: "Error with delete supplier quotation"})
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
