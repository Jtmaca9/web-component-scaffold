
<script>
	import { props as propStore } from '../props.js';
  const props = $propStore;
  const propList = Object.keys(props);

  function onInputChange(evt, field) {
    propStore.updateProps({ [field]: evt.target.value });
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
      <input
        type="text"
        class="inputBar"
        on:input={(evt) => onInputChange(evt, prop)}
        value={props[prop]} />
    </div>
	{/each}
</div>