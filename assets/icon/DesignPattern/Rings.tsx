import Svg, { Path, G, type SvgProps } from "react-native-svg";

interface IProps extends SvgProps {}

export const Rings = (props: IProps) => {
  return (
    <Svg width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
      <G
        stroke="#131927"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      >
        <Path d="M8 8a6 6 0 1 0 0 12A6 6 0 0 0 8 8m0 0V3" />
        <Path d="M16 8a6 6 0 1 0 0 12 6 6 0 0 0 0-12m0 0V3" />
      </G>
    </Svg>
  );
};
