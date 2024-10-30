<script lang="ts">
	import { base } from "$app/paths";

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

</script>

<div class="w-full">
	
	
	<div class="w-full flex items-center justify-center aspect-[13/2] gap-1 bg-cover"
		style={`background-image: url(${base}/card-banners/CardBanner${hero.name.replaceAll(" ", "")}.png);`}>
		
		<h4 class="w-full flex items-center justify-center text-outline">{hero.name}</h4>
		
	</div>
</div>

<style>
	.text-outline {
		font-family: "LuckiestGuy", sans-serif;
		font-size: 2rem;
		text-shadow:
			1.25px 1.25px 0 #202020,
			-1.25px 1.25px 0 #202020,
			-1.25px -1.25px 0 #202020,
			1.25px -1.25px 0 #202020;
	}
</style>