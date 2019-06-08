

<script>
  import DevBar from './Components/DevBar/DevBar.svelte';
  import MyComponent from './Components/MyComponent/Component.svelte';
  import { props } from './props.js';
</script>

<style>
	/* styles go here */
</style>

<!-- markup (zero or more items) goes here -->
<DevBar />
<MyComponent {...$props} />