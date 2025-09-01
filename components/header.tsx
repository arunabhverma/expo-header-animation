import { useScrollContext } from "@/contexts/scroll-context";
import { useTheme } from "@react-navigation/native";
import { Image } from "expo-image";
import React, { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";

const padding = 20;
const fontSize = 25;

export const Header = ({
  title,
  subTitle,
  avatarUrl,
}: {
  title: string;
  subTitle: string;
  avatarUrl: string;
}) => {
  const theme = useTheme();
  const { titleHeight, extraSpace } = useScrollContext();

  useEffect(() => {
    extraSpace.value = padding + fontSize;
  }, [extraSpace]);

  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: avatarUrl,
        }}
        style={[styles.avatar, { borderColor: theme.colors.primary }]}
      />
      <View>
        <Text style={[styles.headerTitle, { color: theme.colors.text }]}>
          {title}
        </Text>
        <Text
          onLayout={(e) => {
            titleHeight.value = e.nativeEvent.layout.height;
          }}
          style={[styles.subTitle, { color: theme.colors.text }]}
        >
          {subTitle}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    paddingVertical: padding,
  },
  headerTitle: {
    fontSize: fontSize,
    fontWeight: "bold",
  },
  subTitle: {
    fontSize: 17,
    opacity: 0.6,
  },
  avatar: {
    width: 55,
    height: 55,
    borderRadius: 28,
    borderWidth: 2,
  },
});
