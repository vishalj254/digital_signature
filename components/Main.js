import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  StatusBar,
  TouchableHighlight,
  PermissionsAndroid
} from 'react-native';
import ScreenBackhandler from './BackHandler/ScreenBackhandler';
import SignatureCapture from 'react-native-signature-capture';
var RNFS = require('react-native-fs');

class Main extends Component {
  
  data=''

  async mkdir(path) {
    return RNFS.mkdir(path);
  }
  
  componentDidMount(){
    PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE)
  }

  componentWillMount(){
    PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE)
  }

  saveSign = () => {
    this.refs['sign'].saveImage();
  };

  resetSign = () => {
    this.refs['sign'].resetImage();
  };

  _onSaveEvent = result => {
    //result.encoded - for the base64 encoded png
    //result.pathName - for the file path name
    alert('Signature Captured Successfully');
    var path = RNFS.ExternalStorageDirectoryPath + '/signature.txt';
    RNFS.writeFile(path,result.encoded, 'ascii')
      .then((success) => {
        console.log('FILE WRITTEN!');
      })
      .catch((err) => {
        console.log(err.message);
      });
  
  };

  _onDragEvent = () => {
    // This callback will be called when the user enters signature
    console.log('dragged');
  };

  render() {
   
    return (
      <View style={{ flex: 1 }}>
       <ScreenBackhandler/>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView style={{ flex: 1 }}>
          <View style={styles.body}>
            <View style={{ flex: 1, flexDirection: 'column' }}>
              <Text style={styles.header}>
                Capture Signature
              </Text>
              <SignatureCapture
                style={styles.signature}
                ref="sign"
                onSaveEvent={this._onSaveEvent}
                onDragEvent={this._onDragEvent}
                showNativeButtons={false}
                showTitleLabel={false}
                viewMode={'portrait'}
              />
              <View style={{ flexDirection: 'row' }}>
                <TouchableHighlight
                  style={styles.buttonStyle}
                  onPress={() => {
                    this.saveSign();
                  }}>
                  <Text>Save</Text>
                </TouchableHighlight>
                <TouchableHighlight
                  style={styles.buttonStyle}
                  onPress={() => {
                    this.resetSign();
                  }}>
                  <Text>Reset</Text>
                </TouchableHighlight>
              </View>
            </View>
          </View>
        </SafeAreaView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    fontSize: 22,
    fontWeight: '600',
    color: 'black',
    textAlign: 'center',
    paddingVertical: 20,
  },
  signature: {
    flex: 1,
    borderColor: '#000033',
    borderWidth: 1,
  },
  buttonStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    backgroundColor: '#eeeeee',
    margin: 10,
  },
});

export default Main;