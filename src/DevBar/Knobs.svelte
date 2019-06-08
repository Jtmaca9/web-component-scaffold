
<script>
	import { props as propStore } from '../props.js';
  const props = $propStore;
  const propList = Object.keys(props);

  function onInputChange(field, value) {
    propStore.updateProps({ [field]: value });
  }

</script>

<style>
  .knobContainer {
    width: 300px;
    display: flex;
    margin-bottom: 12px;
  }
  .inputBar {
    flex-grow: 1;
    margin: 0 8px;
  }
</style>

<div>
	{#each propList as prop, i}
		<div class="knobContainer">
      {prop}:
      {#if typeof props[prop] === 'string'}
         <input
          type="text"
          class="inputBar"
          on:input={(evt) => onInputChange(prop, evt.target.value)}
          value={props[prop]} />
      {:else if typeof props[prop] === 'boolean'}
        <input
          type="checkbox"
          class="inputBar"
          on:change={(evt) => onInputChange(prop, evt.target.checked)}
          checked={props[prop]} />
      {/if}
    </div>
	{/each}
</div>