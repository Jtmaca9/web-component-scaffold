<script>
  import { createEventDispatcher } from 'svelte';
  const dispatch = createEventDispatcher();

  function handleClick () {
    dispatch('clicked');
  }
</script>

<button on:click={handleClick}>x</button>