/** Library to fetch queries */
import {
  QueryClientProvider,
  useQueryClient,
  useQuery,
} from '@tanstack/react-query';

export {QueryClientProvider, useQueryClient, useQuery};

/** Client http handler */

import {Axios, AxiosPromise, AxiosResponse} from 'axios';

export {Axios};
export type {AxiosPromise, AxiosResponse};

/** Library to store values at storage*/
import {MMKVLoader, useMMKVStorage} from 'react-native-mmkv-storage';

export {MMKVLoader, useMMKVStorage};

/** Library to deal with Images */

import FastImage from 'react-native-fast-image';

export {FastImage};

/** Library to use for lists*/
import {FlashList, AnimatedFlashList} from '@shopify/flash-list';

export {FlashList, AnimatedFlashList};

/** Library to environment: see docs for configure natives .env at https://github.com/lugg/react-native-config*/
import Config from 'react-native-config';
export {Config};

/** Library for tests */
import {
  render,
  fireEvent,
  userEvent,
  RenderOptions,
} from '@testing-library/react-native';

export {render, fireEvent, userEvent};
export type {RenderOptions};
