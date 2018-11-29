
import * as React from 'react';
import { Text, View, StyleSheet,Button  } from 'react-native';
import { Constants, Camera, Permissions, FaceDetector} from 'expo';
import { createStackNavigator } from "react-navigation";
// import StartPage from "./components/StartPage";

import { Card } from 'react-native-paper';

export default class Quiz extends React.Component {
 state = {
        hasCameraPermission: null,
        type: Camera.Constants.Type.front,
    };

async componentDidMount() {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({ 
      hasCameraPermission: status === 'granted' 
    });
}
snap = async (props) => {
    if (this.camera) {
        let photo = await this.camera.takePictureAsync();
        const options = { mode: FaceDetector.Constants.Mode.fast }
        const result = await FaceDetector.detectFacesAsync(photo.uri, options);
        console.log(result);
        if (result.faces.length > 0) {  
            console.log("Match found");
            console.log("result.faces.length",result);
               this.props.navigation.navigate("Quiz");
          
            // this.props.startQuiz();
        }
            console.log("result.faces.length",props);
        // this.props.navigation.navigate("Quiz");
    }
}

  render() {
      // {this.props.navigation.navigate("Quiz")}
      const { hasCameraPermission } = this.state;
      if (hasCameraPermission === null) {
          return <View />;
      } else if (hasCameraPermission === false) {
          return <Text>No access to camera</Text>;
      } else {
          return (
              <View style={{ flex: 1 }}>
                  <Camera
                      ref={ref => this.camera = ref}
                      style={{ flex: 1 }} type={this.state.type}>
              <View
                  style={{
                      flex: 1,
                      backgroundColor: 'transparent',
                      justifyContent: 'flex-end',
                      // alignItems:'center'
                  }}>
                <Button
                    onPress={this.snap}
                    raised
                    borderRadius={10}
                    icon={{ name: 'expand-less', size: 32 }}
                    buttonStyle={{ backgroundColor: '#00bfff', borderRadius: 10 }}
                    textStyle={{ textAlign: 'center' }}
                    title={`Capture`}
                />
                      </View>
                  </Camera>
              </View>
          );
      }
  }
}
