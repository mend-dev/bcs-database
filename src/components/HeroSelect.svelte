<script lang="ts">
	import HeroDisplay from "./HeroDisplay.svelte";

	type HeroData = {
		name: string,
		icon: string
		abilities: {
			name: string,
			passive: boolean,
			cost: number,
			effect: string,
			icon: string
		}[]
	}

	export let heroes: HeroData[];
	export let SelectHero: (heroData: HeroData) => void;
</script>

<div class="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-2">
	{#each heroes as hero}
		<HeroDisplay hero={hero} SelectHero={SelectHero} />
	{/each}
</div>