import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';

export const load: PageLoad = ({ params }) => {
    let regexVer = /^(\d.\d.\d)(-\w+)?$/;
    let version = params.version.match(regexVer);
    if (version) {
        console.log(version[1])
    }
    if (params.version === 'latest') {
        return {
            version: '0.0.5'
        };
    }
    if (!version) {
        error(400, 'Invalid version');
    }
    if (version[2]) {
        return {
            version: version[1],
            build: version[2].substring(1)
        };
    }
    return {
        version: params.version
    };
};
