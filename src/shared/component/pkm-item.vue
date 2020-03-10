<template>
  <div>
    <figure class="img-content">
      <a class="img-link">
        <img class="item-img" alt="" v-lazy="pkmImgSrc">
      </a>
    </figure>
    <div class="item-info">
      <span class="item-num">#{{pkm.number}}</span>
      <h5 class="item-name">{{pkm.chName}}</h5>
      <h5 class="item-en-name">{{pkm.name}}</h5>
      <span :class="`pokemon-type pokemon-type-${type}`"
            v-for="type of pkm.type"
            v-bind:key="type">{{type | upperFirst}}</span>
    </div>
  </div>
</template>

<script>
	export default {
		props: ['pokemon'],
		data: function () {
			return {
				pkmImgSrc: '',
                pkm: this.pokemon
			}
		},
		created() {
			this.pkmImgSrc = require(`../../assets/pokemon/${this.pkm.number}.png`)
		}
	}
</script>

<style scoped lang="less">
  .img-content {
    width: 210px;
    height: 210px;
    margin: 0 0 15px;

    .img-link {
      display: block;

      .item-img {
        width: 100%;
        height: 100%;
      }
    }
  }

  .item-btn {
    width: 200px;
    height: 30px;
    padding-left: 10px;
  }

  .item-info {
    width: 200px;
    height: 60px;
    padding-left: 10px;

    .item-num {
      font-family: "Flexo-Bold", arial, sans-serif;
      font-size: 80%;
      color: #000;
    }

    .item-name {
      margin: 5px 0 8px;
      font-family: "Flexo-Demi", arial, sans-serif;
      text-transform: none;
      font-size: 145%;
      font-weight: 500;
      color: #000;
    }

    .item-en-name {
      margin: 5px 0 8px;
      font-family: "Flexo-Demi", arial, sans-serif;
      text-transform: none;
      font-size: 145%;
      font-weight: 100;
      color: rgba(0, 0, 0, 0.7);
    }
  }

</style>
