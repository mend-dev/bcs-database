<script lang="ts">
	import { base } from "$app/paths";
	import CardDisplay from "./CardDisplay.svelte";


	type CardData = {
		name: string,
		cost: number,
		type: string,
		rarity: string
		category: string,
		hero?: string,
		health?: number,
		delay?: number,
		charges?: number,
		base?: string,
		attack?: number,
		ammo?: number,
		reload?: number,
		effect: string
	}

	export let cards: CardData[];
	export let AddCard: (cardData: CardData) => void;
	export let RemoveCard: (cardData: CardData) => void;

	let nameSearch: string = "";
	let costFilters: number[] = [];
	let typeFilters: string[] = [];

	$: filteredCards = cards.filter((card) => {
		const matchesName = nameSearch !== "" ? card.name.toLowerCase().includes(nameSearch.toLowerCase()) : true;
		const matchesCost = costFilters.length > 0 ? costFilters.includes(card.cost) : true;
		const matchesType = typeFilters.length > 0 ? typeFilters.includes(card.type) : true;
		return matchesName && matchesCost && matchesType;
	});
</script>

<div class="flex flex-row">
	<label>
		<input type="text" bind:value={nameSearch} placeholder="Enter text..." class="text-black" />
	</label>

	<button on:click={() => {
		if (typeFilters.includes("Tower")) {
			typeFilters.splice(typeFilters.indexOf("Tower"), 1);
		} else {
			typeFilters.push("Tower");
		}
		typeFilters = [...typeFilters]
	}}><img src={typeFilters.includes("Tower") ? `${base}/ui-icons/FilterMonkeysOn.png` : `${base}/ui-icons/FilterMonkeysOff.png`} alt="toggletowers" /></button>

	<button on:click={() => {
		if (typeFilters.includes("Bloon")) {
			typeFilters.splice(typeFilters.indexOf("Bloon"), 1);
		} else {
			typeFilters.push("Bloon");
		}
		typeFilters = [...typeFilters]
	}}><img src={typeFilters.includes("Bloon") ? `${base}/ui-icons/FilterBloonsOn.png` : `${base}/ui-icons/FilterBloonsOff.png`} alt="togglebloons" /></button>

	<button on:click={() => {
		if (typeFilters.includes("Power")) {
			typeFilters.splice(typeFilters.indexOf("Power"), 1);
		} else {
			typeFilters.push("Power");
		}
		typeFilters = [...typeFilters]
	}}><img src={typeFilters.includes("Power") ? `${base}/ui-icons/FilterPowersOn.png` : `${base}/ui-icons/FilterPowersOff.png`} alt="togglepowers" /></button>
</div>

<div class="grid grid-cols-8">
	{#each filteredCards as card}
		<CardDisplay card={card} AddCard={AddCard} RemoveCard={RemoveCard} />
	{/each}
</div>