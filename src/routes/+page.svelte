<script lang="ts">
	import type {ShoppingCartItem} from "../lib/shoppingCart"
	import CartDisplayRow from "../components/CartDisplayRow.svelte"
	import CartDisplayTotal from "../components/CartDisplayTotal.svelte"
	import CartEnterForm from "../components/CartEnterForm.svelte"

	import {cart} from "../lib/cartStore"

	let cartList:ShoppingCartItem[] = [
		{name:'bread', quantity:1, price:3},
		{name:'candy', quantity:3, price:2.5}
	]

	cart.set(cartList)

	const onDelete = (i:number) => {
		const newList = $cart.filter((_,ix) => ix != i)
		cart.set(newList)
	}

	const onSubmit = (e:CustomEvent<CartDisplayRow>) => {
		const newItem = e.detail as CartDisplayRow
		const newList = [...$cart, newItem]
		cart.set(newList)
	}

</script>

<CartEnterForm on:submit={(e) => onSubmit(e)}/>

<div class="shoppingCartDisplay">
	{#each $cart as cartItem,i}
	<CartDisplayRow {...cartItem} on:delete = {() => onDelete(i)}/>
	{/each}
	<CartDisplayTotal />
</div>

<style>
	.shoppingCartDisplay {
		display:grid;
		grid-template-columns: 1fr 1fr 1fr 1fr;
	}
</style>
