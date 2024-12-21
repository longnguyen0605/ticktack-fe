import Svg, { Path, G, type SvgProps } from "react-native-svg";

interface IProps extends SvgProps {}

export const Sort = (props: IProps) => {
  return (
    <Svg width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
      <G
        stroke="#131927"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      >
        <Path d="M10 14H2M8 10H2M6 6H2M12 18H2M19 20V4m0 16 3-3m-3 3-3-3m3-13 3 3m-3-3-3 3" />
      </G>
    </Svg>
  );
};
