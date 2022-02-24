/* eslint-disable react-native/no-inline-styles */
import React from 'react';

import {
  View,
  Text,
  TouchableOpacity,
  useColorScheme,
  Platform,
  Dimensions,
} from 'react-native';
import Video from 'react-native-video-picture-in-picture';

// // Enter Pip mode
// AndroidPip.enterPictureInPictureMode()

// //Configure aspect ratio, works only on SDK version 26 and above
// AndroidPip.configureAspectRatio(width, height)

// // When enabled, PIP mode will be automatically entered when app is unfocused( User presses home, menu button etc)
// AndroidPip.enableAutoPipSwitch()
// AndroidPip.disableAutoPipSwitch()

const { width } = Dimensions.get('screen');

export default function App() {
  let player = React.useRef();
  const isDarkMode = useColorScheme() === 'dark';

  const onError = () => {};

  const onLoad = () => {};

  const onLoadStart = () => {
    if (Platform.OS === 'ios') {
    }
  };

  const VideoComponent = () => (
    <Video
      source={{
        uri: 'https://multiplatform-f.akamaihd.net/i/multi/will/bunny/big_buck_bunny_,640x360_400,640x360_700,640x360_1000,950x540_1500,.f4v.csmil/master.m3u8',
        type: 'm3u8',
      }}
      onLoad={() => {
        onLoad();
      }}
      repeat
      volume={1}
      allowsExternalPlayback
      playInBackground={true}
      // playWhenInactive={true}
      rate={1.0}
      // controls
      onLoadStart={() => {
        onLoadStart();
      }}
      ref={(ref) => {
        player = ref;
      }}
      onError={onError} // Callback when video cannot be loaded
      style={{
        backgroundColor: 'black',
        width: '100%',
        height: '100%',
      }}
    />
  );

  return (
    <View
      style={{
        backgroundColor: isDarkMode ? '#000' : '#fff',
        width: '100%',
        height: '100%',
        position: 'relative',
      }}
    >
      {VideoComponent()}
    </View>
  );
}
