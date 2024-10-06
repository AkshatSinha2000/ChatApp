import React, { useState, useCallback, useEffect, useRef } from 'react';
import {
  Dimensions,
  Image,
  Platform,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import icon from '../../assets/icon/index';
import family from '../../assets/fonts/index';
import styles from './Styles';
import { Bubble, GiftedChat, InputToolbar, IMessage } from 'react-native-gifted-chat';
import RBSheet from 'react-native-raw-bottom-sheet';
import AsyncStorage from '@react-native-async-storage/async-storage';
import DropDownContent from '../../components/DropDownContent';
import Modal from 'react-native-modal';
import CustomModal from '../../components/Modal';
import Emoji from '../../components/emoji';

const width = Dimensions.get('screen').width;

interface User {
  id: string;
  name: string;
  profileImg: string;
  color: string;
}

interface MessageProps {
  route: {
    params: {
      data: User;
    };
  };
  navigation: {
    goBack: () => void;
    navigate: (screen: string, params?: any) => void;
  };
}

const Message: React.FC<MessageProps> = ({ route, navigation }) => {
  const user = route.params.data;
  const [toggle, setToggle] = useState<boolean>(false);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [showDeleteModal, setShowDeleteModal] = useState<boolean>(false);
  const [showMessage, setShowMessage] = useState<string>('');
  const [messageId, setMessageId] = useState<string>('');
  const [personChat, setPersonChat] = useState<User[]>([]);
  const [showDeleteChatModal, setShowDeleteChatModal] = useState<boolean>(false);
  const [showEmojiModal, setShowEmojiModal] = useState<boolean>(false);
  const [selectedEmoji, setSelectedEmoji] = useState<string>('$');
  const { color, profileImg, name, id } = user;
  const chatId = user.id;
  const [messages, setMessages] = useState<IMessage[]>([]);
  const refRBSheet = useRef<RBSheet>(null);

  useEffect(() => {
    const loadMessages = async () => {
      const storedMessages = await AsyncStorage.getItem(`messages_${chatId}`);
      if (storedMessages) {
        setMessages(JSON.parse(storedMessages));
      } else {
        setMessages([
          {
            _id: 1,
            text: 'Hello',
            createdAt: new Date(),
            user: {
              _id: 2,
              name: 'React Native',
              avatar: 'https://placeimg.com/140/140/any',
            },
          },
        ]);
      }
    };

    loadMessages();
  }, [chatId, toggle]);

  const onSend = async (newMessages: IMessage[] = []) => {
    setMessages(previousMessages => {
      const updatedMessages = GiftedChat.append(previousMessages, newMessages);
      AsyncStorage.setItem(`messages_${chatId}`, JSON.stringify(updatedMessages));
      storeChatUser(user);
      return updatedMessages;
    });
  };

  const storeChatUser = async (user: User) => {
    const storedChatUsers = await AsyncStorage.getItem('chatUsers');
    const chatUsers: User[] = storedChatUsers ? JSON.parse(storedChatUsers) : [];

    const userExists = chatUsers.find(u => u.id === user.id);
    if (!userExists) {
      chatUsers.push({
        id: user.id,
        name: user.name,
        profileImg: user.profileImg,
        color: user.color,
      });
      await AsyncStorage.setItem('chatUsers', JSON.stringify(chatUsers));
    }
  };

  const handleClick = async (id: string) => {
    setShowDeleteModal(false);
    const storedMessages = await AsyncStorage.getItem(`messages_${chatId}`);
    const messagesArray: IMessage[] = JSON.parse(storedMessages || '[]');

    if (Array.isArray(messagesArray)) {
      const updatedMessagesArray = messagesArray.filter(message => message._id !== id);
      await AsyncStorage.setItem(`messages_${chatId}`, JSON.stringify(updatedMessagesArray));
      setToggle(!toggle);
    }
  };

  const handleWholeChat = async () => {
    setShowDeleteModal(false);
    const storedChatUsers = await AsyncStorage.getItem('chatUsers');
    const chatArray: User[] = JSON.parse(storedChatUsers || '[]');

    if (Array.isArray(chatArray)) {
      const updatedChatArray = chatArray.filter(chatUser => chatUser.id !== user.id);
      await AsyncStorage.setItem('chatUsers', JSON.stringify(updatedChatArray));
    }

    await AsyncStorage.setItem(
      `messages_${chatId}`,
      JSON.stringify([
        {
          _id: 1,
          text: 'Hello',
          createdAt: new Date(),
          user: {
            _id: 2,
            name: 'React Native',
            avatar: 'https://placeimg.com/140/140/any',
          },
        },
      ])
    );

    navigation.navigate('BottomNavigation', 'Menu');
  };

  const handleModal = (message: IMessage) => {
    if (message) {
      setShowModal(true);
      setShowMessage(message.text);
      setMessageId(message._id);
    }
  };

  const handleDeleteModal = () => {
    setShowModal(false);
    setTimeout(() => {
      setShowDeleteModal(true);
    }, 500);
  };

  const handleDeleteChatModal = () => {
    refRBSheet.current?.close();
    setTimeout(() => {
      setShowDeleteChatModal(true);
    }, 700);
  };

  const renderActions = useCallback(() => {
    return (
      <TouchableOpacity style={{ alignSelf: 'center', marginLeft: 10 }}>
        <Image source={icon.plusmessage} style={styles.plusmessage} />
      </TouchableOpacity>
    );
  }, []);

  const renderMessage = (props: { currentMessage: IMessage }) => {
    const { currentMessage } = props;
    const isUserMessage = currentMessage.user._id === 1;
    const messageTime = new Date(currentMessage.createdAt).toLocaleTimeString([], {
      hour: '2-digit',
      minute: '2-digit',
    });
    return (
      <>
        <TouchableOpacity
          onLongPress={() => handleModal(currentMessage)}
          style={{
            alignSelf: isUserMessage ? 'flex-end' : 'flex-start',
            backgroundColor: isUserMessage ? '#0084ff' : '#f0f0f0',
            borderRadius: 10,
            maxWidth: '80%',
            marginHorizontal: 15,
            marginBottom: 10,
            paddingHorizontal: 15,
            paddingVertical: 10,
            position: 'relative',
          }}
        >
          <Text
            style={{
              color: isUserMessage ? 'white' : 'black',
              fontSize: 16,
              fontFamily: family.medium,
            }}
          >
            {currentMessage.text}
          </Text>
          {currentMessage.avatar && (
            <View
              style={{
                top: -12,
                position: 'absolute',
                left: isUserMessage ? -12 : 50,
                padding: 5,
                backgroundColor: 'white',
                borderRadius: 10,
              }}
            >
              <Text style={{ color: isUserMessage ? 'white' : 'black' }}>
                {currentMessage.avatar}
              </Text>
            </View>
          )}
        </TouchableOpacity>
        <Text
          style={{
            marginTop: 10,
            marginHorizontal: 20,
            fontSize: 10,
            color: 'black',
            textAlign: isUserMessage ? 'right' : 'left',
          }}
        >
          {messageTime}
        </Text>
      </>
    );
  };

  const handleEmojiPress = (emoji: string) => {
    if (messageId) {
      setMessages(previousMessages => {
        return previousMessages.map(msg => {
          if (msg._id === messageId) {
            return {
              ...msg,
              text: `${msg.text}`,
              avatar: `${emoji}`,
            };
          }
          return msg;
        });
      });
    }
    setShowModal(false);
  };

  const renderSend = (props: any) => {
    return (
      <TouchableOpacity
        style={{ alignSelf: 'center', paddingHorizontal: 10 }}
        onPress={() => {
          const messageText = props?.text;
          if (messageText && messageText.trim()) {
            onSend();
            props?.onSend([
              {
                _id: Math.random(),
                text: messageText,
                createdAt: new Date(),
                user: {
                  _id: 2,
                  name: 'React Native',
                  avatar: 'https://placeimg.com/140/140/any',
                },
              },
            ]);
          }
        }}
      >
        <Image source={icon.sendicon} style={styles.sendicon} />
      </TouchableOpacity>
    );
  };

  return (
    <>
      <SafeAreaView style={styles.safeAreaView}>
        <View style={styles.headerContainer}>
          <View style={styles.headerContent}>
            <TouchableOpacity
              style={styles.backButton}
              onPress={() => navigation.goBack()}
            >
              <Image source={icon.backarrowblack} style={styles.backArrow} />
            </TouchableOpacity>
            <View style={styles.userInfo}>
              <View style={[styles.profileImg, { backgroundColor: color }]}>
                <Text style={styles.profileText}>{profileImg}</Text>
              </View>
              <View style={styles.userDetails}>
                <Text style={styles.userName}>{name}</Text>
                <Text style={styles.userStatus}>Clocked in</Text>
              </View>
            </View>
          </View>
          <TouchableOpacity
            style={styles.notificationContainer}
            onPress={() => refRBSheet.current?.open()}
          >
            <Image source={icon.dot} style={styles.notificationIcon} />
          </TouchableOpacity>
        </View>
      </SafeAreaView>
      <View style={styles.chatContainer}>
        <GiftedChat
          messages={messages}
          onSend={messages => onSend(messages)}
          user={{ _id: 1 }}
          placeholder="Message..."
          textInputStyle={{
            backgroundColor: '#FFFFFF',
            paddingHorizontal: 10,
            fontFamily: family.medium,
          }}
          renderInputToolbar={props => (
            <InputToolbar
              containerStyle={{
                backgroundColor: '#F8F9F9',
                paddingBottom: Platform.OS === 'ios' ? (width > 400 ? 50 : 20) : 30,
                paddingTop: 10,
                alignItems: 'center',
                justifyContent: 'center',
              }}
              {...props}
            />
          )}
          renderBubble={props => (
            <Bubble
              {...props}
              textStyle={{
                right: {
                  fontFamily: family.medium,
                },
                left: {
                  fontFamily: family.medium,
                },
              }}
              wrapperStyle={{
                left: {},
              }}
            />
          )}
          renderMessage={renderMessage}
          renderActions={renderActions}
          renderSend={renderSend}
        />
      </View>
      <RBSheet
        ref={refRBSheet}
        height={
          width > 400
            ? Dimensions.get('window').height / 3
            : Dimensions.get('window').height / 2.3
        }
        useNativeDriver={false}
        dragOnContent={true}
        style={{ overflow: 'hidden' }}
        customStyles={{
          container: {
            borderTopEndRadius: 30,
            borderTopLeftRadius: 30,
          },
          wrapper: {
            backgroundColor: 'rgba(0,0,0,0.5)',
          },
          draggableIcon: {
            backgroundColor: '#000',
          },
        }}
      >
        <View style={styles.RBContainer}>
          <DropDownContent
            icon={icon.eye}
            text="View details"
            stylesme={{
              height: 18,
              width: 24,
            }}
          />
          <DropDownContent
            icon={icon.pin}
            text="Pin Chart"
            stylesme={{ height: 23, width: 16, marginLeft: 4 }}
          />
          <DropDownContent
            icon={icon.search}
            text="Search Chat"
            stylesme={{
              height: 22,
              width: 21,
              marginLeft: 2,
            }}
          />
          <DropDownContent
            icon={icon.deleteimage}
            onPress={handleDeleteChatModal}
            text="Delete"
            deletetext={true}
            stylesme={{
              height: 22,
              width: 21,
              marginLeft: 4,
            }}
          />
        </View>
      </RBSheet>

      <Modal
        isVisible={showModal}
        style={{
          justifyContent: 'flex-end',
          margin: 0,
          backgroundColor: 'transparent',
        }}
        onBackdropPress={() => setShowModal(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContainer}>
            <Text style={{ fontFamily: family.medium }}>{showMessage}</Text>
          </View>
          <View style={styles.modalContainer2}>
            <View>
              <View style={styles.emojiContainer}>
                <Emoji
                  icon={icon.emoji1}
                  onPress={() => handleEmojiPress('👍')}
                />
                <Emoji
                  icon={icon.emoji2}
                  onPress={() => handleEmojiPress('♥️')}
                />
                <Emoji
                  icon={icon.emoji3}
                  onPress={() => handleEmojiPress('😂')}
                />
                <Emoji
                  icon={icon.emoji4}
                  onPress={() => handleEmojiPress('🎉')}
                />
                <Emoji
                  icon={icon.emoji5}
                  onPress={() => handleEmojiPress('👎')}
                />
              </View>
              <View style={styles.optioncontainer}>
                <DropDownContent icon={icon.reply} text="Reply" />
                <DropDownContent icon={icon.forward} text="Forward" />
                <DropDownContent icon={icon.copy} text="Copy" />
                <DropDownContent icon={icon.stars} text="Star" />
                <DropDownContent icon={icon.report} text="Report" />
                <DropDownContent
                  icon={icon.deleteimage}
                  text="Delete"
                  deletetext={true}
                  onPress={handleDeleteModal}
                />
              </View>
            </View>
          </View>
        </View>
      </Modal>

      <CustomModal
        showModal={showDeleteModal}
        icon={icon.deletemodal}
        desc="Are you sure you want to delete this message?"
        text="Delete message?"
        setshowDeleteModal={() => setShowDeleteModal(false)}
        HandleClick={() => handleClick(messageId)}
      />

      <CustomModal
        showModal={showDeleteChatModal}
        icon={icon.deletemodal}
        desc="Are you sure you want to delete whole chat?"
        text="Delete message?"
        setshowDeleteModal={() => setShowDeleteChatModal(false)}
        HandleClick={handleWholeChat}
      />
    </>
  );
};

export default Message;
