import Svg, { Path, G, type SvgProps } from "react-native-svg";

interface IProps extends SvgProps {}

export const DoubleCheck = (props: IProps) => {
  return (
    <Svg width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
      <G stroke="#131927" strokeLinecap="round" strokeWidth="1.5">
        <Path d="m1.5 12.5 4.076 4.076a.6.6 0 0 0 .848 0L9 14M16 7l-4 4" />
        <Path d="m7 12 4.576 4.576a.6.6 0 0 0 .848 0L22 7" />
      </G>
    </Svg>
  );
};
