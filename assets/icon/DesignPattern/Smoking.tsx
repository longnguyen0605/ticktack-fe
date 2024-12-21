import Svg, { Path, Rect, G, type SvgProps } from "react-native-svg";

interface IProps extends SvgProps {}

export const Smoking = (props: IProps) => {
  return (
    <Svg width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
      <G stroke={props.stroke?props.stroke:"#131927"} strokeWidth="1.5">
        <Path
          d="M18 19v3M18 16c0-1-1-2-3-2h-1a3 3 0 0 1-3-3V8.5A2.5 2.5 0 0 1 13.5 6v0h.5M22 16c0-4.5-2-5.5-4-6 2-.5 4-1 4-4s-2.5-4-4-4M22 19v3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Rect width="12" height="3" x="2" y="19" rx=".6" />
      </G>
    </Svg>
  );
};
