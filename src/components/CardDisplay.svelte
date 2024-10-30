<script lang="ts">
	import { base } from "$app/paths";
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

	export let card: CardData;
	export let AddCard: (cardData: CardData) => void;
	export let RemoveCard: (cardData: CardData) => void;

	function CardClicked() {
		AddCard(card);
	}


</script>

<div>
	
	<button on:click={CardClicked}>
		<img src={`${base}/card-icons/${card.name.replaceAll(" ", "")}_Icon.png`} alt="Card" />
		<h4>{card.name}</h4>
	</button>
</div>