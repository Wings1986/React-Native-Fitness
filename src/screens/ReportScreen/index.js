/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
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
} from 'react-native';
import {
  Container,
  Button,
  Right,
  Header,
  Footer,
  Left,
  Body,
  Title,
} from 'native-base';

import {Calendar, CalendarList, Agenda} from 'react-native-calendars';


import globalStyle from '../../style/globalStyle.js';
import { Ionicons } from '@expo/vector-icons';
import colors from '../../style/colors.js';

import { LinearGradient } from 'expo-linear-gradient';

import * as myLanguage from  './../../translations/index.js';
import { Colors } from 'react-native/Libraries/NewAppScreen';



export default class ReportScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedColor : colors.lightBlue,

    };


  }

  

  render() {
    const color = 'black';
    return (
      <Container style={{flex:1, backgroundColor:colors.backgroundColor}}>
            <Header hasTabs style={[globalStyle.headerContainer, {borderBottomWidth: 1, borderBottomColor:'#55D3CB44', opacity:1}]}>
                <Left style={{flex: 1}}>
                    <Button style={{marginLeft:10}} transparent onPress={() => this.props.navigation.goBack()}>
                        <Ionicons
                            name="md-arrow-back"
                            size={30}
                            style={{color:colors.lightBlue,}}
                        />
                    </Button>
                </Left>
                <Body style={{flex: 3, alignItems: 'center'}}>
                    <Title style={{color:colors.lightBlue}}> {myLanguage.translate('report')} </Title>
                </Body>
                <Right style={{flex: 1}}>
                  <Image
                      source={require('../../assets/images/more.png')}
                      style={{width:30, height:30, position:'absolute', right:5, alignItems:'center',alignSelf:
                      'center'}}>
                  </Image>
                </Right>
            </Header>


            <View style={{flex:1,  alignItems:'center', }}>
                
              <Calendar
                // Collection of dates that have to be marked. Default = {}
                markedDates={{
                  '2020-03-16': {selected: true, selectedColor: this.state.selectedColor},
                  '2020-03-17': {selected: true, selectedColor: this.state.selectedColor},
                  '2020-03-18': {selected: true, selectedColor: this.state.selectedColor},
                  '2020-03-19': {selected: true, selectedColor: this.state.selectedColor}
                }}

                theme={{
                  backgroundColor: '#ffffff',
                  calendarBackground: colors.backgroundColor,
                  textSectionTitleColor: '#b6c1cd',
                  selectedDayBackgroundColor: '#00adf5',
                  selectedDayTextColor: '#ffffff',
                  
                  todayTextColor: colors.lightBlue,
                  dayTextColor: '#97BBBB',
                  textDisabledColor: '#d9e1e8',
                  // dotColor: '#00adf5',
                  // selectedDotColor: '#ffffff',
                  // arrowColor: 'orange',
                  // disabledArrowColor: '#d9e1e8',
                  // monthTextColor: 'blue',
                  // indicatorColor: 'blue',
            
                  textDayFontWeight: '600',
                  textMonthFontWeight: 'bold',
                  textDayHeaderFontWeight: '300',
                  textDayFontSize: 16,
                  textMonthFontSize: 16,
                  // textDayHeaderFontSize: 16,

                  
                  indicatorColor: 'white',
                  'stylesheet.calendar.header': {
                    week: {
                      marginTop: 5,
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                    }
                  }
                }}

                style={{
                  // height: '50%',
                  marginTop:40,
                  width: '100%'
                }}
              />

              <Text
                  style={{
                  color: colors.lightBlueAlpha,
                  fontSize: 14,
                  marginTop:75,
                  marginBottom: 5,
                  justifyContent:'center',
                  alignItems:'center',
                  }}>
                  {myLanguage.translate('Total_workouts')}
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
                  {5 + " " + myLanguage.translate('day')}
              </Text>


              <Text
                  style={{
                  color: colors.lightBlueAlpha,
                  fontSize: 14,
                  marginTop:50,
                  marginBottom: 5,
                  justifyContent:'center',
                  alignItems:'center',
                  }}>
                  {myLanguage.translate('Total_training_time')}
              </Text>

              <Text
                  style={{
                  color: colors.lightBlue,
                  fontSize: 28,
                  justifyContent:'center',
                  alignItems:'center',
                  fontWeight:'bold'
                  }}>
                  {14 + " " + myLanguage.translate('short_min') + "  52 " + myLanguage.translate('short_sec')}
              </Text>

              <Text
                  style={{
                  color: colors.lightBlueAlpha,
                  fontSize: 14,
                  marginTop:50,
                  marginBottom: 5,
                  justifyContent:'center',
                  alignItems:'center',
                  }}>
                  {myLanguage.translate('Spent_all_cal')}
              </Text>

              <Text
                  style={{
                  color: colors.lightBlue,
                  fontSize: 28,
                  justifyContent:'center',
                  alignItems:'center',
                  fontWeight:'bold'
                  }}>
                  {487 + " " + myLanguage.translate('kcal')}
              </Text>
            </View>
      </Container>
 
    );
  }
}
// BEGIN TO MAKE STYLE 
const styles = StyleSheet.create({
 

});
// END TO MAKE STYLE
