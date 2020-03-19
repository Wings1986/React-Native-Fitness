import {StyleSheet} from 'react-native';
import colors from './colors';

export default StyleSheet.create({

  containerView: {
    flex: 1,
    backgroundColor: '#EEE',
  },
  
  headerContainer: {
    // borderBottomWidth: 0,
    width: '100%',
    backgroundColor:'#55D3CB00',

  },
  headerTitle: {
    color: 'white',
    fontSize:37,
  },
  headerIcons: {
    // color: '#2846FF',
    color: 'white',
    fontSize:38,
  },

  FooterContainer:{
    flexDirection: 'row',
    width: '100%',
    height:85,
    backgroundColor:'#F8FEFD',
    alignItems:'center',
    // borderTopWidth:0,
    borderTopColor:'#55D3CB55',
  },
  FooterContainerNoline:{
    flexDirection: 'row',
    width: '100%',
    height:100,
    backgroundColor:'#F8FEFD',
    alignItems:'center',
    borderTopWidth:0,
    borderTopColor:'#55D3CB55',
  },

  tabBarUnderlineStyle: {
    backgroundColor: '#00B9AA',
    alignContent: 'center',
    alignSelf: 'center',
    borderRadius: 10,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
