<script lang="ts">
	type AbilityData = {
		name: string,
		passive: boolean,
		cost: number,
		effect: string,
		icon: string
	}

	export let ability: AbilityData;
</script>

<div class="flex flex-row w-full items-center gap-1">
	<div class="w-1/5 aspect-square gap-1 bg-cover"
		style={`background-image: url(/ability-ui/${ability.passive ? "Passive" : "Active"}AbilityButton.png);`}>
		<img src={`/ability-icons/${ability.icon}.png`} alt="abilityicon" class="w-100 h-100 " />
	</div>
	<div class="w-3/4">
		<span class="bloon-font bcs-text bcs-text-md">{ability.name}</span>
	</div>
</div>
