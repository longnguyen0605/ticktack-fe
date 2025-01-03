import Svg, { Path, G, type SvgProps } from "react-native-svg";

interface IProps extends SvgProps {}

export const EcologyBook = (props: IProps) => {
  return (
    <Svg width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
      <G stroke={props.stroke?props.stroke:"#131927"} strokeLinecap="round" strokeWidth="1.5">
        <Path d="M4 19V5a2 2 0 0 1 2-2h13.4a.6.6 0 0 1 .6.6v13.114" />
        <Path d="M10 14s.9-3.118 3-5" strokeLinejoin="round" />
        <Path
          d="m12.802 12.425-.134.012a3.094 3.094 0 0 1-3.366-2.774 3.06 3.06 0 0 1 2.761-3.35l2.986-.28a.35.35 0 0 1 .381.314l.255 2.58a3.194 3.194 0 0 1-2.883 3.498"
          strokeLinejoin="round"
        />
        <Path d="M6 17h14M6 21h14" />
        <Path d="M6 21a2 2 0 1 1 0-4" strokeLinejoin="round" />
      </G>
    </Svg>
  );
};
