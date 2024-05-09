# rn-mlkit-object-detection

Google on-device MLKit object detection for React Native 

## Installation

### NPM

```sh
npm install rn-mlkit-object-detection
```

### Yarn
```sh
yarn add rn-mlkit-object-detection
```

## Usage

```js
import RNMLKitObjectDetection, { ObjectDetectorMode } from 'rn-mlkit-object-detection';

const result = await RNMLKitObjectDetection.detectFromUri(uri, {
  detectorMode: ObjectDetectorMode.SINGLE_IMAGE,
  shouldEnableClassification: true,
  shouldEnableMultipleObjects: true,
});
// OR detect with default config
const result = await RNMLKitObjectDetection.detectFromUri(uri);
```

## To-do

1. Android examples
2. IOS examples

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT
