import React, { Component, forwardRef } from "react";
import {
  View,
  Text,
  Modal,
  Button,
  TextInput,
  StyleSheet,
  Dimensions,
  Image,
  TouchableOpacity,
} from "react-native";
import colors from "../../style/colors";

import { LinearGradient } from 'expo-linear-gradient';

import * as myLanguage from  './../../translations/index.js';

const { width, height } = Dimensions.get("window");

export class DescriptionModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      top: height * 0.3,
      isShowingModal: false
    };
    this.isShowModal = false;
  }
 
  componentDidMount() {
    
    this.setState({isShowingModal : this.props.isShowDescriptionModal});

    myLanguage.setI18nConfig();
  }

  componentDidUpdate(){
    this.isShowModal = this.props.isShowDescriptionModal;
    if (this.state.isShowingModal != this.isShowModal){
      this.setState({isShowingModal : this.isShowModal});
    }
  }


  handleClose = (bool = false) => {
    this.props.onPressDismissModal();
  };

  render() {
    return (
      <Modal
        transparent={true}
        style={{ flex: 1 }}
        visible={this.state.isShowingModal}>

        <LinearGradient 
            start={{x: 0, y: 0}} 
            end={{x: 0, y: 1}} 
            colors={['#55D3CBEE', '#A5D3D0EE', '#FFFFFFEE']}
            style={{ flex: 1, justifyContent:'center', alignContent:'center', alignItems:'center'}}>

            <View style={styles.modalInnerContainer}>
                <Text
                    style={{
                    color: colors.lightBlue,
                    fontSize: 18,
                    marginTop: 10,
                    marginBottom: 20,
                    justifyContent:'center',
                    alignItems:'center',
                    fontWeight:'bold'
                    }}>
                    {myLanguage.translate('detail_title')}
                </Text>

                <View style={{marginHorizontal:28}}>
                    <Text
                        style={{
                        color: colors.textColor,
                        fontSize: 14,
                        marginBottom: 15,
                        justifyContent:'center',
                        alignItems:'center',
                        }}>
                        {myLanguage.translate('detail_descript')}
                        
                    </Text>
                </View>

                <View style={{ 
                    width:'100%', 
                    justifyContent:'center', 
                    alignItems:'center', 
                    flex:1,
                    marginTop:30,
                    // marginVertical:30,
                    // backgroundColor:'red'
                }}>
                     <Image
                        source={require('../../assets/images/image_detail.png')}
                        style={{resizeMode:'cover', width:'50%', height:'100%'}}>
                     </Image>
                </View>

               
                <TouchableOpacity 
                    onPress={()=>this.handleClose()}
                    style={{ 
                        width: width * 0.85,
                        justifyContent:'center', 
                        alignItems:'center', 
                        textAlignVertical:'center', 
                        height:70,
                        borderTopWidth:1,
                        borderTopColor:'#55D3CB33'        
                    }}>
                        <View 
                            >
                            <Text 
                                style={{ 
                                width:'100%',
                                color:colors.lightBlue,
                                fontWeight:'bold',
                                justifyContent: 'center',
                                textAlignVertical:'center',
                                textAlign:'center',
                                alignItems: 'center'}}>{myLanguage.translate('close')}</Text>
                    </View>
                </TouchableOpacity>


                
            </View>
        </LinearGradient>
      </Modal>
    );
  }
}

const styles = StyleSheet.create({
  modalOuterContainer: {
    flex: 1,
    // position: "absolute",
    // left: width * 0.148,
    // top: this.state.top,
    backgroundColor: "rgba(0, 0, 0, 0.3)",
    borderRadius: 8,
    justifyContent:'center',
    alignItems:'center'
  },
  modalInnerContainer: {
    height: height * 0.7,
    width: width * 0.85,
    // backgroundColor: "rgba(102,51,204,0.9)",
    backgroundColor: "white",
    paddingTop: 20,
    // padding: 10,
    borderRadius: 15,
    alignItems:'center',
    // flex:1,
    justifyContent:'space-between',
    // justifyContent:'center'
  },
  modalButtonContainer: {
    width: 0.25 * width,
  },
  TextInput: {
    marginLeft: width * 0.03,
    marginRight: width * 0.03,
    marginTop: width * 0.01,
    marginBottom: width * 0.02,
    backgroundColor: "rgba(255,140,0,0.1)",
    height: 50,
    color: "#00ffcc",
  },
});
