import { FlatList, Image, KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import React, { useCallback, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import icon from '../../assets/icon/index';
import data from '../../data.json';
import Contact from '../../components/Contact';

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

const NewChat: React.FC<NewChatProps> = ({ navigation }) => {
  const [searchFilter, setSearchFilter] = useState<string>('');
  const [filteredSearch, setFilteredSearch] = useState<ContactItem[]>([]);
  const [hasSearched, setHasSearched] = useState<boolean>(false);

  const functionFilter = (query: string) => {
    setHasSearched(query.length > 0);
    setSearchFilter(query);

    if (query) {
      const filterResults = data.filter((contact: ContactItem) => contact.name.includes(query));
      setFilteredSearch(filterResults);
    } else {
      setFilteredSearch([]);
    }
  };

  const handleNavigation = useCallback((item: ContactItem) => {
    navigation.navigate('Message', { data: item });
  }, [navigation]);

  return (
    <SafeAreaView style={styles.SafeAreaView}>
      <View style={styles.container1}>
        <TouchableOpacity style={styles.container3} onPress={() => navigation.goBack()}>
          <Image source={icon.backarrowblack} style={styles.backarrow} />
        </TouchableOpacity>
        <View style={styles.searchContainer}>
          <TextInput
            value={searchFilter}
            placeholder="Search here..."
            onChangeText={text => functionFilter(text)}
            style={styles.inputText}
          />

          {hasSearched && searchFilter.length > 0 && (
            <TouchableOpacity onPress={() => { setHasSearched(false); functionFilter(''); }}>
              <Image source={icon.cross} style={styles.cross} />
            </TouchableOpacity>
          )}
        </View>
      </View>
      <KeyboardAvoidingView 
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{ flex: 1 }}
      >
        {hasSearched ? (
          filteredSearch.length > 0 ? (
            <View style={styles.FlatListMainContainer}>
              <FlatList
                data={filteredSearch}
                renderItem={({ item }) => (
                  <Contact 
                    item={item}
                    onPress={() => handleNavigation(item)}
                  />
                )}
                keyExtractor={(item) => item.id} 
              />
            </View>
          ) : (
            <View style={styles.Noresult}>
              <Image source={icon.Noresult} style={styles.noresultimage} />
            </View>
          )
        ) : null}
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default NewChat;

const styles = StyleSheet.create({
  SafeAreaView: {
    backgroundColor: '#E7EDF3',
    flex: 1,
  },
  container1: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginHorizontal: 16,
    marginVertical: 7,
  },
  container2: {
    marginLeft: 10,
    justifyContent: 'space-between',
  },
  container3: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    paddingVertical: 14,
    paddingHorizontal: 13,
  },
  searchContainer: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    paddingVertical: Platform.OS === 'ios' ? 14 : 0,
    paddingHorizontal: 13,
    marginLeft: 10,
    width: '85%',
  },
  backarrow: {
    height: 20,
    width: 20,
  },
  inputText: {
    width: '85%',
  },
  FlatListMainContainer: {
    backgroundColor: '#FFFFFF',
    marginHorizontal: 20,
    marginTop: 16,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  Noresult: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  noresultimage: {
    height: 200,
    width: 180,
  },
  cross: {
    marginHorizontal: 20,
    marginTop: Platform.OS === 'ios' ? 0 : 15,
    height: 18,
    width: 18,
  },
});
