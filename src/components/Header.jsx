import { View, Text, StyleSheet, Image } from "react-native";

const info = {
  name: "Leonardo Tallone",
  uri: "https://media.licdn.com/dms/image/D4D03AQG-i4qSnSiluA/profile-displayphoto-shrink_800_800/0/1690510081133?e=2147483647&v=beta&t=8l1QB7Jv0q18gMtNeHzaQFe4vVnAg8w1kxPoElu7pVA",
};

const Header = () => {
  return (
    <View style={Styles.container}>
      <View style={Styles.leftContainer}>
        <Text style={Styles.name}>{`Hello ${info.name}`}</Text>
        <Text style={Styles.subtitle}>Welcome back to your goal</Text>
      </View>
      <View style={Styles.rightContainer}>
        <Image source={{ uri: info.uri }} style={Styles.image} />
      </View>
    </View>
  );
};

const Styles = StyleSheet.create({
  container: {
    flexDirection:"row"
  },
  leftContainer: {
    flex: 1,
    justifyContent:'center',
  },
  rightContainer: {
    flex: 1,
    alignItems:'flex-end',
    justifyContent:'center',
  },
  name: {
    fontSize:14,
    fontWeight:'bold',
  },
  subtitle: {
    fontSize:12,
    color:'#808080',
  },
  image:{
    width:40,
    height:40,
    borderRadius:24,

  },
});
export default Header;
