import React from "react";
import { StyleSheet, View } from "react-native";
import { StatusCard } from "./status-card";

export function StatusGrid() {
  return (
    <View style={styles.statusSection}>
      <View style={styles.statusGrid}>
        <StatusCard
          icon="logo-github"
          iconType="ionicons"
          iconColor="#007AFF"
          title="GitHub"
          subtitle="Connected"
        />
        <StatusCard
          icon="crown"
          iconType="material"
          iconColor="#FFD700"
          title="Subscription"
          subtitle="Pro Member"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  statusSection: {
    paddingHorizontal: 10,
    marginBottom: 32,
  },
  statusGrid: {
    flexDirection: "row",
    gap: 12,
  },
});
