import Svg, { Path, G, type SvgProps } from "react-native-svg";

interface IProps extends SvgProps {}

export const EaseOutControlPoint = (props: IProps) => {
  return (
    <Svg width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
      <G
        stroke="#131927"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      >
        <Path d="M3 20S13 4 21 4M7 4a2 2 0 1 1-4 0 2 2 0 0 1 4 0m0 0h2M14 4h-2" />
      </G>
    </Svg>
  );
};
