import { writable } from 'svelte/store';

import initialProps from './MyComponent/props.json';

function createProps() {
  const { subscribe, set, update } = writable(initialProps);

  return {
    subscribe,
    updateProps: props => update(n => Object.assign({}, n, props)),
    reset: () => set(initialProps)
  };
}

export const props = createProps();