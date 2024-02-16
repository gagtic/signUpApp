import React from "react";
import { View } from "react-native";
import { heightPercentageToDP, widthPercentageToDP } from "./responsive";

/**
 * 
 * @param marginValue margin value to give vertically
 * @returns a view with denoted margin
 */
export const marginViewVertical = (marginValue: number) => (
  <View style={{ marginBottom: heightPercentageToDP(marginValue) }} />
);

/**
 * 
 * @param marginValue margin value to give horizontally
 * @returns a view with denoted margin
 */
export const marginViewHorizontal = (marginValue: number) => (
  <View style={{ marginEnd: widthPercentageToDP(marginValue) }} />
);
