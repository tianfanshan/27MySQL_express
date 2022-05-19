const db = require('../config/database.js');

const OrderController ={
    // postTableOrders(req,res){
    //     let sql3 = 'CREATE TABLE products_categories(id INT AUTO_INCREMENT,product_id INT,category_id INT,PRIMARY KEY(id),FOREIGN KEY(product_id)REFERENCES products(id),FOREIGN KEY (category_id)REFERENCES categories(id))';
    //     db.query(sql3,(err,result)=>{
    //         if(err)throw err;
    //         console.log(result);
    //         res.send('Table product created!')
    //     })
    // },
    // postOrders(req,res){
    //     let post1 = {product_id: +req.body.product_id,category_id: +req.body.category_id}
    //     let sql = `INSERT INTO products_categories SET ?`
    //     db.query(sql,post1,(err,result)=>{
    //         if(err)throw err;
    //         res.send('products_categories id added...!')
    //     })
    // },
    getAllProducts_Categories(req,res){
        let sql = `SELECT product_name,category_name FROM products_categories INNER JOIN products ON product_id = products.id INNER JOIN categories ON category_id = categories.id`
        db.query(sql,(err,result)=>{
            if(err)throw err;
            res.send(result)
        })
    },
    getAllProducts_CategoriesWithId(req,res){
        let put1 = +req.params.id
        let sql = `SELECT product_name,category_name FROM products_categories INNER JOIN products ON product_id = products.id INNER JOIN categories ON category_id = categories.id WHERE products.id = '${put1}'`
        db.query(sql,(err,result)=>{
            if(err)throw err;
            res.send(result)
        })
    },
}

module.exports = OrderController;