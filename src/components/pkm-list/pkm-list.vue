<template>
  <ul class="list-content">
      <li class="item-list" v-for="pokemon of pkmData" :key="pokemon.id">
        <pkm-item :pokemon="pokemon"></pkm-item>
      </li>
    </ul>
</template>

<script>
	import PkmItem from "../../shared/component/pkm-item";
	import {pkmGen1Data} from "../../core/pkmData";

	export default {
		data: function() {
			return {
				pkmData: pkmGen1Data
            }
        },
		components: {PkmItem},
	}
</script>

<style scoped>

</style>
