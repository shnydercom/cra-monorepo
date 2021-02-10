FROM node:latest

ENV NODE_ENV=production
RUN yarn add --global semantic-release \
 @semantic-release/changelog \
 @semantic-release/git \
 conventional-changelog-conventionalcommits \
 netlify-cli \
 @sentry/cli \
 aws-cdk

RUN curl https://cli-assets.heroku.com/install.sh | sh
