import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { useTheme } from "@react-navigation/native";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

interface StatusCardProps {
  icon:
    | React.ComponentProps<typeof Ionicons>["name"]
    | React.ComponentProps<typeof MaterialCommunityIcons>["name"];
  iconType?: "ionicons" | "material";
  iconColor: string;
  title: string;
  subtitle: string;
}

export function StatusCard({
  icon,
  iconType = "ionicons",
  iconColor,
  title,
  subtitle,
}: StatusCardProps) {
  const theme = useTheme();

  const IconComponent =
    iconType === "material" ? MaterialCommunityIcons : Ionicons;

  return (
    <View
      style={[
        styles.statusCard,
        {
          borderColor: theme.colors.border,
          backgroundColor: theme.colors.card,
        },
      ]}
    >
      <View style={styles.statusHeader}>
        <View style={[styles.iconContainer, { backgroundColor: iconColor }]}>
          <IconComponent name={icon as any} size={24} color="white" />
        </View>
        <View style={styles.statusContent}>
          <Text style={[styles.statusTitle, { color: theme.colors.text }]}>
            {title}
          </Text>
          <Text style={[styles.statusSubtitle, { color: theme.colors.text }]}>
            {subtitle}
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  statusCard: {
    flex: 1,
    borderRadius: 25,
    overflow: "hidden",
    borderWidth: 1,
  },
  statusHeader: {
    padding: 16,
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
  },
  statusContent: {
    flex: 1,
  },
  statusTitle: {
    color: "white",
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 2,
  },
  statusSubtitle: {
    fontSize: 14,
    fontWeight: "500",
    opacity: 0.6,
  },
});
