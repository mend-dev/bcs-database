<script lang="ts">

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
	export let amount: number
	export let AddCard: (cardData: CardData) => void;
	export let RemoveCard: (cardData: CardData) => void;

	function BannerClicked() {
		RemoveCard(card);
	}


</script>

<div class="w-full">
	
	<button class="w-full flex flex-row justify-between aspect-[13/2] gap-1 bg-cover"
		style={`background-image: url(/card-banners/CardBanner${card.type.replaceAll(" ", "")}.png);`}
	 	on:click={BannerClicked}>
		
		<div class="w-4/5 flex flex-row gap-2">
			<img class="aspect-square m-[-0.15rem]" src={`/card-icons/${card.name.replaceAll(" ", "")}_Icon.png`} alt="CardIcon" />

			<h4 class="w-full flex items-center text-outline">{card.name}</h4>
		</div>
		<h4 class="p-2 w-1/5 flex justify-end items-center bcs-font text-outline">x{amount}</h4>
		
	</button>
</div>

<style>
	.text-outline {
		font-family: "LuckiestGuy", sans-serif;
		font-size: 1.3rem;
		text-shadow:
			1.25px 1.25px 0 #202020,
			-1.25px 1.25px 0 #202020,
			-1.25px -1.25px 0 #202020,
			1.25px -1.25px 0 #202020;
	}
</style>