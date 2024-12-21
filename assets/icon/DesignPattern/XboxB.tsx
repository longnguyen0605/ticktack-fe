import Svg, { Path, G, type SvgProps } from "react-native-svg";

interface IProps extends SvgProps {}

export const XboxB = (props: IProps) => {
  return (
    <Svg width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
      <G
        stroke="#131927"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      >
        <Path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10" />
        <Path d="M12.599 11.826c2.535 0 2.535 4.174 0 4.174H9.5v-4.174m3.099 0H9.5m3.099 0c2.535 0 2.535-3.826 0-3.826H9.5v3.826" />
      </G>
    </Svg>
  );
};
