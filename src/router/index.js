import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import login from '@/components/pages/auth/login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/login',
      name: 'Login',
      component: login
    }
  ],
  configRouter: function (Router) {
    Router.map({
      '/': {
        component: Hello
      },
      '/auth': {
        component: require('../components/pages/auth.vue'),
        subRoutes: {
          '/login': {
            component: require('../components/pages/auth/login.vue'),
            guest: true
          },
          '/register': {
            component: require('../components/pages/auth/register.vue'),
            guest: true
          },
          '/profile': {
            component: require('../components/pages/auth/profile.vue'),
            auth: true
          },
          '/logout': {
            component: require('../components/pages/auth/logout.vue'),
            auth: true
          }
        }
      },
      '/home': {
        component: require('../components/pages/home.vue'),
        subRoutes: {
          '/': {
            component: require('../components/pages/home/home.vue')
          },
          '/welcome': {
            component: require('../components/pages/home/welcome.vue')
          },
          '/about': {
            component: require('../components/pages/home/about.vue')
          }
        }
      },
      '/dogs': {
        component: require('../components/pages/cars.vue'),
        auth: true,
        subRoutes: {
          '/': {
            component: require('../components/pages/cars/index.vue')
          },
          '/:id': {
            component: require('../components/pages/cars/show.vue')
          },
          '/create': {
            component: require('../components/pages/cars/create.vue')
          }
        }
      },
      '/terms': {
        component: require('../components/pages/terms.vue')
      },
      '*': {
        component: require('../components/pages/404.vue')
      }
    })

    Router.alias({
      '': '/home',
      '/auth': '/auth/login'
    })
  }
})
