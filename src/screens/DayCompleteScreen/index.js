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



const { width, height } = Dimensions.get("window");

export default class DayCompleteScreen extends React.Component {

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
                Время тренировки
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
                14 минут
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
                Потрачено сегодня
            </Text>

            <Text
                style={{
                color: colors.lightBlue,
                fontSize: 28,
                justifyContent:'center',
                alignItems:'center',
                fontWeight:'bold'
                }}>
                120 ккал
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
