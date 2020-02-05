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
} from "react-native";
import colors from "../../style/colors";
import { TouchableOpacity } from "react-native-gesture-handler";
// import { ReminderModal } from "./ReminderModal";

const { width, height } = Dimensions.get("window");

export class StopConfirmModel extends Component {
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
        <View style={{ flex: 1, backgroundColor: '#55D3CB88', justifyContent:'center', alignContent:'center', alignItems:'center'}}>
          {/* <View style={{ ...styles.modalOuterContainer, top: this.state.top }}> */}
            <View style={styles.modalInnerContainer}>
                <Text
                    style={{
                    color: colors.lightBlue,
                    fontSize: 16,
                    marginBottom: 15,
                    justifyContent:'center',
                    alignItems:'center',
                    fontWeight:'bold'
                    }}>
                    Остановить сеанс
                </Text>

                <View style={{marginHorizontal:15,}}>
                    <Text
                        style={{
                        color: colors.textColor,
                        fontSize: 16,
                        justifyContent:'center',
                        alignItems:'center',
                        }}>
                        Вы уверены, что хотите прекратить сегодняшнюю сессию?
                        {'\n'}                    
                        Вам нужно будет возобновить этот день с самого начала.
                    </Text>
                </View>

                <View style={{ 
                    width:'100%', 
                    justifyContent:'center', 
                    alignItems:'center', 
                    marginVertical:30,
                }}>
                     <Image
                        source={require('../../assets/images/image_18.png')}
                        style={{resizeMode:'cover',}}>
                     </Image>
                </View>

                <View style={{ 
                    width:'100%', 
                    justifyContent:'center', 
                    alignItems:'center', 
                }}>

                    <TouchableOpacity
                            style={{backgroundColor: 'red', borderRadius: 5, width:200, height:50, justifyContent:'center', alignContent:"center", alignItems:'center', }}
                            onPress={this.handleStop}
                          >
                            <Text style={{color:'#B8B8B8', fontSize: 18, fontWeight:'bold'}}> СТОП </Text>
                    </TouchableOpacity>         

                    <TouchableOpacity
                            style={{backgroundColor: '#ffffff', borderRadius: 5, borderWidth:1, borderColor:'#A7A7A7', width:200, height:50, justifyContent:'center', alignContent:"center", alignItems:'center', 
                                    marginVertical: 20}}
                            onPress={this.handleCancel}
                          >
                            <Text style={{color:'#B8B8B8', fontSize: 18, fontWeight:'bold'}}> ОТМЕНА </Text>
                    </TouchableOpacity>                  

                </View>
            </View>
        </View>
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
