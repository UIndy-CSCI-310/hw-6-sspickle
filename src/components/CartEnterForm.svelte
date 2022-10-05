<script lang="ts">
    import {createEventDispatcher} from "svelte"
    import type {ShoppingCartItem} from "../lib/shoppingCart"
    const dispatch = createEventDispatcher<{submit:ShoppingCartItem}>()
    let  name: string
    let quantity: number
    let priceTxt: string = '0'
    let nameField: HTMLInputElement
    $: price = parseFloat(priceTxt)
</script>

<form on:submit|preventDefault={()=>{
        dispatch('submit',{name, quantity, price})
        name=''
        priceTxt=''
        quantity=0
        nameField.focus()
    }}>
    <label for="name">Name:</label>
    <input type="text" bind:this={nameField} name="name" bind:value={name}><br>
    <label for="name">Quantity:</label>
    <input type="number" name="name" bind:value={quantity}><br>
    <label for="name">Price:</label>
    <input type="text" name="price" bind:value={priceTxt}> <input type="submit">
    <br>
    ---------
    <br>
</form>
