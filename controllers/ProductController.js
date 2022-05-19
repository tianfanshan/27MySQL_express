const db = require('../config/database.js')

const ProductController = {
    // postTableProducts(req,res){
    //     let sql1 = 'CREATE TABLE products(id INT AUTO_INCREMENT,product_name VARCHAR(30),product_price FLOAT(20),PRIMARY KEY(id))';
    //     db.query(sql1,(err,result)=>{
    //         if(err)throw err;
    //         console.log(result);
    //         res.send('Table product created!')
    //     })
    // },
    // postProducts(req,res){
    //     let post = {product_name:req.body.product_name, product_price: +req.body.product_price}
    //     let sql = 'INSERT INTO products SET ?'
    //     db.query(sql,post,(err,result)=>{
    //         if(err)throw err;
    //         console.log(result);
    //         res.send('products added...')
    //     })
    // },
    putProducts(req,res){
        let put1 = req.params.id;
        let put2 = req.body.product_name;
        let put3 = +req.body.product_price;
        let sql = `UPDATE products SET product_name = '${put2}',product_price = '${put3}' WHERE id = '${put1}'`;
        db.query(sql,(err,result)=>{
            if(err)throw err;
            res.send('product updated...')
        })
    },
    getAllProducts(req,res){
        let sql = `SELECT * FROM ej1database.products`;
        db.query(sql,(err,result)=>{
            if(err)throw err;
            res.send(result)
        })
    },
    getProductsDesc(req,res){
        let sql = `SELECT * FROM products ORDER BY id DESC`
        db.query(sql,(err,result)=>{
            if(err)throw err;
            res.send(result)
        })
    },
    getProductsWithProducts_name(req,res){
        let put1 = req.params.product_name
        let sql = `SELECT * FROM products WHERE product_name = '${put1}'`
        db.query(sql,(err,result)=>{
            if(err)throw err;
            res.send(result)
        })
    },
    deleteProductsWithProducts_name(req,res){
        let put1 = req.body.product_name
        let sql = `DELETE FROM products WHERE product_name ='${put1}'`
        // let sql1 = `SELECT TABLE products`
        // let todo = []
        // dbs.query(sql1,(err,result1)=>{
        //     if(err)throw err;
        //     return result1
        // })
        // todo.push(dbs)
        // const laTabla = todo
        // const test = laTabla.some(tabla=>tabla.products.id === +req.params.id)
        // if(test){
            db.query(sql,(err,result)=>{
                if(err)throw err;
                res.send(result)
            })
        // }else{
        //     res.status(404).send(`the id '${put1}' id not found!`)
        // }
    }
}

module.exports = ProductController;