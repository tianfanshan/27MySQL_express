const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());
app.use('/categories',require('./routes/categories.js'));
app.use('/products',require('./routes/products.js'));
app.use('/orders',require('./routes/orders.js'));


// app.get('/createdb',(req,res)=>{
//     let sql = 'CREATE DATABASE ej1database';
//     db.query(sql,(err,result)=>{
//         if(err)throw err;
//         console.log(result);
//         res.send('Database created...')
//     })
// })

// app.post('/createTable1',)

// app.post('/createTable2',)

// app.post('/createTable3',)

// app.post('/product',)

// app.post('/category',)

// app.post('/products_categories',)

// app.put('/product:id',)

// app.put('/category:id',)

// app.get('/allProduct',)

// app.get('/allCategory',)

// app.get('/allCategory_Product',)

// app.get('/allCategory_Product:id',)

// app.get('/productsDesc',)

// app.get('/categoriesId:id',)

// app.get('/product_name/:product_name',)

// app.delete('/deleteProduct/:product_name',)


app.listen(port,()=>{
    console.log('puerto levantado')
})