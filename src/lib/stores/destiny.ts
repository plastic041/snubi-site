import { writable } from 'svelte/store';

type Weapon = {};

export const weapon = writable({
	name: '고독',
	weaponType: '보조 무기',
	slot: '주 무기',
	level: 944,
	description: '해안에서 원하는 걸 찾아내야 합니다.',
	stats: {
		impact: 80,
		range: 40,
		stability: 40,
		handling: 20,
		reloadSpeed: 60,
		rpm: 260,
		magazine: 15
	},
	perks: [
		{
			id: 1,
			name: '정밀 프레임'
		},
		{
			id: 2,
			name: '무덤 도굴꾼'
		}
	]
});
