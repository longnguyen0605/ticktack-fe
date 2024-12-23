import Svg, { Path, G, type SvgProps } from "react-native-svg";

interface IProps extends SvgProps {}

export const Journal = (props: IProps) => {
  return (
    <Svg width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
      <G
        stroke={props.stroke?props.stroke:"#131927"}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      >
        <Path d="M6 6h12M6 10h12M13 14h5M13 18h5M2 21.4V2.6a.6.6 0 0 1 .6-.6h18.8a.6.6 0 0 1 .6.6v18.8a.6.6 0 0 1-.6.6H2.6a.6.6 0 0 1-.6-.6" />
        <Path d="M6 18v-4h3v4z" />
      </G>
    </Svg>
  );
};
