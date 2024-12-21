import Svg, { Path, G, type SvgProps } from "react-native-svg";

interface IProps extends SvgProps {}

export const Frame = (props: IProps) => {
  return (
    <Svg width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
      <G
        stroke={props.stroke?props.stroke:"#131927"}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="1.5"
      >
        <Path
          d="M4.998 2.001H2v2.998h2.998zM4.998 10.502H2V13.5h2.998zM20.498 5v5.503M3.5 5v5.503M20.498 13.502v5.502M3.5 13.502v5.502M5 20.502h5.5"
          strokeWidth="1.5"
        />
        <Path d="M5 3.503h5.5" strokeWidth="1.22" />
        <Path d="M13.498 20.499h5.5" strokeWidth="1.5" />
        <Path d="M13.498 3.501h5.5" strokeWidth="1.22" />
        <Path
          d="M4.998 19.001H2v2.998h2.998zM21.998 2.002H19V5h2.998zM13.498 2H10.5v2.998h2.998zM21.998 10.503H19V13.5h2.998zM21.998 19.002H19V22h2.998zM13.498 19H10.5v2.998h2.998z"
          strokeWidth="1.5"
        />
      </G>
    </Svg>
  );
};
