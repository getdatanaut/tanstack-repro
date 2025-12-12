```sh
corepack install
node --run typecheck
```

```
src/index.ts:28:14 - error TS2742: The inferred type of 'baseSpaceQuery' cannot be named without a reference to '../node_modules/.pnpm/@tanstack+db@0.5.11_typescript@5.9.3/node_modules/@tanstack/db/dist/esm/query/builder/types'. This is likely not portable. A type annotation is necessary.

28 export const baseSpaceQuery = new Query()
                ~~~~~~~~~~~~~~


Found 1 error in src/index.ts:28
```
