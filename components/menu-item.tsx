import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { useTheme } from "@react-navigation/native";
import React from "react";
import { StyleSheet, Switch, Text, TouchableOpacity, View } from "react-native";

type RightElementType = "chevron" | "copy" | "switch" | "none";

interface MenuItemProps {
  icon:
    | React.ComponentProps<typeof Ionicons>["name"]
    | React.ComponentProps<typeof MaterialCommunityIcons>["name"];
  iconType?: "ionicons" | "material";
  iconColor: string;
  title: string;
  subtitle: string;
  rightElement?: RightElementType;
  rightElementValue?: boolean | string;
  onPress?: () => void;
  onSwitchToggle?: (value: boolean) => void;
  titleColor?: string;
  showSeparator?: boolean;
}

export function MenuItem({
  icon,
  iconType = "ionicons",
  iconColor,
  title,
  subtitle,
  rightElement = "chevron",
  rightElementValue,
  onPress,
  onSwitchToggle,
  titleColor,
  showSeparator = false,
}: MenuItemProps) {
  const theme = useTheme();

  const IconComponent =
    iconType === "material" ? MaterialCommunityIcons : Ionicons;

  const renderRightElement = () => {
    switch (rightElement) {
      case "chevron":
        return <Ionicons name="chevron-forward" size={20} color="#8E8E93" />;
      case "copy":
        return (
          <Text style={[styles.copyButton, { color: theme.colors.primary }]}>
            {rightElementValue || "COPY"}
          </Text>
        );
      case "switch":
        return (
          <Switch
            value={(rightElementValue as boolean) || false}
            onValueChange={onSwitchToggle}
          />
        );
      case "none":
      default:
        return null;
    }
  };

  const content = (
    <>
      <View style={styles.menuItem}>
        <View style={styles.menuItemLeft}>
          <View style={[styles.menuIcon, { backgroundColor: iconColor }]}>
            <IconComponent name={icon as any} size={20} color="white" />
          </View>
          <View>
            <Text
              style={[
                styles.menuTitle,
                { color: titleColor || theme.colors.text },
              ]}
            >
              {title}
            </Text>
            <Text style={[styles.menuSubtitle, { color: theme.colors.text }]}>
              {subtitle}
            </Text>
          </View>
        </View>
        {renderRightElement()}
      </View>
      {showSeparator && (
        <View
          style={[styles.separator, { backgroundColor: theme.colors.border }]}
        />
      )}
    </>
  );

  if (onPress) {
    return (
      <TouchableOpacity onPress={onPress} activeOpacity={0.7}>
        {content}
      </TouchableOpacity>
    );
  }

  return <>{content}</>;
}

const styles = StyleSheet.create({
  menuItem: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 16,
  },
  menuItemLeft: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    flex: 1,
  },
  menuIcon: {
    width: 32,
    height: 32,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  menuTitle: {
    color: "white",
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 2,
  },
  menuSubtitle: {
    fontSize: 13,
    fontWeight: "500",
    opacity: 0.6,
  },
  separator: {
    height: 1,
    marginLeft: 60,
  },
  copyButton: {
    fontSize: 16,
    fontWeight: "600",
  },
});
