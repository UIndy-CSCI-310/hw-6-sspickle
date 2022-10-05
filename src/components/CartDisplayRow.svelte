
<script>
    import {createEventDispatcher } from 'svelte'
    const dispatch = createEventDispatcher()
    export let name=''
    export let quantity=0
    export let price=0
</script>

<div>{name}</div>
<div>{quantity}</div>
<div>{price}</div>
<div><button on:click={() => dispatch('delete')}>x</button></div>
