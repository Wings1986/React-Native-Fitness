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
import globalStyle from '../../style/globalStyle.js';
import { Ionicons } from '@expo/vector-icons';
import colors from '../../style/colors.js';

import { LinearGradient } from 'expo-linear-gradient';

import {DescriptionModal} from './../DescriptionModal';
// import {DescriptionModal} from './../StopConfirmModel';

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

export default class DayScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        flatListItemArray:[0,0,0,1,1,1],
        isShowDescriptionModal: false,

    };
    let platform = Platform.OS;
    this.onPressDismissModal = this.onPressDismissModal.bind(this);
  }

  componentDidMount() {
    // RNLocalize.addEventListener('change', this.handleLocalizationChange);
  }

  
  showAlert(alertTitle, alertContent) {
    Alert.alert(
      alertTitle,
      alertContent,
      [{text: 'OK', onPress: () => console.log('OK Pressed')}],
      {cancelable: false},
    );
  }

  onPressDescriptionModal(){

    this.setState({isShowDescriptionModal : true});
    
  }

  onPressDismissModal(){
    this.setState({isShowDescriptionModal : false});
  }

  onPressPlay(){

      this.props.navigation.navigate('ExerciseScreen')
  }

  renderFeedItem(item, index) {
    /* Component for Comment */
    return (

      <TouchableOpacity onPress={()=>this.onPressDescriptionModal()}>

        <View style={styles.flatListItemView}>
        
            <Image
              source={require('../../assets/images/image_3.png')}
              style={styles.fitness_image}
            />

            <View style={{flex:4,justifyContent: 'center',}}>
                <Text style={styles.actionTitleText}>Бег, колени вверх</Text>
                <Text style={styles.actionTimeText}>15 секунд</Text>

            </View>
            {
                item == 1?
                <View
                style={{flex:1, justifyContent:'center', alignItems:'center'}}
                >
                    <View style={{width:7, height:7, backgroundColor:colors.lightBlue, borderRadius:10}}></View>
                  </View>
                  :
                  <View
                  style={{flex:1, justifyContent:'center', alignItems:'center'}}
                  >
                  {/* <View style={{width:7, height:7, backgroundColor:colors.lightBlue, borderRadius:10}}></View> */}
            </View>
            }
        
        </View>

      </TouchableOpacity>
      
    );
  }


  render() {
    if (Platform.OS === 'android'){
    }

    return (

      <Container>

        <LinearGradient 
          style={{flex:1}}
          start={{x: 0, y: 0}} 
          end={{x: 0, y: 1}} 
          colors={['#55D3CB', '#A5D3D0', '#FFFFFF']}>


         <StatusBar hidden={true} />

          <Header hasTabs style={globalStyle.headerContainer}>
              <Left style={{flex: 1}}>
              </Left>
              <Body style={{flex: 3, alignItems: 'center'}}>
              <Title style={globalStyle.headerTitle}>День 6</Title>
              </Body>
              <Right style={{flex: 1}}>
              </Right>
          </Header>


          <View style={{flex:1}}>
               <View      
                style={{
                  width:'100%',
                  flexDirection:'row',
                  alignSelf: 'center',
                  alignItems: 'center',
                  justifyContent:'center',
                  marginTop:25,
                  marginBottom:15,
                  paddingHorizontal:30,
                }}>
                  <View style={{flex:1,  flexDirection:'row', justifyContent:'flex-start', alignItems:'center'}}>
                    <Image
                        style={{
                            width: 24,
                            height: 24,
                            alignSelf: 'center',
                            alignItems: 'center',
                            marginRight:10,
                        }}
                        source={require('../../assets/images/icon_count.png')}
                        />

                    <Text style={styles.timeText}>20 упражнений</Text>
                  </View>
                  <View style={{flex:1,  flexDirection:'row', justifyContent:'flex-end', alignItems:'center'}}>
                    <Image
                      style={{
                          width: 24,
                          height: 24,
                          alignSelf: 'center',
                          alignItems: 'center',
                          marginRight:10,
                      }}
                      source={require('../../assets/images/icon_time.png')}
                      />
                    <Text style={styles.timeText}>14 минут</Text>
                  </View>
              </View>

              <View style={styles.container}>
                {this.state.loading ? (
                  <ActivityIndicator size="large" />
                ) : (
                  <FlatList
                    style={{width: '100%', marginVertical:30, backgroundColor:'#F8FEFD'}}
                    keyExtractor={(item, index) => index.toString()}
                    data={this.state.flatListItemArray}
                    onEndReachedThreshold={0.5}
                    renderItem={({item, index}) => this.renderFeedItem(item, index)}
                    ItemSeparatorComponent={() => <View style={styles.separator} />}
                  />
                )}
              </View>
          </View> 
          <Footer style={globalStyle.FooterContainer}>
                <TouchableOpacity 
                    style={{flex:1,justifyContent:'center', flexDirection:'row'}}
                    onPress={()=>this.onPressPlay()}
                    >
                    <Image
                        source={require('../../assets/images/play.png')}
                        style={styles.footerImageView}>
                     </Image>
                </TouchableOpacity>
                <Image
                    source={require('../../assets/images/more.png')}
                    style={{width:30, height:30, position:'absolute', right:50, alignItems:'center',alignSelf:
                    'center'}}>
                </Image>
          </Footer>


          <DescriptionModal
             isShowDescriptionModal = {this.state.isShowDescriptionModal}
             onPressDismissModal = {this.onPressDismissModal}
           >
           </DescriptionModal>

        </LinearGradient>

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
      fontSize:16,
      fontWeight:'bold',
      color:'white',
  },
  flatListItemView:{
      flexDirection:'row',
      width:'100%',
      paddingHorizontal:20,
      paddingVertical:4,
      justifyContent:'center',
  },

  fitness_image: {
    width: 38,
    height: 42,
    marginRight: 20,
    marginLeft: 15,
    resizeMode:'stretch'
  },
  actionTitleText:{
      color:colors.actionText,
      fontSize:14,
      fontWeight:'bold'
  },
  actionTimeText:{
    color:colors.actionText,
    marginTop:5,
    fontSize:13,
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
      width:60,
      height:60
  },
  container:{
      flex:1,
      backgroundColor:'#F8FEFD'
  }
});
// END TO MAKE STYLE
