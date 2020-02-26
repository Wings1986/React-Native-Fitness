import React, { Component, } from "react";
import {
  Text,
  View,
  Image,
  StatusBar,
  Platform,
  ImageBackground,
  TouchableOpacity,
  BackHandler,
  I18nManager,
  StyleSheet,
  Dimensions,
  Alert,
  KeyboardAvoidingView,
  FlatList,
  
} from 'react-native';
import {
  Container,
  Button,
  Right,
  Item,
  Input,
  Content,
  Header,
  Footer,
  Left,
  Body,
  Title,
  Form,
} from 'native-base';
import colors from "../../style/colors";
import globalStyle from '../../style/globalStyle.js';

import * as myLanguage from  './../../translations/index.js';

const { width, height } = Dimensions.get("window");

export default class DayCompleteScreen extends React.Component {

  componentDidMount() {
    myLanguage.setI18nConfig();
  }

  onPressRefresh(){
    this.props.navigation.navigate('DayScreen')
  }  


  render() {
    return (
        <View style={{ flex: 1, backgroundColor:'#F8FEFD', justifyContent:'center', alignContent:'center', alignItems:'center'}}>

            <Text
                style={{
                color: colors.lightBlueAlpha,
                fontSize: 14,
                marginTop:110,
                marginBottom: 5,
                justifyContent:'center',
                alignItems:'center',
                }}>
                {myLanguage.translate('train_time')}
            </Text>

            <Text
                style={{
                color: colors.lightBlue,
                fontSize: 28,
                marginBottom: 15,
                justifyContent:'center',
                alignItems:'center',
                fontWeight:'bold'
                }}>
                {14 + " " + myLanguage.translate('min')}
            </Text>


            <Text
                style={{
                color: colors.lightBlueAlpha,
                fontSize: 14,
                marginTop:25,
                marginBottom: 5,
                justifyContent:'center',
                alignItems:'center',
                }}>
                {myLanguage.translate('spend_today')}
            </Text>

            <Text
                style={{
                color: colors.lightBlue,
                fontSize: 28,
                justifyContent:'center',
                alignItems:'center',
                fontWeight:'bold'
                }}>
                {12 + " " + myLanguage.translate('kcal')}
            </Text>


              <View style={{ 
                  flex:1,
                  width:'100%', 
                  justifyContent:'center', 
                  alignItems:'center', 
                  marginTop:40,
                  marginBottom:25
                } }>
                   <Image
                      source={require('../../assets/images/illustration.png')}
                      style={{resizeMode:'cover', width:'100%', height:"100%"}}>
                   </Image>
              </View>

              <Footer style={globalStyle.FooterContainerNoline}>
                <TouchableOpacity 
                    style={{flex:1,justifyContent:'center', flexDirection:'row'}}
                    onPress={()=>this.onPressRefresh()}
                    >
                    <Image
                        source={require('../../assets/images/refresh.png')}
                        style={styles.footerImageView}>
                    </Image>
                </TouchableOpacity>

              </Footer>

         
      </View>
    );
  }
}

const styles = StyleSheet.create({
  
  footerImageView:{
    width:40,
    height:40
  },
});
