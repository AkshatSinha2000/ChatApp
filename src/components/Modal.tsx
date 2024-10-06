import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Modal from 'react-native-modal';
import { FadeIn } from 'react-native-reanimated';
const width = Dimensions.get('screen').width

const CustomModal = ({showModal,icon,text,setshowDeleteModal,HandleClick,desc}) => {
  return (
    <Modal
    animationInTiming= {500}
    animationOutTiming = {500}
    animationIn  = 'fadeIn'
    animationOut = 'fadeOut'
    // animationType="fade"
    isVisible={showModal}>
    <View style={styles.modalDelete}>
      <View style={styles.modalDeleteContainer}>
      <Image
            source={icon}
            style={{
              alignSelf: 'center',
              margin: 15,
              width: 60,
              height: 60,
              resizeMode: 'contain',
            }}
          />
          <Text
            style={{
              fontSize: 20,
              fontWeight: 'bold',
              alignSelf: 'center',
              marginBottom: 10,
            }}>
            {' '}
            {text}
          </Text>

          <Text style={styles.modalMessage}>{desc}</Text>
          <View style={{flexDirection:'row',justifyContent:'space-around'}}>

        
          <TouchableOpacity
            onPress={setshowDeleteModal}
            style={[styles.modalButton,{backgroundColor:'#F6F7F7'}]}
            >
            <Text 
            // style={styles.modalButtonText}
            >No,Cancle</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={HandleClick}
            style={[styles.modalButton,{backgroundColor:'#2A7BBB'}]}
            >
            <Text 
            style={styles.modalButtonText}
            >Yes, Delete</Text>
          </TouchableOpacity>
          </View>
        
      </View>
    </View>
    </Modal>
  )
}

export default CustomModal

const styles = StyleSheet.create({
  modalDelete: {
    justifyContent:'center',
  },
  modalContainer: {
    marginHorizontal:15,
    paddingVertical:15,
    borderRadius:10,
    marginVertical:10,
    paddingHorizontal:20,
    backgroundColor: 'white',
    // alignItems: 'center',
    justifyContent: 'center',
  },
  modalContainer2:{
    flex:1,
    paddingTop:30,
    borderTopStartRadius:25,
    borderTopEndRadius:25,
    backgroundColor:'white',

  },
  modalDeleteContainer:{
    marginHorizontal:20,
    paddingHorizontal:20,
    paddingVertical:15,
    borderRadius:10,
    backgroundColor:'white',
  },
  emojiContainer:{
    flexDirection:'row',
    justifyContent:'space-around',
    marginBottom:35,
  },
  emoji:{
    height:35,
    width:35,
  },
  optioncontainer:{
    paddingHorizontal:30,
  },
  modalMessage:{
    fontSize: 15,
    color:'#6A7985',
    textAlign:'center',
    fontWeight: '300',
    alignSelf: 'center',
    marginBottom: 10,
  },
  modalButton:{
    fontSize: 15,
    marginVertical: 15,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'grey',
    backgroundColor:'red',
    paddingHorizontal:(width > 400) ? 30 : 20,
    paddingVertical:15,
    borderRadius:10
  },
  modalButtonText:{
    color:'white'
  },
})