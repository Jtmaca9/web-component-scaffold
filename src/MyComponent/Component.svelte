<script>
	export let text1;
	export let text2;
	export let isIt;
</script>

<style>
	.red {
		color: red;
	}
	.blue {
		color: blue;
	}
</style>

<h1 class={isIt ? 'red' : 'blue'}>{text1} {text2}!</h1>