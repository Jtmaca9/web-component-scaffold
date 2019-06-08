import { writable } from 'svelte/store';


const initialProps = {
  text1: 'hello',
  text2: 'world',
};

function createProps() {
  const { subscribe, set, update } = writable(initialProps);

  return {
    subscribe,
    updateProps: (props) => update(n => Object.assign({}, n, props)),
    reset: () => set(initialProps)
  };
}

export const props = createProps();