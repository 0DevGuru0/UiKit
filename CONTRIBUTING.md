# Setup

We use yarn v3, Please setup your editor according to [their guidelines](https://yarnpkg.com/getting-started/editor-sdks)

# Dependency Management

Imagine we have the following packages in the library:  

```
-- components 
   |- atoms
      |- a
      |- b
      |- c
```

Here are some bullet points to consider when managing their dependencies:  

## Workspace Dependencies
  - If `a` will always depend on the workspace version of the `b` use `"b": "workspace:*"`.
  - **Avoid** using `"workspace:^"` dependency kind.
  - Pay attention that if you use normal semantic versioning like `"b": "^0.1.1"`
    the changesets will update `a` dependency to `b` every time the `b` package changes. (And it will use a fixed version like `0.1.2`)
  - Always use `"workspace:*"` dependency for `icons` package.

## Package Dependencies
### Peer Dependencies

To avoid loading multiple versions of our most used packages like `MUI` we assume every application 
has the following packages in their dependencies. So please use **peerDependencies** if your package depends on them:  
  - every `@mui/*` package e.g. `@mui/material`, `@mui/styles`, `@mui/icons`, etc.
  - `styled-components` and `@types/styled-components` package.
  - The `@swc/helpers` which contains all swc helper functions.

All `peerDependencies` should be also added as `devDependencies` as package managers wont install them during development.  

Please don't add unnecessary `dependencies` to your `package.json`. For example, if you don't use `mui` don't add them as dependency.  

Pacakges like `lodash` should be added as dependency. It is the package user / application's job to handle lodash treeshaking stuff.
