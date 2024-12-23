import Svg, { Path, G, type SvgProps } from "react-native-svg";

interface IProps extends SvgProps {}

export const FrameSimple = (props: IProps) => {
  return (
    <Svg width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
      <G
        stroke={props.stroke?props.stroke:"#131927"}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="1.5"
        strokeWidth="1.5"
      >
        <Path d="M4.998 2H2v2.998h2.998zM4.998 3.501h14M3.498 4.998V19M20.496 5v14.002M4.998 20.501h14M4.998 19H2v2.998h2.998zM21.996 2.002h-2.998V5h2.998zM21.996 19.002h-2.998V22h2.998z" />
      </G>
    </Svg>
  );
};
