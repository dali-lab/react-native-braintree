# react-native-braintree

React Native integration for BrainTree Venmo payments. Currently only has Venmo enabled and only tested with iOS.

## Usage

```js
import Braintree from "react-native-braintree";

Braintree.config({ clientToken: YOUR_TOKEN_HERE });

// ...
<Braintree 
  isShown={isShown} 
  onCompleteTransaction={onComplete} 
/>

```
## Props

**Required props are marked with `*`.**

| Name                    | Type                                                 | Default | Description                                                              |
|-------------------------|------------------------------------------------------|---------|--------------------------------------------------------------------------|
| `isShown`               | `bool`                                               | `false` | When true, triggers the payment dialog to show.                          |
| `onCompleteTransaction` | `( result :  BTDropInResult  \|  Error )  =>   void` |         | Callback function that is triggered when the payment flow has completed. |

## Development workflow

To get started with the project, run `yarn` in the root directory to install the required dependencies for each package:

```sh
yarn
```

> While it's possible to use [`npm`](https://github.com/npm/cli), the tooling is built around [`yarn`](https://classic.yarnpkg.com/), so you'll have an easier time if you use `yarn` for development.

While developing, you can run the [example app](/example/) to test your changes. Any changes you make in your library's JavaScript code will be reflected in the example app without a rebuild. If you change any native code, then you'll need to rebuild the example app.

To start the packager:

```sh
yarn example start
```

To run the example app on Android:

```sh
yarn example android
```

To run the example app on iOS:

```sh
yarn example ios
```

Make sure your code passes TypeScript and ESLint. Run the following to verify:

```sh
yarn typescript
yarn lint
```

To fix formatting errors, run the following:

```sh
yarn lint --fix
```

Remember to add tests for your change if possible. Run the unit tests by:

```sh
yarn test
```

To edit the Objective-C files, open `example/ios/BraintreeExample.xcworkspace` in XCode and find the source files at `Pods > Development Pods > react-native-braintree`.

To edit the Kotlin files, open `example/android` in Android studio and find the source files at `reactnativebraintree` under `Android`.

## Publishing to npm

We use [release-it](https://github.com/release-it/release-it) to make it easier to publish new versions. It handles common tasks like bumping version based on semver, creating tags and releases etc.

To publish new versions, run the following:

```sh
yarn release
```

## Scripts

The `package.json` file contains various scripts for common tasks:

- `yarn bootstrap`: setup project by installing all dependencies and pods.
- `yarn typescript`: type-check files with TypeScript.
- `yarn lint`: lint files with ESLint.
- `yarn test`: run unit tests with Jest.
- `yarn example start`: start the Metro server for the example app.
- `yarn example android`: run the example app on Android.
- `yarn example ios`: run the example app on iOS.

## License

MIT
