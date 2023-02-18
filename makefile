# Set the default parameters for the build, can be overridden with either an
# environment variable or by using `make target KEY=VALUE`.
# If we have a TARGET, the appname includes it. Otherwise it's vanilla.

TARGET_ANDROID := app/android
TARGET_IOS := app/ios
ENV ?= dev

# IOS COMMANDS
# POD Install
pod-install:
	rm -rf ios/Pods && (cd ios && pod install)

# Remove Build
ios-build-remove:
	rm -rf ios/build

# Run IOS application locally while passing on .env configuration file
run-ios:
	. prepare-env.sh .env.$(ENV) .env && . run-packager.sh& react-native run-ios --simulator="iPhone 12"

run-ios-release:
	# Prepare a 'release' version of the iOS app and run in simulator
	. prepare-env.sh .env.$(ENV) .env && . run-packager.sh& react-native run-ios --configuration=release

# ANDROID COMMANDS
run-android:
	. prepare-env.sh .env.$(ENV) .env && . run-packager.sh& react-native run-android --variant=$(ENV)Debug --appIdSuffix "$(ENV)"
