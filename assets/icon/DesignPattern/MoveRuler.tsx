import Svg, { Path, G, type SvgProps } from "react-native-svg";

interface IProps extends SvgProps {}

export const MoveRuler = (props: IProps) => {
  return (
    <Svg width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
      <G
        stroke={props.stroke?props.stroke:"#131927"}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      >
        <Path d="M15.4 22H8.6a.6.6 0 0 1-.6-.6V2.6a.6.6 0 0 1 .6-.6h6.8a.6.6 0 0 1 .6.6v18.8a.6.6 0 0 1-.6.6M16 17h-3M16 7h-3M13 12h10m0 0-2 2m2-2-2-2M1 12l2-2m-2 2 2 2m-2-2h7" />
      </G>
    </Svg>
  );
};
