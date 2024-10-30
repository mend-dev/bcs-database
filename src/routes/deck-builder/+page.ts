import type { PageLoad } from './$types';

export const load: PageLoad = async ({ fetch }) => {
    const cardsRes = await fetch('/api/card');
    const cards = await cardsRes.json();

	const heroesRes = await fetch('/api/hero');
	const heroes = await heroesRes.json();

    return { cards, heroes };
};
