import Svg, { Rect, Path, G, type SvgProps } from "react-native-svg";

interface IProps extends SvgProps {}

export const Network = (props: IProps) => {
  return (
    <Svg width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
      <G stroke={props.stroke?props.stroke:"#131927"} strokeWidth="1.5">
        <Rect width="7" height="5" x="3" y="2" rx=".6" />
        <Rect width="7" height="5" x="8.5" y="17" rx=".6" />
        <Rect width="7" height="5" x="14" y="2" rx=".6" />
        <Path d="M6.5 7v3.5a2 2 0 0 0 2 2h7a2 2 0 0 0 2-2V7M12 12.5V17" />
      </G>
    </Svg>
  );
};
