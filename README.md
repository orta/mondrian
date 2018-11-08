# mondrian

A/B Testing as a Service.

### Getting set up

```sh
git clone https://github.com/orta/mondrian.git
cd mondrian

# Install the AWS CLI
brew bundle
# Node deps
yarn install
```

### Development

To launch the server, run 

```sh
yarn start
```

This runs the same GraphQL server as the lambda instance.

### Deployment

This app uses the [`aws`][aws] cli and [`rollup`][rollup] to handle its deployments, the commands are simplified to
using `package.json`. 

Deployment creates a `dist/` dir, and run's `yarn install` with no dev-deps into that folder, then rollup is used
 to compile our TypeScript into a single file - wrapping up the code.

```sh
# Create the right build folder for the upload
yarn build
# Package the dist folder for uploading to s3
yarn package:staging
# Do the AWS work to set up the lambda function
yarn deploy:staging
```

[rollup]: https://rollupjs.org/guide/en
[aws]: https://aws.amazon.com/cli/
