import Svg, { Rect, Path, G, type SvgProps } from "react-native-svg";

interface IProps extends SvgProps {}

export const NetworkLeft = (props: IProps) => {
  return (
    <Svg width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
      <G stroke={props.stroke?props.stroke:"#131927"} strokeWidth="1.5">
        <Rect
          width="7"
          height="5"
          x="2"
          y="21"
          rx=".6"
          transform="rotate(-90 2 21)"
        />
        <Rect
          width="7"
          height="5"
          x="17"
          y="15.5"
          rx=".6"
          transform="rotate(-90 17 15.5)"
        />
        <Rect
          width="7"
          height="5"
          x="2"
          y="10"
          rx=".6"
          transform="rotate(-90 2 10)"
        />
        <Path d="M7 17.5h3.5a2 2 0 0 0 2-2v-7a2 2 0 0 0-2-2H7M12.5 12H17" />
      </G>
    </Svg>
  );
};
