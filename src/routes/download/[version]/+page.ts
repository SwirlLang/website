import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';

export const load: PageLoad = ({ params }) => {
    let a = /\d.\d.\d/;
    if (params.version === 'latest') {
        return {
            version: '0.0.5'
        };
    }
    if (!params.version.match(a)) {
        error(400, 'Invalid version');
    }
    return {
        version: params.version
    };
};
