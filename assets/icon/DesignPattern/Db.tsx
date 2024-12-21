import Svg, { Path, G, type SvgProps } from "react-native-svg";

interface IProps extends SvgProps {}

export const Db = (props: IProps) => {
  return (
    <Svg width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
      <G stroke="#131927" strokeWidth="1.5">
        <Path d="M5 12v6s0 3 7 3 7-3 7-3v-6" />
        <Path d="M5 6v6s0 3 7 3 7-3 7-3V6" />
        <Path d="M12 3c7 0 7 3 7 3s0 3-7 3-7-3-7-3 0-3 7-3Z" />
      </G>
    </Svg>
  );
};
