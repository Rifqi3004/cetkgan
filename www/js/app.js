// Dom7
var $$ = Dom7;

// Framework7 App main instance
var app  = new Framework7({
  root: '#app', // App root element
  id: 'io.framework7.testapp', // App bundle ID
  name: 'Framework7', // App name
  theme: 'auto', // Automatic theme detection
  // App root data
  data: function () {
    return {
      user: {
        firstName: 'John',
        lastName: 'Doe',
      },
    };
  },
  // App root methods
  methods: {
    helloWorld: function () {
      app.dialog.alert('Hello World!');
    },
  },
  // App routes
  routes: routes,
});

// Init/Create main view
var mainView = app.views.create('.view-main', {
  url: '/'
});

// Login Screen Demo
$$('#my-login-screen .login-button').on('click', function () {
  var username = $$('#my-login-screen [name="username"]').val();
  var password = $$('#my-login-screen [name="password"]').val();

  // Close login screen
  app.loginScreen.close('#my-login-screen');

  // Alert username and password
  app.dialog.alert('Username: ' + username + '<br>Password: ' + password);
});
$$('#my-login-screen .signup').on('click', function () {
 
  app.loginScreen.close('#my-login-screen');
});

$$('#daftar .btn-daftar').on('click', function () {

  var nm   = $$('#daftar [name="name"').val();
  var eml  = $$('#daftar [name="email"').val();
  var pasw = $$('#daftar [name="password"').val();
  var tlp  = $$('#daftar [name="telepon"').val();
  var alm  = $$('#daftar [name="alamat"').val();
  
  app.dialog.alert( 'nama :' + nm + '<br>email' + eml + '<br>password'+pasw+'<br>telepon'+tlp+'<br>alamat'+alm);

  
});



