# 🚀 Expo Header-Subtitle Animation

A smooth React Native demo showcasing **scroll-driven header animations** where the main title shrinks upward and a subtitle seamlessly fades and slides into place.

## Demo

Check out the animated header in action 👇:

| iOS                  |
| ------------------------------ |
| <video src="https://github.com/user-attachments/assets/f57a8bd8-f53b-491a-9a2e-1a9acd31ae8e" /> |


## ✨ What It Does

This interactive demo creates a fluid header animation where:

* **Always-Visible Title**: The main header title stays at the top
* **Disappearing Username**: Username fades out as it scrolls away behind the header
* **Subtitle Reveal**: A subtitle animates upward from below with a smooth fade-in
* **Dynamic Title Adjustment**: Title shrinks slightly and shifts upward to make space for the subtitle
* **Scroll-Driven Illusion**: All transitions are tied to scroll position for natural, seamless movement

## 🔧 How It Works

The animation is powered by **React Native Reanimated v3** with interpolation and shared values:

### Header Transition System

* **Scroll-Based Interpolation**: Maps scroll values to transformations
* **Title Scaling & Translation**: Title shrinks from `scale(1)` to \~`scale(0.9)` and shifts upward
* **Subtitle Entrance**: Subtitle starts off-screen with opacity 0, slides upward, and fades in
* **Clamped Extrapolation**: Prevents overshooting when scrolling too far
* **UI Thread Execution**: All worklets run at 60fps for ultra-smooth performance

### Animation Flow

1. Scroll begins → as username goes behind the header
2. Subtitle animates upward from the edge to the header
3. Title shifts upward and shrinks slightly
4. Subtitle settles neatly under the title, completing the illusion

### 🎯 Feel Free To

* Fork this repository and adapt the animation for your own app
* Use it as a starting point for more advanced header transitions
* Learn from the interpolation techniques and shared values

## 🤝 Contributing

Contributions are welcome! Feel free to:

* Submit PRs with improvements
* Share new variations of the animation
* Suggest refinements to make it more flexible

## 📚 Learn More

* [Expo Documentation](https://docs.expo.dev/)
* [React Native Reanimated](https://docs.swmansion.com/react-native-reanimated/)

---

**Happy coding! 🎉** Create beautiful, scroll-driven header animations with Expo & Reanimated.

---
