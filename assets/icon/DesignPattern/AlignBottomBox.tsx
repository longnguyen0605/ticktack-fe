import Svg, { Path, G, type SvgProps } from "react-native-svg";

interface IProps extends SvgProps {}

export const AlignBottomBox = (props: IProps) => {
  return (
    <Svg width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
      <G
        stroke="#131927"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      >
        <Path d="m4 8 .01.011M4 4l.01.011M8 4l.01.011M12 4l.01.011M16 4l.01.011M20 4l.01.011M20 8l.01.011M4 12v8h16v-8z" />
      </G>
    </Svg>
  );
};
