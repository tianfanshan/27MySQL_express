const db = require('../config/database.js')

const CategoryController = {
    // postTableCategories(req,res){
    //     let sql2 = 'CREATE TABLE categories(id INT AUTO_INCREMENT,category_name VARCHAR(30),PRIMARY KEY(id))';
    //     db.query(sql2,(err,result)=>{
    //         if(err)throw err;
    //         console.log(result);
    //         res.send('Table product created!')
    //     })
    // },
    // postCategories(req,res){
    //     let post = {category_name:req.body.category_name}
    //     let sql = 'INSERT INTO categories SET ?'
    //     db.query(sql,post,(err,result)=>{
    //         if(err)throw err;
    //         res.send('category categories added...')
    //     })
    // },
    putCategories(req,res){
        let put1 = req.params.id;
        let put2 = req.body.category_name;
        let sql = `UPDATE categories SET category_name= '${put2}' WHERE id = '${put1}'`
        db.query(sql,(err,result)=>{
            if(err)throw err;
            res.send('category updated...')
        })
    },
    getAllCategories(req,res){
        let sql = `SELECT * FROM ej1database.categories`;
        db.query(sql,(err,result)=>{
            if(err)throw err;
            res.send(result)
        })
    },
    getCategoriesWithId(req,res){
        let put1 = +req.params.id
        let sql = `SELECT * FROM categories WHERE id = '${put1}'`
        db.query(sql,(err,result)=>{
            if(err)throw err;
            res.send(result)
        })
    }
}

module.exports = CategoryController;