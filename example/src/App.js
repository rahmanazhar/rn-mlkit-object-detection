// Contents of this file is adapted from https://github.com/agoldis/react-native-mlkit-ocr/blob/main/example/src/App.tsx

import React from 'react';
import { StyleSheet, Button, SafeAreaView, Text } from 'react-native';
import { launchImageLibrary } from 'react-native-image-picker';
import MlkitOdt from 'react-native-mlkit-odt';

export default function App() {
  const [result, setResult] = React.useState();
  const [, setImage] = React.useState();

  if (result) {
    console.log('[RESULT]', result);
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text>{JSON.stringify(result)}</Text>
      <Button
        onPress={() => launchGallery(setResult, setImage)}
        title="Start"
      />
    </SafeAreaView>
  );
}

function launchGallery(setResult, setImage) {
  setResult([{ type: 'no-result' }]);
  launchImageLibrary(
    {
      mediaType: 'photo',
    },
    async (response) => {
      if (!response.uri) {
        throw new Error('oh!');
      }
      try {
        setImage(response);
        const detectionResult = await MlkitOdt.detectFromUri(response.uri, {
          detectorMode: 1, // ObjectDetectorMode.SINGLE_IMAGE
          shouldEnableClassification: false,
          shouldEnableMultipleObjects: false,
        });
        setResult(detectionResult);
      } catch (e) {
        console.error(e);
      }
    }
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  scroll: {
    width: '100%',
    borderColor: 'red',
    borderWidth: 1,
  },
});
