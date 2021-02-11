/apps includes all CRA-Apps, their build-artifact usually goes to a service
/packages includes publishable packages, their build-artifact is used by other packages in the monorepo

replace @your-npm-org/ with the name of the npm organisation under your control (leaving it out entirely is also an option, depends on your npm user)

ui-lib compiles to /lib and /lib-esm, because the declaration files (.d.ts) can't be handled in a package.json-"module"-folder by some tools. The build result is different as well: "lib-esm" contains ES6 modules

linter at the root is made up like this:
https://github.com/facebook/create-react-app/tree/master/packages/eslint-config-react-app
