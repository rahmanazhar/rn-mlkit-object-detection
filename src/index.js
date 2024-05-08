import { NativeModules } from 'react-native';
const { RNMLKitObjectDetection } = NativeModules;

// ObjectDetectorMode constants
const ObjectDetectorMode = {
  STREAM: 0,
  SINGLE_IMAGE: 1,
};

// Default options configuration
const defaultOptions = {
  detectorMode: ObjectDetectorMode.STREAM,
  shouldEnableClassification: false,
  shouldEnableMultipleObjects: false,
};

// Helper function to unwrap result or reject with error
const unwrapResult = (res) =>
  'error' in res ? Promise.reject(res) : res;

// Function wrapper that handles object detection
const wrapper = {
  detectFromUri: (
    uri,
    config = defaultOptions
  ) => {
    const detectorMode = config.detectorMode === ObjectDetectorMode.STREAM || config.detectorMode === ObjectDetectorMode.SINGLE_IMAGE
      ? config.detectorMode
      : defaultOptions.detectorMode;
    const shouldEnableClassification = config.shouldEnableClassification ? 1 : 0;
    const shouldEnableMultipleObjects = config.shouldEnableMultipleObjects ? 1 : 0;

    return RNMLKitObjectDetection.detectFromUri(
      uri,
      detectorMode,
      shouldEnableClassification,
      shouldEnableMultipleObjects
    ).then(unwrapResult);
  },
};

export default wrapper;
