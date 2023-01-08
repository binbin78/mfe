import {createApp} from 'vue';
import Dashboard  from './components/Dashboard';

const mount = (el) => {  
   const app = createApp(Dashboard);
   //this mount is vue itself mount function to add the app to the dom
   app.mount(el);
}

if (process.env.NODE_ENV === 'development') {
    const devRoot = document.querySelector('#_dashboard-dev-root');
    if (devRoot) {
        mount(devRoot);
    }
}

export {mount};