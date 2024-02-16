import React, { FC } from "react";
import { ActivityIndicator, Modal, Text, View } from "react-native";
import { marginViewVertical } from "../../utils/margins";
import { styles } from "./styles";

interface ILoadingModal {
  isShown: boolean;
  label: string;
  showProgress?: boolean;
  loadingProgress?: Number;
}

const LoadingModal: FC<ILoadingModal> = ({
  isShown,
  label,
  showProgress = false,
  loadingProgress,
}) => {
  return (
    <Modal animationType="fade" transparent={true} visible={isShown}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <ActivityIndicator size={"large"} />
          {marginViewVertical(2)}
          <Text style={styles.title}>{label}</Text>
          {showProgress && (
            <>
              {marginViewVertical(0.5)}
              <Text>{(loadingProgress ?? 0).toString()} %</Text>
            </>
          )}
        </View>
      </View>
    </Modal>
  );
};

export default LoadingModal;
