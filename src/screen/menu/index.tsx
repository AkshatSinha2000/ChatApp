import {
  Dimensions,
  Image,
  Pressable,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  FlatList,
}from 'react-native';
import styles from './styles.tsx';
import React, {useCallback, useEffect, useRef, useState} from 'react';
import {SafeAreaView} from 'react-native';
import {icon} from '../../assets/index.ts';
import RBSheet from 'react-native-raw-bottom-sheet';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Contact from '../../components/Contact';

interface ChatUser {
  name: string;
}

interface MenuProps {
  navigation: {
    navigate: (screen: string, params?: object) => void;
  };
}

const Menu: React.FC<MenuProps> = ({navigation}) => {
  const [storedchats, setStoredChats] = useState<ChatUser[]>([]);
  const [searchfilter, setSearchFilter] = useState<string>('');
  const [filtersearch, setFilterSearch] = useState<ChatUser[]>([]);
  const [hasSearch, setHasSearched] = useState<boolean>(false);

  const loadChatUsers = async () => {
    const storedchat = await AsyncStorage.getItem('chatUsers');
    if (storedchat) {
      const chat: ChatUser[] = JSON.parse(storedchat);
      setStoredChats(chat);
    } else {
      setStoredChats([]);
    }
  };

  useEffect(() => {
    loadChatUsers();
  }, [storedchats]);

  const functionfilter = (query: string) => {
    if (query.length > 0) {
      setHasSearched(true);
    } else {
      setHasSearched(false);
    }
    setSearchFilter(query);
    if (query) {
      const filterme = storedchats.filter(contact =>
        contact.name.toLowerCase().includes(query.toLowerCase()),
      );
      setFilterSearch(filterme);
    } else {
      setFilterSearch([]);
    }
  };

  const refRBSheet = useRef<RBSheet>(null);
  const handleNavigation = useCallback(
    (item: ChatUser) => {
      navigation.navigate('Message', {data: item});
    },
    [navigation],
  );

  return (
    <>
      <SafeAreaView style={styles.safeareaview}>
        <View style={styles.container1}>
          <View style={styles.container2}>
            <View style={styles.container4}>
              <Text style={styles.text1}>Messages</Text>
              <Text style={styles.text2}>45 Contacts</Text>
            </View>
          </View>
          <View style={styles.container5}>
            <Image source={icon.bell} style={styles.bell} />
          </View>
        </View>
      </SafeAreaView>

      <View style={styles.container6}>
        <View style={styles.container7}>
          <Image source={icon.search} style={styles.search} />
          <TextInput
            value={searchfilter}
            onChangeText={functionfilter}
            style={styles.inputcontainer}
            placeholder="Search messages..."
          />
        </View>

        {storedchats.length > 0 ? (
          hasSearch ? (
            filtersearch.length > 0 ? (
              <View style={styles.FlatListMainContainer}>
                <FlatList
                  data={filtersearch}
                  showsVerticalScrollIndicator={false}
          bounces={false}
                  renderItem={({item}) => (
                    <Contact
                      item={item}
                      onPress={() => handleNavigation(item)}
                      showlast = {true}
                    />
                  )}
                  keyExtractor={(item, index) => index.toString()}
                />
              </View>
            ) : (
              <View style={styles.Noresult}>
                <Image source={icon.Noresult} style={styles.noresultimage} />
              </View>
            )
          ) : (
            <View style={styles.FlatListMainContainer}>
              <FlatList
                data={storedchats}
                renderItem={({item}) => (
                  <Contact item={item} onPress={() => handleNavigation(item)} showlast = {true}/>
                )}
                keyExtractor={(item, index) => index.toString()} 
              />
            </View>
          )
        ) : (
          <View style={styles.container8}>
            <View>
              <Image source={icon.nochat} style={styles.nochat} />
              <Pressable
                style={({pressed}) => [
                  {backgroundColor: pressed ? '#2A7BBB' : '#2A7BBB'},
                  styles.pressable,
                ]}
                onPress={() => refRBSheet.current?.open()}>
                <Text style={styles.text3}>Start Chat</Text>
              </Pressable>
            </View>
          </View>
        )}
      </View>
      {storedchats.length > 0 && (
        <TouchableOpacity onPress={() => navigation.navigate('NewChat')}>
          <Image source={icon.addchat} style={styles.addchat} />
        </TouchableOpacity>
      )}
      <RBSheet
        ref={refRBSheet}
        height={Dimensions.get('window').height / 6}
        useNativeDriver={false}
        dragOnContent={true}
        style={{overflow: 'hidden'}}
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
        }}>
        <View style={styles.RBContainer}>
          <TouchableOpacity
            style={styles.RBContainer2}
            onPress={() => {
              navigation.navigate('NewChat');
              refRBSheet.current?.close();
            }}>
            <Image source={icon.plus} style={styles.plus} />
            <Text style={styles.RBtext}>New Chat</Text>
          </TouchableOpacity>
        </View>
      </RBSheet>
    </>
  );
};

export default Menu;
