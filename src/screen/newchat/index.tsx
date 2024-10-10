import {
  FlatList,
  Image,
  KeyboardAvoidingView,
  PermissionsAndroid,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import styles from './styles'
import React, {useCallback, useEffect, useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import { icon } from '../../assets';
import data from '../../data.json';
import Contact from '../../components/Contact';
import Contacts from 'react-native-contacts';

interface ContactItem {
  id: string;
  name: string;
}

interface NewChatProps {
  navigation: {
    navigate: (screen: string, params?: any) => void;
    goBack: () => void;
  };
}

const NewChat: React.FC<NewChatProps> = ({navigation}) => {
  const [searchFilter, setSearchFilter] = useState<string>('');
  const [filteredSearch, setFilteredSearch] = useState<ContactItem[]>(data);
  const [hasSearched, setHasSearched] = useState<boolean>(false);

  const [contact, setcontacts] = useState([]);

  useEffect(()=>{
    ReadContact()
  },[])

  const ReadContact = () =>{
    if(Platform.OS === 'android'){

      PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.READ_CONTACTS, {
        title: 'Contacts',
        message: 'This app would like to view your contacts.',
        buttonPositive: 'Please accept bare mortal',
      }).then((res) => {
        if(res === 'granted'){
          Contacts.getAll()
          .then((res) => console.log('Android-------->',res))
          .catch((e) => console.log(e));
          
        }
      }).catch((err) => console.log(err))
    }

    if(Platform.OS === 'ios'){
      Contacts.getAll()
          .then((res) => console.log(res))
          .catch((e) => console.log(e));
    }}

  const functionFilter = (query: string) => {
    // setHasSearched(query.length > 0);
    
    setSearchFilter(query);

    if (query.length > 0) {
      const filterResults = data.filter((contact): ContactItem => contact.name.includes(query),
      );
      setFilteredSearch(filterResults);
    } else {
      setFilteredSearch(data);
    }
  };

  const handleNavigation = useCallback(
    (item: ContactItem) => {
      navigation.navigate('Message', {data: item});
    },
    [navigation],
  );


  return (
    <SafeAreaView style={styles.SafeAreaView}>
      <View style={styles.container1}>
        <TouchableOpacity
          style={styles.container3}
          onPress={() => navigation.goBack()}>
          <Image source={icon.backarrowblack} style={styles.backarrow} />
        </TouchableOpacity>
        <View style={styles.searchContainer}>
          <TextInput
            value={searchFilter}
            placeholder="Search here..."
            onChangeText={text => functionFilter(text)}
            style={styles.inputText}
          />

          {searchFilter.length > 0 && (
            <TouchableOpacity
              onPress={() => {
                // setHasSearched(false);
                functionFilter('');
              }}>
              <Image source={icon.cross} style={styles.cross} />
            </TouchableOpacity>
          )}
        </View>
      </View>
    
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{flex: 1}}>
          {filteredSearch.length > 0 ? (

         
            <View style={styles.FlatListMainContainer}>
              <FlatList
                data={filteredSearch}
                showsVerticalScrollIndicator={false}
                bounces={false}
                
                renderItem={({item}) => (
                  
                  <Contact item={item} onPress={() => handleNavigation(item)} showlast = {false}/>
                )}
                keyExtractor={item => item.id}
              />
            </View>
          ):(
            <View style={styles.Noresult}>
            <Image source={icon.Noresult} style={styles.noresultimage} />
          </View>
          )
          }
          
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default NewChat;

