const express = require("express")
const router = express.Router()
const P_Model = require("../Model/Model")
const multer = require("multer")

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "uploads/");
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname);
    },
  });

  const upload = multer({ storage: storage });


    router.post("/addproducts", upload.single("image"), async (req, res) => {

        try {
      
        //   const { name, price, } = req.body;
          
        //   // Check if any required field is missing
        //    if (!name || !price || !req.file) {
        //     return res.status(400).send( "Invalid request" );
        //   }
      
      
        const newProduct = new P_Model({
            Product_Name: req.body.productName,
            Quantity: req.body.quantity,
            Cost_Price: req.body.costPrice,
            Sailing_Price: req.body.sellingPrice,
            image: req.file.path, // Assuming the file path is saved by Multer
          })
      
      
      
          // Save the product to the database
          await newProduct.save();
      
          res.status(200).json({ msg: "Product added successfully" });
        } catch (error) {
            console.log(error)
          res.status(500).json({ msg: "Internal Server Error", error });
        }
      });
      
      
      
      
      module.exports = router;