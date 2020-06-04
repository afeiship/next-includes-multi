# next-includes-multi
> Check if string includes multiple for next.

## installation
```bash
npm install -S @feizheng/next-includes-multi
```

## usage
```js
import '@feizheng/next-includes-multi';

const abc = 'abcdef';
const target = ['a', 'b', 'ddd'];

nx.includesMulti(abc, { target, aor: true });
nx.includesMulti(abc, { target });

//some: false
//every: true
```
