<script lang="ts">
	import type { PageData } from "./$types";

	import { Accordion, AccordionItem } from "@skeletonlabs/skeleton";
	import CardBanner from "../../components/CardBanner.svelte";
	import DeckName from "../../components/DeckName.svelte";
	import CardGrid from "../../components/CardGrid.svelte";
	import DeckStats from "../../components/DeckStats.svelte";
	import HeroSelect from "../../components/HeroSelect.svelte";
	import HeroBanner from "../../components/HeroBanner.svelte";
	import ExportDeck from "../../components/ExportDeck.svelte";

	type CardData = {
		name: string,
		cost: number,
		type: string,
		rarity: string
		category: string,
		hero: string,
		health: number,
		delay: number,
		charges: number,
		base: string,
		attack: number,
		ammo: number,
		reload: number,
		effect: string
	}
	
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

	export let data: { cards: CardData[], heroes: HeroData[] };
	let cards: CardData[] = data["cards"];
	let heroes: HeroData[] = data["heroes"]


	let hero: HeroData | null = null;
	let deck: { card: CardData, amount: number }[] = [];

	function SelectHero(selectedHero: HeroData) {
		hero = selectedHero;
	}

	function AddCard(addedCard: CardData) {
		if (deck.some(card => card.card === addedCard)) {
			const index = deck.findIndex(card => card.card === addedCard);
			if (deck[index].amount >= 3) { return; }
			deck[index].amount++;
		} else {
			deck.push({
				card: addedCard,
				amount: 1
			});
		}
		deck.sort((a, b) => {
			if (a.card.cost !== b.card.cost) { return a.card.cost - b.card.cost; }
			return a.card.name.localeCompare(b.card.name);
		});

		deck = [...deck];
	}

	function RemoveCard(removedCard: CardData) {
		if (deck.some(card => card.card === removedCard)) {
			const index = deck.findIndex(card => card.card === removedCard);
			const amount = deck[index].amount;

			if (amount == 1) {
				deck.splice(index, 1);
			} else if (amount > 1) {
				deck[index].amount--;
			}
		}
		deck.sort((a, b) => {
			if (a.card.cost !== b.card.cost) { return a.card.cost - b.card.cost; }
			return a.card.name.localeCompare(b.card.name);
		});

		deck = [...deck];
	}

	let screenshotArea: HTMLElement;

</script>

<div class=" mx-0 w-full h-full flex flex-row p-2 gap-4 ">
	
	<div class="w-3/4 flex flex-col h-full">
		<Accordion>
			<AccordionItem open>
				<svelte:fragment slot="summary">Deck Stats</svelte:fragment>
				<svelte:fragment slot="content"><DeckStats /></svelte:fragment>
			</AccordionItem>
			<AccordionItem open>
				<svelte:fragment slot="summary">Heroes</svelte:fragment>
				<svelte:fragment slot="content"><HeroSelect heroes={heroes} SelectHero={SelectHero} /></svelte:fragment>
			</AccordionItem>
			<AccordionItem open>
				<svelte:fragment slot="summary">Cards</svelte:fragment>
				<svelte:fragment slot="content"><CardGrid cards={cards} AddCard={AddCard} RemoveCard={RemoveCard} /></svelte:fragment>
			</AccordionItem>
		</Accordion>

	</div>
	
	<div class="w-1/4 h-auto flex flex-col">
		<div class="flex flex-col items-start h-full w-full gap-1" bind:this={screenshotArea}>
			<DeckName />
			{#if hero !== null}
				<HeroBanner hero={hero} />
			{/if}
			{#each deck as card}
				<CardBanner card={card.card} amount={card.amount} AddCard={AddCard} RemoveCard={RemoveCard} />
			{/each}
		</div>
		<ExportDeck screenshotArea={screenshotArea} />
	</div>
</div>
