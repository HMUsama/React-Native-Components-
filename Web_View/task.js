import React from 'react';
import { StyleSheet,  View, Image,Linking ,
         Dimensions,KeyboardAvoidingView,ScrollView,Button,WebView,
         ImageBackground,TextInput ,TouchableOpacity} from 'react-native';
import {  Container, Content, Header,Left,Title,Footer,
     ListItem,Body, InputGroup, Input, Text, Picker, Card, CardItem,} from 'native-base'
import { Constants,LinearGradient  } from 'expo';
import Icon from 'react-native-vector-icons/FontAwesome'
import * as firebase from 'firebase';
import 'firebase/firestore';


const { width:WIDTH ,height:HEIGHT} = Dimensions.get('window')

class Task extends React.Component {
  constructor(){
    super()
    this.state = {
      yes:false,
      btnLogic:true
    }
  }
  click=()=>{
    this.setState({
      yes:true,
      btnLogic:false
    })
  }
  click_Hide=()=>{ 
    this.setState({
      yes:false,
      btnLogic:true
    })
  }

render() {
  console.log("===========")
  return (
    <Container style={{marginTop: Constants.statusBarHeight}}>
        <Content style={styles.Container}>
          {
            this.state.btnLogic ?
            <Button title="Click Show" onPress={this.click}/>:
            <Button title="Click Hide" onPress={this.click_Hide}/>
          }
            { 
                this.state.yes ?
                <ScrollView>
                <WebView
                source={{uri: 'https://google.com'}}
                style={{marginTop: 20,width:WIDTH,height:HEIGHT}}
                />
                </ScrollView>:
            <Text>Search the Web</Text>
            }
        </Content> 
    </Container>
    );
  }
}

export default Task;

const styles = StyleSheet.create({
    Container:{
        backgroundColor:'#9090'
    }
})

