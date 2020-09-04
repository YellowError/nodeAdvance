const express = require('express');
const router = express.Router();

router.get('/',(req,res)=>{
    res.render('pages/index',{
        hasNav:true,
        title:'My home Page',
        titre:'Ma super page',
        name:'Toto le héros'
    })
})
router.get('/about',(req,res)=>{

    res.render('pages/about',{
        hasNav:false,
        titre:'Ma super page about ',
        layout:'layouts/landing.hbs'
    })
})
router.get('/shop',(req,res)=>{
    res.render('pages/shop',{
        hasNav:true,
        titre:'Ma super page shop '
    })
})

module.exports = router