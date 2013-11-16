/**
 * Created by bhdrkn on 06.11.2013.
 */

var Portfolio = require('../models/portfolio')

module.exports.getPortfolioByUsername = function(req,res){
    var username = req.params.username;

    Portfolio.findOne({username : username},function(err, entity){
        if(err){
            console.log("Error while getting Portfolio for username: " + username + " ERROR: " + err);
        }else{
            console.log(entity);
            res.write(JSON.stringify(entity));
            res.end();
        }
    });
}

module.exports.portfolioPage = function(req,res){
    var username = req.params.username;
    var jadeTemplate = req.params.jadeTemplate;

    Portfolio.findOne({username : username},function(err, entity){
        if(err){
            console.log("Error while getting Portfolio for username: " + username + " ERROR: " + err);
        }else{
            console.log(entity);
            res.render(jadeTemplate,{portfolio:entity, jadeTemplate:jadeTemplate});
        }
    });
}


module.exports.saveExampleData = function(){

    var juanDelaCruzPortfolio = new Portfolio({
        username: 'jdCruz',
        profile:{
            name: 'Juan Dela Cruz',
            job : 'Web & Graphics Designer',
            description: 'Hello I am Juan Dela Cruz Web and Graphics Designer from Philipines. If yopu have something to be done just call my name and I will be there. :-)',
            facebook: '#',
            twitter: '#',
            google: '#',
            pinterest: '#',
            stumbleupon: '#',
            dribbble: '#',
            picture: '/img/mini.png',
            thumbnail: '/img/user.jpg'
        },
        skills:[
            {
                shortcode: 'Ps',
                fullname: 'PHOTOSHOP',
                value: '90',
                color: '#30a5dc'
            },
            {
                shortcode: 'Ai',
                fullname: 'Illustrator',
                value: '80',
                color: '#ee742b'
            },
            {
                shortcode: 'HTML5',
                fullname: 'HTML5',
                value: '75',
                color: '#f04949'
            },
            {
                shortcode: 'CSS3',
                fullname: 'CSS3',
                value: '85',
                color: '#39d084'
            }
        ],
        works:[
            {
                title: '1',
                thumbnail: '/img/1-thumb.jpg',
                image: '/img/1.jpg'
            },
            {
                title: '2',
                thumbnail: '/img/2-thumb.jpg',
                image: '/img/2.jpg'
            },
            {
                title: '3',
                thumbnail: '/img/3-thumb.jpg',
                image: '/img/3.jpg'
            },
            {
                title: '4',
                thumbnail: '/img/4-thumb.jpg',
                image: '/img/4.jpg'
            },
            {
                title: '5',
                thumbnail: '/img/5-thumb.jpg',
                image: '/img/5.jpg'
            },
            {
                title: '6',
                thumbnail: '/img/6-thumb.jpg',
                image: '/img/6.jpg'
            }
        ],
        resume: {
            description: 'You can download my resume for your reference and I hope that we will meet very soon! :)',
            file: '#',
            size: '125kb'
        }
    });

    juanDelaCruzPortfolio.save(function(err){
        if(err){
            console.log("Error while saving Example Portfolio. Error:  " + err );
        }
    });
}