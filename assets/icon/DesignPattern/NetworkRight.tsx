import Svg, { Rect, Path, G, type SvgProps } from "react-native-svg";

interface IProps extends SvgProps {}

export const NetworkRight = (props: IProps) => {
  return (
    <Svg width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
      <G stroke="#131927" strokeWidth="1.5">
        <Rect
          width="7"
          height="5"
          rx=".6"
          transform="matrix(0 -1 -1 0 22 21)"
        />
        <Rect
          width="7"
          height="5"
          rx=".6"
          transform="matrix(0 -1 -1 0 7 15.5)"
        />
        <Rect
          width="7"
          height="5"
          rx=".6"
          transform="matrix(0 -1 -1 0 22 10)"
        />
        <Path d="M17 17.5h-3.5a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2H17M11.5 12H7" />
      </G>
    </Svg>
  );
};
