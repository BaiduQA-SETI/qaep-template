import Vue from 'vue'
import Router from 'vue-router'
// import Collaborate from '../components/Collaborate.vue'
import Collaborate from '../components/Collaborate.vue'
import Home from '../components/Home.vue'
import Workspace from '../components/Workspace.vue'
Vue.use(Router);
let routes = new Router({
    linkExactActiveClass: 'active',
    routes: [{
        path: '/home',
        name: 'home',
        component: Home
    }, {
        path: '/collaborate',
        name: 'collaborate',
        component: Collaborate
    }, {
        path: '/workspace',
        name: 'workspace',
        component: Workspace
    }]
});

routes.beforeEach((to, from, next) => {
    if (!to.name) {
        routes.push('/home')
        next();
    } else {
        next();
    }
})

export default routes;
