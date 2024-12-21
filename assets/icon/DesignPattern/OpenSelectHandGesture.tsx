import Svg, { Path, G, type SvgProps } from "react-native-svg";

interface IProps extends SvgProps {}

export const OpenSelectHandGesture = (props: IProps) => {
  return (
    <Svg width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
      <G
        stroke="#131927"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      >
        <Path d="m8 14.571-1.823-1.736a1.56 1.56 0 0 0-2.247.103v0a1.56 1.56 0 0 0 .035 2.092l5.942 6.338c.379.403.906.632 1.459.632H16c2.4 0 4-2 4-4q0 0 0 0V9.429" />
        <Path d="M17 10v-.571c0-2.286 3-2.286 3 0M14 10V8.286C14 6 17 6 17 8.286V10M11 10V7.5c0-2.286 3-2.286 3 0q0 0 0 0V10M8 14.571V3.5A1.5 1.5 0 0 1 9.5 2v0c.828 0 1.5.67 1.5 1.499V10" />
      </G>
    </Svg>
  );
};
