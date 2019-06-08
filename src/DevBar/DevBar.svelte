<script>
  import CloseButton from './CloseButton.svelte';

  let open = true;
  function handleClicked() {
		open = !open;
	}
</script>

<style>
  .sideBarContainer {
    position: fixed;
    right: 0;
    top: 0;
    height: 100%;
    border-left: solid 2px black;
    transition: width 0.2s ease-in-out;
    overflow: hidden;
  }

  .open {
    width: 300px;
  }

  .close {
    width: 24px;
  }
</style>

<div class="sideBarContainer {open ? 'open' : 'close'}">
  <CloseButton on:clicked={handleClicked} />
</div>