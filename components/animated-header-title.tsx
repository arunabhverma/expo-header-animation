import { useScrollContext } from "@/contexts/scroll-context";
import { useTheme } from "@react-navigation/native";
import React from "react";
import { StyleSheet, View } from "react-native";
import Animated, {
  Extrapolation,
  interpolate,
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
} from "react-native-reanimated";

const HEADER_HEIGHT = 40;

export const AnimatedHeaderTitle = ({
  title,
  subTitle,
}: {
  title: string;
  subTitle?: string;
}) => {
  const theme = useTheme();
  const { scrollY, extraSpace, titleHeight } = useScrollContext();
  const headerOffset = useSharedValue(0);

  const totalHeight = useDerivedValue(() => {
    return extraSpace.value + titleHeight.value / 0.85;
  });

  useDerivedValue(() => {
    headerOffset.value = -interpolate(
      scrollY.value,
      [0, totalHeight.value],
      [-totalHeight.value, 0],
      Extrapolation.CLAMP
    );
  });

  const animatedTextStyle = useAnimatedStyle(() => {
    const translateY = interpolate(
      headerOffset.value,
      [0, totalHeight.value / 4],
      [2, HEADER_HEIGHT / 3.3],
      Extrapolation.CLAMP
    );

    const scale = interpolate(
      headerOffset.value,
      [0, totalHeight.value / 4],
      [0.9, 1],
      Extrapolation.CLAMP
    );

    return {
      transform: [{ scale }, { translateY }],
    };
  });

  const animatedSubTextStyle = useAnimatedStyle(() => {
    const scale = interpolate(
      headerOffset.value,
      [0, totalHeight.value / 4],
      [0.75, 1],
      Extrapolation.CLAMP
    );

    const opacity = interpolate(
      headerOffset.value,
      [0, totalHeight.value / 4],
      [0.7, 1],
      Extrapolation.CLAMP
    );

    return {
      transform: [{ translateY: headerOffset.value }, { scale }],
      opacity,
    };
  });

  if (!subTitle) {
    return (
      <View style={styles.headerContainer}>
        <Animated.Text
          style={[
            styles.headerTitle,
            animatedSubTextStyle,
            { color: theme.colors.text },
          ]}
        >
          {title}
        </Animated.Text>
      </View>
    );
  }

  return (
    <View style={styles.headerContainer}>
      <Animated.Text
        style={[
          styles.headerTitle,
          animatedTextStyle,
          { color: theme.colors.text },
        ]}
      >
        {title}
      </Animated.Text>
      <Animated.Text
        style={[
          styles.headerTitle,
          animatedSubTextStyle,
          { color: theme.colors.text },
        ]}
      >
        {subTitle}
      </Animated.Text>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    height: HEADER_HEIGHT,
    overflow: "hidden",
    justifyContent: "center",
  },
  headerTitle: {
    fontSize: 17,
    fontWeight: "600",
    textAlign: "center",
  },
});
