import { StyleSheet } from "react-native";
import { family } from "../../assets";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image:{
    height: 20, 
    width: 20,
    marginBottom: 20,
  },
  text:{
    fontSize: 24,
    fontFamily: family.Bold
  },

  Quivio: {
    // padding: 80,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default styles;
