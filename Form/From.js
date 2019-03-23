import React from 'react';
import { StyleSheet, Text, View,Picker,Image,TextInput } from 'react-native';
import { Icon } from 'react-native-elements';

export default class Form extends React.Component {
  constructor(){
    super()
    this.state={
      text:'',
      jantina:'',
      Negari:'',
    }
  }


  onChangeText=(e)=>{
    this.setState({
      text:e
    })
 } 
  render() {
    console.log("===",this.state.text)
    console.log("===",this.state.jantina)
    console.log("===",this.state.Negari)
    console.log("===",this.state.language)
    return (
        <View style={styles.container}>
        <Image
        // insert image path -----
          source={require('../assets/kafe1.jpegs')}
          style={styles.Image}
        />
       
        <View style={styles.Input1}>
          <TextInput
            onChangeText={this.onChangeText}
            style={styles.Input}
            placeholder=' Nama pangguna'
            placeholderTextColor="#FBFFFD" 
        />
        </View>
        <View style={styles.Input1}>
          <TextInput
            onChangeText={this.onChangeText}
            style={styles.Input}
            placeholder=' Nama pangguna'
            placeholderTextColor="#FBFFFD" 
        />
        </View>
          
        <Picker  
            style={styles.Picker}
            selectedValue={this.state.jantina}
            onValueChange={(itemValue,itemIndex) =>this.setState({jantina:itemValue})}
            >
            {/* <Icon name="md-arrow-dropdown"/> */}
            <Picker.Item label="Select A Option" value=""/>
            <Picker.Item label="Usama" value="Usama"/>
            <Picker.Item label="Ayan" value="Ayan"/>
            <Picker.Item label="Umer" value="Umer"/>
        </Picker>

        <View style={styles.Input1}>
          <TextInput
            onChangeText={this.onChangeText}
            style={styles.Input}
            placeholder=' Nama pangguna'
            placeholderTextColor="#FBFFFD" 
        />
        </View>
         <Picker  
            style={styles.Picker}
            selectedValue={this.state.Negari}
            onValueChange={(itemValue,itemIndex) =>this.setState({Negari:itemValue})}
            >
            <Picker.Item label="Select A Option" value=""/>
            <Picker.Item label="One" value="1"/>
            <Picker.Item label="Two" value="2"/>
            <Picker.Item label="Three" value="3"/>
       
        </Picker>
          
        <View style={styles.Input1}>
          <TextInput
            onChangeText={this.onChangeText}
            style={styles.Input}
            placeholder=' Nama pangguna'
            placeholderTextColor="#FBFFFD" 
        />
        </View>
        <View style={styles.Input1}>
          <TextInput
            onChangeText={this.onChangeText}
            style={styles.Input}
            placeholder=' Nama pangguna'
            placeholderTextColor="#FBFFFD" 
        />
        </View>
           
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#ff8200',
    alignItems: 'center',
    justifyContent: 'center',
    // justifyContent: 'space-between',
  },
  Image:{
    backgroundColor:'#ff8200',
    color:'#ff8200',
    height:85,
    width:120,
    borderRadius:50,
    marginTop:100,
},
  Picker:{
    width:'80%',
    // color:'#AAB0AD',
    color:'black',
    backgroundColor:'#FBFFFD',
    borderRadius: 1,
    marginTop:20,
    borderColor: '#d6d7da',
    // backgroundColor:'white',
  },
  Input1:{
    height: 45,
    color:'#FBFFFD',
    width:'80%',
    marginTop:30,
    marginLeft:2,
    borderBottomWidth: 1,
    borderBottomColor: '#FBFFFD' ,
  },
});
