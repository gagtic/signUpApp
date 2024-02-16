import React from "react";
import { View } from "react-native";
import { heightPercentageToDP, widthPercentageToDP } from "./responsive";

export const marginViewVertical = (marginValue: number) => (
  <View style={{ marginBottom: heightPercentageToDP(marginValue) }} />
);

export const marginViewHorizontal = (marginValue: number) => (
  <View style={{ marginEnd: widthPercentageToDP(marginValue) }} />
);
