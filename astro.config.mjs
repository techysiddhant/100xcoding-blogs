// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
    integrations: [starlight({
        title: '',
        logo:{
            src:"./src/assets/logo.svg",
        },
		customCss:[
			"./src/tailwind.css"
		],
        social: {
            github: 'https://github.com/withastro/starlight',
        },
        sidebar: [
            {
                label: 'Introduction',
                slug: 'home',
            },
            // {
            //     label: 'Guides',
            //     items: [
            //         // Each item here is one entry in the navigation menu.
            //         { label: 'Example Guide', slug: 'guides/example' },
            //     ],
            // },
            // {
            //     label: 'Reference',
            //     autogenerate: { directory: 'reference' },
            // },
            {
                label: 'HTML',
                badge: {
                    text:'NEW', variant:'tip'
                },
                
                autogenerate: { directory: 'html' },
            },
        ],
		}), tailwind({ applyBaseStyles: false,})],
});