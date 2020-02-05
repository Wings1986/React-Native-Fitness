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
import { StopConfirmModel } from '../StopConfirmModel/index.js';



// import FontAwesome from 'react-native-vector-icons/FontAwesome';
// import EntypoIcon from 'react-native-vector-icons/Entypo';
// import Ionicons from 'react-native-vector-icons/Ionicons';
// import * as RNLocalize from 'react-native-localize';
// import * as myLanguage from '../../translations/index.js';
// import GlobalInclude from "../../../../Global/GlobalInclude/globalinclude.js";

//GUIDELINE SIZES ARE BASED ON STANDARD ~5" SCREEN
// BEGIN TO SETUP FONT-TYPE AND FONT-SIZE
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
// END TO SETUP FONT-TYPE AND FONT-SIZE
// let {width, height} = Dimensions.get('window');



export default class ExerciseScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

        isShowModal: false,
        active: 0,
        progressStatus : 0,
        currentTime : 0,
        currentActionImg : require('../../assets/images/image_1.png'),
    };
    let platform = Platform.OS;
    this.onDismissModalByStop = this.onDismissModalByStop.bind(this);
    this.onDismissModalByCancel = this.onDismissModalByCancel.bind(this);

    this.timer = null;
    this.timeDuration = 0.4 * 60;
    this.progressStep = 1 / this.timeDuration;
  }

  componentDidMount() {
     this.updateCurrentStatus(); 
  }

  updateCurrentStatus(){
    this.timer = setInterval(() => {
      this.setState({progressStatus : this.state.progressStatus + this.progressStep});
      if (this.state.progressStatus + this.progressStep >= 1){
        this.setState({progressStatus : 0});
        this.props.navigation.navigate('DayCompleteScreen')
        return;
      }

      this.setState({currentTime : this.state.currentTime + 1});

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

  handleLocalizationChange = () => {
    myLanguage.setI18nConfig();
    this.forceUpdate();
  };
  
  onDismissModalByStop(){
    this.setState({isShowModal : false});
    this.props.navigation.goBack();
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
          fontSize: 40,
          
          marginVertical: 30,
          justifyContent:'center',
          alignItems:'center',
          fontWeight:'bold',
          textAlign: 'center'
          }}>
          {curMin}:{curSec}
      </Text>
    )
  }

  render() {
    const color = 'black';
    return (
      <Container style={{backgroundColor:colors.backgroundColor}}>
            <Header hasTabs style={globalStyle.headerContainer}>
                <Left style={{flex: 1}}>
                    <Button transparent onPress={() => this.props.navigation.goBack()}>
                        <Ionicons
                            name="ios-arrow-back"
                            size={25}
                            style={{color: colors.colorRedLight}}
                        />
                    </Button>
                </Left>
                <Body style={{flex: 3, alignItems: 'center'}}>
                <Title > </Title>
                </Body>
                <Right style={{flex: 1}}>
                </Right>
            </Header>

          {/* <Container> */}
            <View style={{flex:1}}>
                <View      
                    style={{
                        width:'100%',
                        height:50,
                        backgroundColor:colors.lightBlue,
                        alignSelf: 'center',
                        alignItems: 'center',
                        justifyContent:'center',
                    }}>
                    <Dots length={20}  active={this.state.active} activeColor='#FFFFFF' passiveColor='#FFFFFF88'/>
                </View>
                <Text
                    style={{
                    width:'100%',
                    color: colors.lightBlue,
                    fontSize: 16,
                    marginTop:50,
                    marginBottom: 35,
                    justifyContent:'center',
                    alignItems:'center',
                    alignSelf: 'center',
                    fontWeight:'bold',
                    textAlign: 'center'
                    }}
                    >
                    Бег, колени вверх
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

          <Footer style={globalStyle.FooterContainer}>
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


          <StopConfirmModel
            isShowModal = {this.state.isShowModal}
            onDismissModalByCancel = {this.onDismissModalByCancel}
            onDismissModalByStop = {this.onDismissModalByStop}
          >
          </StopConfirmModel>

      </Container>
 
    );
  }
}
// BEGIN TO MAKE STYLE 
const styles = StyleSheet.create({
  background_image: {
    flex: 1,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  header: {
    backgroundColor: 'rgba(0,0,0,0)',
    height: Dimensions.get('window').width * 0.15,
    borderBottomWidth: 0,
    ...Platform.select({
      ios: {},
      android: {
        marginTop: moderateScale(25),
      },
    }),
    elevation: 0,
  },
  timeText : {
      fontSize:20,
      fontWeight:'bold',
      color:'white',
  },
  flatListItemView:{
      flexDirection:'row',
      width:'100%',
      paddingHorizontal:20,
      paddingVertical:10,
      justifyContent:'center',
  },

  fitness_image: {
    width: 36,
    height: 40,
    marginRight: 20,
    resizeMode:'stretch'
  },
  actionTitleText:{
      color:colors.actionText,
      fontSize:18,
      fontWeight:'bold'
  },
  actionTimeText:{
    color:colors.actionText,
  },
  separator:{
      height:15
  },
  FooterContainer:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
  },
  footerImageView:{
      width:50,
      height:50
  },
  container:{
      flex:1
  }
});
// END TO MAKE STYLE
