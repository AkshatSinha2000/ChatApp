import { Image, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
import { ImageSourcePropType } from 'react-native';


interface EmojiProps {
  icon: ImageSourcePropType;
  onPress: () => void;       
}

const Emoji: React.FC<EmojiProps> = ({ icon, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Image source={icon} style={styles.emoji} />
    </TouchableOpacity>
  );
};

export default Emoji;

const styles = StyleSheet.create({
  emoji: {
    height: 35,
    width: 35,
  },
});
