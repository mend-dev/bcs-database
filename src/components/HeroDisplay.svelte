<script lang="ts">
	import AbilityDisplay from "./AbilityDisplay.svelte";

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

	export let hero: HeroData;
	export let SelectHero: (heroData: HeroData) => void;

	function HeroClicked() {
		SelectHero(hero);
	}
</script>

<div class="flex flex-col element p-2">
	<button class="flex flex-col" on:click={HeroClicked}>
		<img src={"src/lib/" + hero.icon} alt="Quincy" />
		<span class="bcs-text bcs-text-lg">{hero.name}</span>
	</button>
	<div class="flex flex-col gap-1">
		<AbilityDisplay ability={hero.abilities[0]} />
		<AbilityDisplay ability={hero.abilities[1]} />
		<AbilityDisplay ability={hero.abilities[2]} />
	</div>
</div>

<style>
	.element {
		position: relative;
		z-index: 1;
	}

	.element::before {
		content: '';
		position: absolute;
		top: 30%;
		left: 0px;
		right: 0px;
		bottom: 0px;
		background-color: #3f3f46;
		border-radius: 0.5rem;
		z-index: -1;
	}
</style>