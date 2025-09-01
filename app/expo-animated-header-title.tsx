import { Header } from "@/components/header";
import { MenuItem } from "@/components/menu-item";
import { SettingsSection } from "@/components/settings-section";
import { StatusGrid } from "@/components/status-grid";
import { useScrollContext } from "@/contexts/scroll-context";
import React, { useEffect } from "react";
import { StyleSheet, View } from "react-native";
import Animated, { useAnimatedScrollHandler } from "react-native-reanimated";

export default function AnimatedHeaderTitle() {
  const { scrollY } = useScrollContext();

  useEffect(() => {
    return () => {
      scrollY.value = 0;
    };
  }, [scrollY]);

  const scrollHandler = useAnimatedScrollHandler({
    onScroll: (event) => {
      scrollY.value = event.contentOffset.y;
    },
  });

  return (
    <View style={styles.backgroundImage}>
      <Animated.ScrollView
        onScroll={scrollHandler}
        scrollEventThrottle={16}
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.container}>
          <Header
            title="Arunabh Verma"
            subTitle="aruanbhverma • he/him"
            avatarUrl="https://avatars.githubusercontent.com/u/59590144?v=4"
          />
        </View>

        <StatusGrid />

        <SettingsSection title="Preferences">
          <MenuItem
            icon="palette"
            iconType="material"
            iconColor="#8E44AD"
            title="Theme"
            subtitle="Midnight Black"
            rightElement="chevron"
            showSeparator={true}
          />
          <MenuItem
            icon="notifications"
            iconType="ionicons"
            iconColor="#FF6B35"
            title="Notifications"
            subtitle="Manage push notifications"
            rightElement="chevron"
            showSeparator={true}
          />
          <MenuItem
            icon="source-repository"
            iconType="material"
            iconColor="#4ECDC4"
            title="Organization Repos"
            subtitle="Include org repos in dashboard"
            rightElement="switch"
            rightElementValue={true}
          />
        </SettingsSection>

        <SettingsSection title="Support">
          <MenuItem
            icon="person"
            iconType="ionicons"
            iconColor="#007AFF"
            title="App User ID"
            subtitle="9405631b..."
            rightElement="copy"
            rightElementValue="COPY"
            showSeparator={true}
          />
          <MenuItem
            icon="message-text"
            iconType="material"
            iconColor="#4CAF50"
            title="Send Feedback"
            subtitle="Help us improve"
            rightElement="chevron"
            showSeparator={true}
          />
          <MenuItem
            icon="star"
            iconType="ionicons"
            iconColor="#FFB800"
            title="Rate App"
            subtitle="Show some love"
            rightElement="chevron"
          />
        </SettingsSection>

        <SettingsSection title="Legal">
          <MenuItem
            icon="shield-checkmark"
            iconType="ionicons"
            iconColor="#8E8E93"
            title="Privacy Policy"
            subtitle="How we handle your data"
            rightElement="chevron"
            showSeparator={true}
          />
          <MenuItem
            icon="document-text"
            iconType="ionicons"
            iconColor="#8E8E93"
            title="Terms of Use"
            subtitle="Terms and conditions"
            rightElement="chevron"
          />
        </SettingsSection>

        <SettingsSection title="About">
          <MenuItem
            icon="information-circle"
            iconType="ionicons"
            iconColor="#8E44AD"
            title="App Version"
            subtitle="1.0.6"
            rightElement="none"
            showSeparator={true}
          />
          <MenuItem
            icon="ship-wheel"
            iconType="material"
            iconColor="#007AFF"
            title="Onboarding"
            subtitle="Replay the welcome tour"
            rightElement="chevron"
          />
        </SettingsSection>

        <SettingsSection title="Account">
          <MenuItem
            icon="log-out-outline"
            iconType="ionicons"
            iconColor="#FF3B30"
            title="Sign Out"
            subtitle="Sign out of your account"
            rightElement="chevron"
            titleColor="#FF3B30"
          />
        </SettingsSection>

        <View style={styles.bottomPadding} />
      </Animated.ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
  },
  container: {
    paddingHorizontal: 10,
  },
  bottomPadding: {
    height: 40,
  },
});
