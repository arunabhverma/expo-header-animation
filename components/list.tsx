import { ListItem } from "@/mock/list-data";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useTheme } from "@react-navigation/native";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

export const List = ({ data }: { data: ListItem[] }) => {
  const theme = useTheme();

  const getIconName = (title: string) => {
    switch (title) {
      case "Mobile Apps":
        return "cellphone";
      case "Web Applications":
        return "web";
      case "UI/UX Designs":
        return "palette";
      case "Open Source":
        return "github";
      case "Certifications":
        return "certificate";
      case "Blog Posts":
        return "post";
      default:
        return "folder";
    }
  };

  return (
    <View style={styles.container}>
      <Text style={[styles.sectionTitle, { color: theme.colors.text }]}>
        Portfolio & Skills
      </Text>
      <View style={styles.grid}>
        {data.map((item, index) => (
          <View
            key={index.toString()}
            style={[
              styles.card,
              {
                backgroundColor: theme.colors.card,
                borderColor: theme.colors.border,
              },
            ]}
          >
            <View style={styles.cardHeader}>
              <View
                style={[styles.iconContainer, { backgroundColor: item.color }]}
              >
                <MaterialCommunityIcons
                  name={getIconName(item.title) as any}
                  size={24}
                  color="white"
                />
              </View>
              <Text style={[styles.cardCount, { color: item.color }]}>
                {item.count}
              </Text>
            </View>
            <Text style={[styles.cardTitle, { color: theme.colors.text }]}>
              {item.title}
            </Text>
            <View
              style={[
                styles.progressBar,
                { backgroundColor: theme.colors.border },
              ]}
            >
              <View
                style={[
                  styles.progressFill,
                  {
                    backgroundColor: item.color,
                    width: `${Math.min((item.count || 0) * 4, 100)}%`,
                  },
                ]}
              />
            </View>
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingBottom: 20,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 16,
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 12,
  },
  card: {
    width: "48%",
    padding: 16,
    borderRadius: 16,
    borderWidth: 1,
    minHeight: 120,
  },
  cardHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 12,
  },
  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
  },
  cardCount: {
    fontSize: 24,
    fontWeight: "bold",
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 12,
    lineHeight: 20,
  },
  progressBar: {
    height: 4,
    borderRadius: 2,
    overflow: "hidden",
  },
  progressFill: {
    height: "100%",
    borderRadius: 2,
  },
});
