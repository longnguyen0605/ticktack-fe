import Svg, { Path, G, type SvgProps } from "react-native-svg";

interface IProps extends SvgProps {}

export const Rocket = (props: IProps) => {
  return (
    <Svg width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
      <G
        stroke="#131927"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      >
        <Path d="M16.061 10.404 14 17h-4l-2.061-6.596a6 6 0 0 1 .998-5.484l2.59-3.315a.6.6 0 0 1 .946 0l2.59 3.315a6 6 0 0 1 .998 5.484M10 20c0 2 2 3 2 3s2-1 2-3M8.5 12.5C5 15 7 19 7 19l3-2M15.932 12.5c3.5 2.5 1.5 6.5 1.5 6.5l-3-2" />
        <Path d="M12 11a2 2 0 1 1 0-4 2 2 0 0 1 0 4" />
      </G>
    </Svg>
  );
};