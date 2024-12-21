import Svg, { Path, G, type SvgProps } from "react-native-svg";

interface IProps extends SvgProps {}

export const AddMediaImage = (props: IProps) => {
  return (
    <Svg width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
      <G
        stroke={props.stroke?props.stroke:"#131927"}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      >
        <Path d="M13 21H3.6a.6.6 0 0 1-.6-.6V3.6a.6.6 0 0 1 .6-.6h16.8a.6.6 0 0 1 .6.6V13" />
        <Path d="m3 16 7-3 5.5 2.5M16 10a2 2 0 1 1 0-4 2 2 0 0 1 0 4M16 19h3m3 0h-3m0 0v-3m0 3v3" />
      </G>
    </Svg>
  );
};
