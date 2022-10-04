<script lang="ts">
	import type {ShoppingCartItem} from "../lib/shoppingCart"

	let cartList:ShoppingCartItem[] = [
		{name:'bread', quantity:1, price:3},
		{name:'candy', quantity:3, price:2.5}
	]

</script>

<div class="shoppingCartDisplay">
	{#each cartList as cartItem}
	  <div>{cartItem.name}</div>
	  <div>{cartItem.quantity}</div>
	  <div>{cartItem.price}</div>
	  <div><button>x</button></div>
	{/each}
</div>

<style>
	.shoppingCartDisplay {
		display:grid;
		grid-template-columns: 1fr 1fr 1fr 1fr;
	}
</style>
