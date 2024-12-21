import Svg, { Path, G, type SvgProps } from "react-native-svg";

interface IProps extends SvgProps {}

export const FrameSelect = (props: IProps) => {
  return (
    <Svg width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
      <G
        stroke={props.stroke?props.stroke:"#131927"}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="1.5"
        strokeWidth="1.5"
      >
        <Path d="M4.998 2H2v2.998h2.998zM4.998 3.501h14M3.5 4.999V19M20.498 5v14.002M4.998 20.501h14M4.998 19H2v2.998h2.998zM21.998 2.002H19V5h2.998zM21.998 19.002H19V22h2.998z" />
        <Path
          d="m10.996 15.002-3-7 7 3-2.998.999zM12 12.002l2.998 3z"
          clipRule="evenodd"
        />
      </G>
    </Svg>
  );
};
