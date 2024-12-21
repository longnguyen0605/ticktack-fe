import Svg, { Path, G, type SvgProps } from "react-native-svg";

interface IProps extends SvgProps {}

export const NonBinary = (props: IProps) => {
  return (
    <Svg width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
      <G
        stroke="#131927"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      >
        <Path d="M12 9a6 6 0 1 1 0 12 6 6 0 0 1 0-12m0 0V3M9 4l6 3M15 4 9 7" />
      </G>
    </Svg>
  );
};
