# Introduction to React Native

## Step 1 - v0.1.0
- Create a new app with `react-native init Movies` command. Alternatively check out Tag 0.1.0 of this repo.
- Run `react-native run-ios` and `react-native run-android` to have the application launched on both platforms.

**Note**

You may get an issue compiling the iOS application. This is a known issue with latest version of React Native and relative dependencies. Please run the following commands:   
- `cd node_modules/react-native`
- `scripts/ios-install-third-party.sh`
- `cd third-party/glog-0.3.5/`
- `../../scripts/ios-configure-glog.sh`     

Read more about this issue: https://github.com/facebook/react-native/issues/20774