routes = [
  {
    path: '/',
    url: './index.html',
  },
  {
    path: '/about/',
    url: './pages/about.html',
  },
  {
    path:'/upload',
    url:'./pages/upload.html',
  },
  {
    path: '/form/',
    url: './pages/form.html',
  },
  {
    path:'/cariteman',
    url:'./pages/cariteman.html',
  },
  {
    path:'/history',
    url:'./pages/user/history.html',
  },
  {
    path:'/profil',
    url:'./pages/user/profil.html',
  },
  {
    path:'/signup',
    url:'./pages/user/signup.html',
  },
  {
    path:'/checkout',
    url:'./pages/checkout.html',
  },
  {
    path:'/detail-print',
    url:'./pages/user/detail_print.html',
  },
  //about
  {
    path:'/faq',
    url:"./pages/about/faq.html",
  },
  {
    path:'/contact',
    url:'./pages/about/contact.html',
  },
  {
    path:'/syarat',
    url:'./pages/about/syarat.html',
  },
  {
    path:'/kebijakan',
    url:'./pages/about/kebijakan.html',
  },

  // Page Loaders & Router
  {
    path: '/page-loader-template7/:user/:userId/:posts/:postId/',
    templateUrl: './pages/page-loader-template7.html',
  },
  {
    path: '/page-loader-component/:user/:userId/:posts/:postId/',
    componentUrl: './pages/page-loader-component.html',
  },
  {
    path: '/request-and-load/user/:userId/',
    async: function (routeTo, routeFrom, resolve, reject) {
      // Router instance
      var router = this;

      // App instance
      var app = router.app;

      // Show Preloader
      app.preloader.show();

      // User ID from request
      var userId = routeTo.params.userId;

      // Simulate Ajax Request
      setTimeout(function () {
        // We got user data from request
        var user = {
          firstName: 'Vladimir',
          lastName: 'Kharlampidi',
          about: 'Hello, i am creator of Framework7! Hope you like it!',
          links: [
            {
              title: 'Framework7 Website',
              url: 'http://framework7.io',
            },
            {
              title: 'Framework7 Forum',
              url: 'http://forum.framework7.io',
            },
          ]
        };
        // Hide Preloader
        app.preloader.hide();

        // Resolve route to load page
        resolve(
          {
            componentUrl: './pages/request-and-load.html',
          },
          {
            context: {
              user: user,
            }
          }
        );
      }, 1000);
    },
  },
  // Default route (404 page). MUST BE THE LAST
  {
    path: '(.*)',
    url: './pages/404.html',
  },
  
];
