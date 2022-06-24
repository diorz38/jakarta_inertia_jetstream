require('./bootstrap');

import { createApp, h } from 'vue';
import { createInertiaApp } from '@inertiajs/inertia-vue3';
import { InertiaProgress } from '@inertiajs/progress';
import Alpine from 'alpinejs'
import { registerLicense } from '@syncfusion/ej2-base';

window.Alpine = Alpine

Alpine.start()

const appName = window.document.getElementsByTagName('title')[0]?.innerText || 'Laravel';

registerLicense('ORg4AjUWIQA/Gnt2VVhhQlFacF5JXGFWfVJpTGpQdk5xdV9DaVZUTWY/P1ZhSXxRdkNhXX9cdXdQT2ldWEE=');

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) => require(`./Pages/${name}.vue`),
    setup({ el, app, props, plugin }) {
        return createApp({ render: () => h(app, props) })
            .use(plugin,registerLicense)
            .mixin({ methods: { route } })
            .mount(el);
    },
});

InertiaProgress.init({ color: '#4B5563' });
