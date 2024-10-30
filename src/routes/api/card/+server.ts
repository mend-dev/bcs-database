import type { RequestHandler } from '@sveltejs/kit';
import data from '$lib/data/cards.json';

export const GET: RequestHandler = async ({ url }) => {
    let results = data;
    return new Response(JSON.stringify(results), {
        headers: { 'Content-Type': 'application/json' }
    });
};
