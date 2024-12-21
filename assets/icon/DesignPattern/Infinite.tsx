import Svg, { Path, G, type SvgProps } from "react-native-svg";

interface IProps extends SvgProps {}

export const Infinite = (props: IProps) => {
  return (
    <Svg width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
      <G
        stroke="#131927"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      >
        <Path d="m14 9-.25.375M10 9a5 5 0 1 0 0 6l.334-.5M10 9l4 6a5 5 0 1 0 0-6" />
      </G>
    </Svg>
  );
};
