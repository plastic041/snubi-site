import { writable } from 'svelte/store';

type Weapon = {
	name: string;
	weaponType: string;
	rarity: string;
	slot: string;
	level: number;
	description: string;
	stats: {
		name: string;
		value: number;
		hasMeter: boolean;
	}[];
	perks: {
		id: number;
		name: string;
	}[];
};

export const weapon = writable<Weapon>({
	name: '고독',
	weaponType: '보조 무기',
	rarity: '전설',
	slot: '주 무기',
	level: 944,
	description: '해안에서 원하는 걸 찾아내야 합니다.',
	stats: [
		{
			name: '충격',
			value: 80,
			hasMeter: true
		},
		{
			name: '사거리',
			value: 60,
			hasMeter: true
		},
		{
			name: '안정성',
			value: 30,
			hasMeter: true
		},
		{
			name: '조작성',
			value: 20,
			hasMeter: true
		},
		{
			name: '재장전 속도',
			value: 90,
			hasMeter: true
		},
		{
			name: '분당 발사 수',
			value: 280,
			hasMeter: false
		},
		{
			name: '탄창',
			value: 15,
			hasMeter: false
		}
	],
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
