import Svg, { Path, G, type SvgProps } from "react-native-svg";

interface IProps extends SvgProps {}

export const NumberedListRight = (props: IProps) => {
  return (
    <Svg width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
      <G
        stroke={props.stroke?props.stroke:"#131927"}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      >
        <Path d="M3 5h12M20.5 7V3L19 4.5M21 14h-2l1.905-2.963a.43.43 0 0 0 .072-.323C20.92 10.456 20.716 10 20 10c-1 0-1 .889-1 .889q0 0 0 0v.222M19.5 19h.5a1 1 0 0 1 1 1v0a1 1 0 0 1-1 1h-1M19 17h2l-1.5 2M3 12h12M3 19h12" />
      </G>
    </Svg>
  );
};
