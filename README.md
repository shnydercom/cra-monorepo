# cra-monorepo

/apps includes all CRA-Apps, their build-artifact usually goes to a service
/packages includes publishable packages, their build-artifact is used by other packages in the monorepo

replace @your-npm-org/ with the name of the npm organisation under your control (leaving it out entirely is also an option, depends on your npm user)

ui-lib compiles to /lib and /lib-esm, because the declaration files (.d.ts) can't be handled in a package.json-"module"-folder by some tools. The build result is different as well: "lib-esm" contains ES6 modules

linter at the root is made up like this:
https://github.com/facebook/create-react-app/tree/master/packages/eslint-config-react-app

## latest TODOs --> DONEs

- simplified the project, removed packages/app and packages/components
- the bulk of root dependencies comes from this: https://www.npmjs.com/package/eslint-config-react-app
- kept lint-staged --> actually it does run only on staged files, behaviour as wanted
- semantic release --> moved config to file. "extends" keyword included there as well
- cleanup done

## output of semantic-release:

lerna exec --concurrency 1 -- npx --no-install semantic-release -e semantic-release-monorepo
lerna notice cli v3.22.1
lerna info versioning independent
lerna info Executing command in 3 packages: "npx --no-install semantic-release -e semantic-release-monorepo"
[6:14:13 PM] [semantic-release] » i Running semantic-release version 17.3.7
[6:14:14 PM] [semantic-release] » √ Loaded plugin "verifyConditions" from "semantic-release-slack-bot"
[6:14:14 PM] [semantic-release] » √ Loaded plugin "verifyConditions" from "@semantic-release/changelog"
[6:14:14 PM] [semantic-release] » √ Loaded plugin "verifyConditions" from "@semantic-release/npm"
[6:14:14 PM] [semantic-release] » √ Loaded plugin "verifyConditions" from "@semantic-release/git"
[6:14:14 PM] [semantic-release] » √ Loaded plugin "prepare" from "@semantic-release/changelog"
[6:14:14 PM] [semantic-release] » √ Loaded plugin "prepare" from "@semantic-release/npm"
[6:14:14 PM] [semantic-release] » √ Loaded plugin "prepare" from "@semantic-release/git"
[6:14:14 PM] [semantic-release] » √ Loaded plugin "publish" from "@semantic-release/npm"
[6:14:14 PM] [semantic-release] » √ Loaded plugin "addChannel" from "@semantic-release/npm"
[6:14:14 PM] [semantic-release] » ‼ This run was not triggered in a known CI environment, running in dry-run mode.
[6:14:19 PM] [semantic-release] » ‼ Run automated release from branch master on repository https://github.com/shnydercom/cra-monorepo.git in dry-run mode
[6:14:20 PM] [semantic-release] » √ Allowed to push to the Git repository
[6:14:20 PM] [semantic-release] » i Start step "verifyConditions" of plugin "semantic-release-slack-bot"
[6:14:20 PM] [semantic-release] [semantic-release-slack-bot] » i SLACK_WEBHOOK has not been defined.
[6:14:20 PM] [semantic-release] » × Failed step "verifyConditions" of plugin "semantic-release-slack-bot"
[6:14:20 PM] [semantic-release] » i Start step "verifyConditions" of plugin "@semantic-release/changelog"
[6:14:20 PM] [semantic-release] » √ Completed step "verifyConditions" of plugin "@semantic-release/changelog"
[6:14:20 PM] [semantic-release] » i Start step "verifyConditions" of plugin "@semantic-release/npm"
[6:14:20 PM] [semantic-release] » √ Completed step "verifyConditions" of plugin "@semantic-release/npm"
[6:14:20 PM] [semantic-release] » i Start step "verifyConditions" of plugin "@semantic-release/git"
[6:14:20 PM] [semantic-release] » √ Completed step "verifyConditions" of plugin "@semantic-release/git"
[6:14:20 PM] [semantic-release] » ‼ Skip step "fail" of plugin "[Function: semantic-release-monorepo]" in dry-run mode
[6:14:20 PM] [semantic-release] » ‼ Skip step "fail" of plugin "[Function: semantic-release-monorepo]" in dry-run mode
[6:14:20 PM] [semantic-release] » ‼ Skip step "fail" of plugin "[Function: semantic-release-monorepo]" in dry-run mode
[6:14:20 PM] [semantic-release] » ‼ Skip step "fail" of plugin "[Function: semantic-release-monorepo]" in dry-run mode
[6:14:20 PM] [semantic-release] » ‼ Skip step "fail" of plugin "[Function: semantic-release-monorepo]" in dry-run mode
[6:14:20 PM] [semantic-release] » ‼ Skip step "fail" of plugin "[Function: semantic-release-monorepo]" in dry-run mode
[6:14:20 PM] [semantic-release] » ‼ Skip step "fail" of plugin "[Function: semantic-release-monorepo]" in dry-run mode
[6:14:20 PM] [semantic-release] » ‼ Skip step "fail" of plugin "[Function: semantic-release-monorepo]" in dry-run mode
[6:14:20 PM] [semantic-release] » ‼ Skip step "fail" of plugin "[Function: semantic-release-monorepo]" in dry-run mode
[6:14:20 PM] [semantic-release] » ‼ Skip step "fail" of plugin "[Function: semantic-release-monorepo]" in dry-run mode
[6:14:20 PM] [semantic-release] » × ENOSLACKHOOK No Slack web-hook defined.
A Slack Webhook must be created and set in the SLACK_WEBHOOK environment variable on your CI environment.

Please make sure to create a Slack Webhook and to set it in the SLACK_WEBHOOK environment variable on your CI environment. Alternatively, provide slackWebhook as a configuration option.

AggregateError:
SemanticReleaseError: No Slack web-hook defined.
at module.exports (C:/repos/cra-monorepo/node_modules/semantic-release-slack-bot/lib/verifyConditions.js:12:11)
at validator (C:/repos/cra-monorepo/node_modules/semantic-release/lib/plugins/normalize.js:34:30)
at C:/repos/cra-monorepo/node_modules/semantic-release/lib/plugins/pipeline.js:37:40
at next (C:/repos/cra-monorepo/node_modules/semantic-release/node_modules/p-reduce/index.js:17:9)
at C:\repos\cra-monorepo\node_modules\semantic-release\lib\plugins\pipeline.js:54:11
at async Object.pluginsConf.<computed> [as verifyConditions] (C:\repos\cra-monorepo\node_modules\semantic-release\lib\plugins\index.js:80:11)
at async run (C:\repos\cra-monorepo\node_modules\semantic-release\index.js:95:3)
at async module.exports (C:\repos\cra-monorepo\node_modules\semantic-release\index.js:260:22)
at async module.exports (C:\repos\cra-monorepo\node_modules\semantic-release\cli.js:55:5)lerna ERR! npx --no-install semantic-release -e semantic-release-monorepo exited 2 in '@your-npm-org/ui-lib'
lerna ERR! npx --no-install semantic-release -e semantic-release-monorepo exited 2 in '@your-npm-org/ui-lib'
error Command failed with exit code 2.
info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.
