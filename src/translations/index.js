import React from 'react';
import * as Localization from 'expo-localization';
import i18n from 'i18n-js';
import memoize from 'lodash.memoize'; // Use for caching/memoize for better performance

import {I18nManager, NativeModules, Platform} from 'react-native';

export const translationGetters = {
  // lazy requires (metro bundler does not support symlinks)
  en: () => require('./en.json'),
  ru: () => require("./ru.json"),
};

export const translate = memoize(
  (key, config) => i18n.t(key, config),
  (key, config) => (config ? key + JSON.stringify(config) : key),
);

export const setI18nConfig = () => {
  
  var currentLang = getDeviceLanguage();
  if (currentLang.indexOf('ru') == -1) {
    currentLang = 'en';
  }
  console.log("currentLang = " + currentLang);

  // fallback if no available language fits
  const fallback = {languageTag: currentLang , isRTL: false};

  
  const {languageTag, isRTL} = fallback;


  // clear translation cache
  translate.cache.clear();
  // update layout direction
  I18nManager.forceRTL(isRTL);
  // set i18n-js config
  i18n.translations = {[languageTag]: translationGetters[languageTag]()};
  i18n.locale = languageTag;
  
  
  /*
  // Set the locale once at the beginning of your app.
  i18n.locale = Localization.locale;
  // When a value is missing from a language it'll fallback to another language with the key present.
  i18n.fallbacks = true;
  */
};

export const getDeviceLanguage = () => {
  const deviceLanguage =
    Platform.OS === 'ios'
      ? NativeModules.SettingsManager.settings.AppleLocale ||
        NativeModules.SettingsManager.settings.AppleLanguages[0] //iOS 13
      : NativeModules.I18nManager.localeIdentifier;

  return deviceLanguage.split('_')[0].trim();
};
