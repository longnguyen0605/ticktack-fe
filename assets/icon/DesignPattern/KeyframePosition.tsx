import Svg, { Path, G, type SvgProps } from "react-native-svg";

interface IProps extends SvgProps {}

export const KeyframePosition = (props: IProps) => {
  return (
    <Svg width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
      <G
        stroke="#131927"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      >
        <Path d="m16.68 9.384-4.22 5.063a.6.6 0 0 1-.92 0L7.32 9.384a.6.6 0 0 1 0-.768l4.22-5.063a.6.6 0 0 1 .92 0l4.22 5.063a.6.6 0 0 1 0 .768M3 20h9m9 0h-9m0 0v-3" />
      </G>
    </Svg>
  );
};
