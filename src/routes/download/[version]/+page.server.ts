import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import { GITHUB_PAT } from '$env/static/private';

let downloads = {
	windows: [{ format: 'exe', url: '' }],
	linux: [
		{ format: 'deb', url: '' },
		{ format: 'rpm', url: '' }
	],
	macos: [{ format: 'dmg', url: '' }]
};

export const load: PageServerLoad = async ({ params, fetch }) => {
	let version = /^(\d.\d.\d)(-(alpha|beta))?$/.exec(params.version) || [];

	if (params.version === 'latest') {
		version[0] = '0.0.5-alpha';
		version[1] = '0.0.5';
		version[2] = '-Alpha';
	} else if (!version) error(400, 'Invalid version');

	try {
		const res = await fetch(
			`https://api.github.com/repos/swirllang/swirl/releases/tags/v${version[0]}`,
			{
				headers: {
					Authorization: `token ${GITHUB_PAT}`
				}
			}
		);
		const data = await res.json();

		data.assets.forEach((asset: any) => {
			if (asset.name.includes('deb')) {
				downloads.linux[0].url = asset.browser_download_url;
			}
			else if (asset.name.includes('rpm')) {
				downloads.linux[1].url = asset.browser_download_url;
			}
			else if (asset.name.includes('win64')) {
				downloads.windows[0].url = asset.browser_download_url;
			}
			else if (asset.name.includes('Darwin')) {
				downloads.macos[0].url = asset.browser_download_url;
			}
		});

		return {
			version: version[1],
			build: version[2].substring(1),
			downloads
		};
	} catch (err) {
		console.error(err);
		error(500, 'Failed to fetch data.');
	}
};
