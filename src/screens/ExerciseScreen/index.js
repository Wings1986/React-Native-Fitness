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

//import PaginationDot from 'react-native-animated-pagination-dot'
import Dots from 'react-native-dots-pagination'
import * as Progress from 'react-native-progress';

import globalStyle from '../../style/globalStyle.js';
import { Ionicons } from '@expo/vector-icons';
import colors from '../../style/colors.js';

import { LinearGradient } from 'expo-linear-gradient';

import * as myLanguage from  './../../translations/index.js';

import { StopConfirmModal } from '../StopConfirmModal/index.js';

const guidelineBaseWidth = 350;
const guidelineBaseHeight = 680;
const scale = size =>
  (Dimensions.get('window').width / guidelineBaseWidth) * size;
const moderateScale = (size, factor = 0.5) =>
  size + (scale(size) - size) * factor;
const font_type = {
  FontLight: 'Helvetica',
  FontBold: 'Helvetica-Bold',
};


export default class ExerciseScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

        isShowModal: false,
        
        curActive : 0,

        progressStatus : 0,
        currentTime : 0,
        currentActionImg : require('../../assets/images/image_1.png'),
    };
    let platform = Platform.OS;

    this.exercises = this.props.navigation.getParam('exercises', []);

    this.onDismissModalByStop = this.onDismissModalByStop.bind(this);
    this.onDismissModalByCancel = this.onDismissModalByCancel.bind(this);

    this.timer = null;
    this.timeDuration = 0.4 * 60;
    this.progressStep = 1 / this.timeDuration;
  }

  componentDidMount() {
    
    this.gotoExercise(0);
    
  }

  gotoExercise(step) {

    this.setState({
      curActive: step,
      progressStatus : 0,
      currentTime : this.exercises[step].Duration // 0
    }, () => {


    });

    if(this.timer != null) {
      clearInterval(this.timer);
    }
    
    this.timer = null;
    this.timeDuration = this.exercises[step].Duration;
    this.progressStep = 1 / this.timeDuration;

    this.updateCurrentStatus(); 

    
  }


  updateCurrentStatus(){

    console.log("curActive = " + this.state.curActive);
    console.log("progressStatus = " + this.state.progressStatus);
    console.log("currentTime = " + this.state.currentTime);

    this.timer = setInterval(() => {
      this.setState({progressStatus : this.state.progressStatus + this.progressStep});
      if (this.state.progressStatus + this.progressStep >= 1){
        //this.setState({progressStatus : 0});

        if (this.state.curActive < this.exercises.length - 1) {
          this.gotoExercise(this.state.curActive + 1)
        }
        else {
          this.gotoComplete();
        }
        
        return;
      }

      this.setState({currentTime : this.state.currentTime - 1});

      let currentActionImg;
      let value = Math.floor(this.state.currentTime / 2) % 5;

      switch(value){
        case 1:
          currentActionImg = require('../../assets/images/image_1.png');
          break;
        case 2:
          currentActionImg = require('../../assets/images/image_2.png');
          break;
        case 3:
          currentActionImg = require('../../assets/images/image_3.png');
          break;
        case 4:
          currentActionImg = require('../../assets/images/image_4.png');
          break;
        case 0:
          currentActionImg = require('../../assets/images/image_5.png');
          break;
        // default:
        //   currentActionImg = require('../../assets/images/image_1.png');
        //   break;
      }
      this.setState({currentActionImg : currentActionImg});
    }, 1000);
  }
  
  onDismissModalByStop(){
    this.setState({isShowModal : false});
    clearInterval(this.timer);
    this.props.navigation.goBack();
  }

  gotoComplete() {
    clearInterval(this.timer);
    this.props.navigation.navigate('DayCompleteScreen')
  }

  onDismissModalByCancel(){
    this.setState({isShowModal : false});
    this.updateCurrentStatus(); 
  }

  onPressPause(){
    clearInterval(this.timer);
    this.setState({isShowModal : true});
  //  this.props.navigation.navigate('DayCompleteScreen')
  // this.props.navigation.goBack();
  }

  renderCurrentTimePassed(){
    let curMin = Math.floor(this.state.currentTime / 60);
    if (curMin < 10) {
      curMin = "0" + curMin
    }

    let curSec = this.state.currentTime % 60;
    if (curSec < 10) {
      curSec = "0" + curSec
    }
    return(
      <Text
          style={{
          color: colors.lightBlue,
          fontSize: 45,
          
          marginBottom: 50,
          justifyContent:'center',
          alignItems:'center',
          fontWeight:'bold',
          textAlign: 'center'
          }}>
          {curMin} : {curSec}
      </Text>
    )
  }

  render() {
    const color = 'black';
    return (
      <Container>

        <LinearGradient 
          style={{flex:1}}
          start={{x: 0, y: 0}} 
          end={{x: 0, y: 1}} 
          colors={['#55D3CB', '#A5D3D0', '#FFFFFF']}>

            <Header hasTabs style={globalStyle.headerContainer}>
                <Left style={{flex: 1}}>
                    <Button style={{marginLeft:10}} transparent onPress={() => this.props.navigation.goBack()}>
                        <Ionicons
                            name="md-arrow-back"
                            size={30}
                            style={{color:'#FFFFFF',}}
                        />
                    </Button>
                </Left>
                <Body style={{flex: 3, alignItems: 'center'}}>
                    <Title style={{color:'white'}}> {this.state.curActive+1 + " / " + this.exercises.length} </Title>
                </Body>
                <Right style={{flex: 1}}>
                </Right>
            </Header>

            <View      
                    style={{
                        width:'100%',
                        height:35,
                        alignSelf: 'center',
                        alignItems: 'center',
                        justifyContent:'center',
                        marginTop:5,
                    }}>
                    <Dots length={this.exercises.length}  active={this.state.curActive} 
                          activeColor='#FFFFFF' passiveColor='#FFFFFF88'
                          activeDotWidth={10} activeDotHeight={10}
                          passiveDotWidth={8} passiveDotHeight={8}/>
                </View>

            <View style={{flex:1, backgroundColor:'#F8FEFD'}}>
                
                <Text
                    style={{
                    width:'100%',
                    color: colors.lightBlue,
                    fontSize: 25,
                    marginTop:38,
                    marginBottom: 20,
                    justifyContent:'center',
                    alignItems:'center',
                    alignSelf: 'center',
                    fontWeight:'bold',
                    textAlign: 'center'
                    }}
                    >
                    {myLanguage.translate('exercise_title')}
                </Text>

                <View style={{ 
                    width:'100%', 
                    flex:1,
                    justifyContent:'center', 
                    alignItems:'center', 
                    marginVertical:30,
                    }}>
                     <Image
                        // source={require('../../assets/images/image_detail.png')}
                        source={this.state.currentActionImg}
                        style={{resizeMode:'cover',}}>
                     </Image>
                </View>
                {this.renderCurrentTimePassed()}
            </View>
          <Progress.Bar 
            progress={this.state.progressStatus} 
            color={colors.lightBlue} 
            unfilledColor= '#55D3CB55'
            borderWidth={0} 
            width={Dimensions.get('window').width} 
            borderRadius = {0}
            height={3}
            />

          <Footer style={[globalStyle.FooterContainer, {borderTopWidth:0}]}>
                <TouchableOpacity 
                    style={{flex:1,justifyContent:'center', flexDirection:'row'}}
                    onPress={()=>this.onPressPause()}
                    >
                    <Image
                        source={require('../../assets/images/pause.png')}
                        style={styles.footerImageView}>
                     </Image>
                </TouchableOpacity>
          </Footer>


          <StopConfirmModal
            isShowModal = {this.state.isShowModal}
            onDismissModalByCancel = {this.onDismissModalByCancel}
            onDismissModalByStop = {this.onDismissModalByStop}
          >
          </StopConfirmModal>

        </LinearGradient>
      </Container>
 
    );
  }
}
// BEGIN TO MAKE STYLE 
const styles = StyleSheet.create({
 
  footerImageView:{
      width:60,
      height:60
  },

});
// END TO MAKE STYLE
