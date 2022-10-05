<script lang="ts">
    import {cart} from '../lib/cartStore'
</script>

<div>
    -------<br>
    Total: ${$cart.reduce((pv, item) => pv + item.price*item.quantity,0).toFixed(2)}
</div>
