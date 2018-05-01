debugger;

var authController = require('../controllers/authcontroller.js');

module.exports = function (app, passport) {
    app.get('/', function (req, res) {
        res.render('homepage');
    });

    app.get('/signup', authController.signup);


    app.get('/signin', authController.signin);


    app.post('/signup', passport.authenticate('local-signup', {
        successRedirect: '/dashboard',
        failureRedirect: '/signup'
    }));


    app.get('/dashboard', isLoggedIn, authController.dashboard);

    app.get('/chat', isLoggedIn, function (req, res) {
        res.render('chat');
    });


    app.get('/logout', authController.logout);


    app.post('/signin', passport.authenticate('local-signin', {
            successRedirect: '/dashboard',
            failureRedirect: '/signin'
        })

    );
    
    app.get('/create', function (req, res) {

        
        var id = Math.round((Math.random() * 1000000));
        var rooms ='/chat/'+id;
        var link= "<li><a title='' href=" + rooms + " id='create'>" + data + "</a></li>";
        
        res.send('link');

        
    });

    app.get('/chat/:id',isLoggedIn, function (req, res) {

        // Render the chant.hbs
        res.render('chat');
    });
    //app.post("/addname", (req, res) => {
       // var myData = new User(req.body);
       // myData.save()
       // .then(item => {
       // res.send("item saved to database");
       // });
   // });
    



    function isLoggedIn(req, res, next) {
        if (req.isAuthenticated())

            return next();

        res.redirect('/signin');
    }


}