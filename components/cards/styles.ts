import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  Container: {
    borderRadius: 10,
    borderColor: "green",
    // borderWidth: 1,
    // margin: 10,
    padding: 12,
  },
  title:{
    fontWeight:'800',
    fontSize:20,
    color:'green'
  },
  artist:{
    fontWeight:'500',
    fontSize:18,
    color:'blue'
  },
  textStyle: {
    color:'#fff',

  },
  MusicInfo: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
    backgroundColor: "red",
    padding:10,
    marginVertical:10,
    borderRadius:10
  },
});

export default styles;
