import Svg, { Path, G, type SvgProps } from "react-native-svg";

interface IProps extends SvgProps {}

export const DivideSelection2 = (props: IProps) => {
  return (
    <Svg width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
      <G
        stroke="#131927"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      >
        <Path d="M2 12h20M7 4H4v3M11 4h2M17 4h3v3M11 20h2M7 20H4v-3M17 20h3v-3" />
      </G>
    </Svg>
  );
};
