<script lang="ts">
	import { base } from "$app/paths";
	import ActiveAbilityButton from "$lib/assets/ability-ui/ActiveAbilityButton.png";
	import PassiveAbilityButton from "$lib/assets/ability-ui/PassiveAbilityButton.png";
	import BloontoniumIcon from "$lib/assets/ability-ui/BloontoniumIcon.png";

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
		style={`background-image: url(src/lib/assets/ability-ui/${ability.passive ? "Passive" : "Active"}AbilityButton.png);`}>
		<img src={`src/lib/assets/ability-icons/${ability.icon}.png`} alt="abilityicon" class="w-100 h-100 " />
	</div>
	<div class="w-3/4">
		<span class="bloon-font bcs-text bcs-text-md">{ability.name}</span>
	</div>
</div>
