import React, { Component } from "react";
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

import * as myLanguage from  './../../translations/index.js';

const { width, height } = Dimensions.get("window");

export class StopConfirmModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      top: height * 0.3,
      isShowingModal: false
    };
    this.isShowModal = false;
  }
 
  componentDidMount() {
    
    this.setState({isShowingModal : this.props.isShowModal});
  }

  componentDidUpdate(){
    this.isShowModal = this.props.isShowModal;
    if (this.state.isShowingModal != this.isShowModal){
      this.setState({isShowingModal : this.isShowModal});
    }
  }

  handleStop = (bool = false) => {
    this.props.onDismissModalByStop();
  };
  handleCancel = (bool = false) => {
    this.props.onDismissModalByCancel();
  };

  render() {
    return (
      <Modal
        transparent={true}
        style={{ flex: 1 }}
        visible={this.state.isShowingModal}>
        <View style={{ flex: 1, backgroundColor: '#C4C4C4BB', justifyContent:'center', alignContent:'center', alignItems:'center'}}>
          {/* <View style={{ ...styles.modalOuterContainer, top: this.state.top }}> */}
            <View style={styles.modalInnerContainer}>
                <Text
                    style={{
                    color: '#36908B',
                    fontSize: 18,
                    marginTop:10,
                    marginBottom: 20,
                    justifyContent:'center',
                    alignItems:'center',
                    fontWeight:'bold'
                    }}>
                    {myLanguage.translate('stop_session')}
                </Text>

                <View style={{marginHorizontal:15,}}>
                    <Text
                        style={{
                        color: '#485E5E',
                        fontSize: 13,
                        justifyContent:'center',
                        alignItems:'center',
                        marginHorizontal:20
                        }}>
                        {myLanguage.translate('stop_text')}
                    </Text>
                </View>

                <View style={{ 
                    width:'100%', 
                    justifyContent:'center', 
                    alignItems:'center', 
                    marginVertical:30,
                    // backgroundColor:'red',
                    flex:1,

                }}>
                     <Image
                        source={require('../../assets/images/image_18.png')}
                        style={{
                          resizeMode:'contain',
                          width:'100%',
                          height:'100%',
                          marginVertical:10
                        }}

                        >
                     </Image>
                </View>

                <View style={{ 
                    width:'100%', 
                    justifyContent:'center', 
                    alignItems:'center', 
                }}>

                    <TouchableOpacity
                            style={{backgroundColor: 'red', borderRadius: 8, width:270, height:60, justifyContent:'center', alignContent:"center", alignItems:'center', }}
                            onPress={this.handleStop}
                          >
                            <Text style={{color:'#B8B8B8', fontSize: 20, fontWeight:'bold'}}> {myLanguage.translate('stop')} </Text>
                    </TouchableOpacity>         

                    <TouchableOpacity
                            style={{backgroundColor: '#ffffff', borderRadius: 8, borderWidth:1, borderColor:'#A7A7A7', width:270, height:60, justifyContent:'center', alignContent:"center", alignItems:'center', 
                                    marginTop: 8, marginBottom:30}}
                            onPress={this.handleCancel}
                          >
                            <Text style={{color:'#B8B8B8', fontSize: 20, fontWeight:'bold'}}> {myLanguage.translate('cancel')} </Text>
                    </TouchableOpacity>                  

                </View>
            </View>
        </View>
      </Modal>
    );
  }
}

const styles = StyleSheet.create({
  
  modalInnerContainer: {
    height: height * 0.7,
    width: width * 0.8,
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

});
