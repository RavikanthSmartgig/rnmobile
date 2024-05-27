import { View, Text } from "react-native";
import React from "react";
import styles from "./styles";

interface props {
  title: string;
  artist: string;
  duration: string;
  genre: string;
}

const Card = ({ title, artist, duration, genre }: props) => {
  return (
    <View style={styles.Container}>
      <Text style={styles.title}>Title: {title}</Text>
      <Text style={styles.artist}>Artist: {artist}</Text>
      <View style={styles.MusicInfo}>
        <Text style={styles.textStyle}>{genre}</Text>
        <Text style={styles.textStyle}>{duration}</Text>
      </View>
    </View>
  );
};

export default Card;
