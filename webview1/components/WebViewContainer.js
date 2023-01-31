import React from 'react';
import {StyleSheet} from 'react-native';
import {WebView} from 'react-native-webview';

const styles = StyleSheet.create({
  webView: {
    width: '100%',
    height: '100%',
  },
});

// /* const styles = StyleSheet.create({
//   sectionContainer: {
//     marginTop: 32,
//     paddingHorizontal: 24,
//   },
//   sectionTitle: {
//     fontSize: 24,
//     fontWeight: '600',
//   },
//   sectionDescription: {
//     marginTop: 8,
//     fontSize: 18,
//     fontWeight: '400',
//   },
//   highlight: {
//     fontWeight: '700',
//   },
// }); */

const WebviewContainer = ({handleSetRef, handleEndLoading}) => {
  /** 웹뷰에서 rn으로 값을 보낼때 거치는 함수 */
  const handleOnMessage = ({nativeEvent: {data}}) => {
    // data에 웹뷰에서 보낸 값이 들어옵니다.
    console.log(data);
  };

  return (
    <WebView
      style={styles.webView}
      onLoadEnd={handleEndLoading}
      onMessage={handleOnMessage}
      ref={handleSetRef}
      source={{uri: 'http://localhost:3000'}}
    />
  );
};

export default WebviewContainer;
