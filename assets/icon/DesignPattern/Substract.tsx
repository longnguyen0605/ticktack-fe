import Svg, { Path, G, type SvgProps } from "react-native-svg";

interface IProps extends SvgProps {}

export const Substract = (props: IProps) => {
  return (
    <Svg width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
      <G
        stroke={props.stroke?props.stroke:"#131927"}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      >
        <Path d="M15 3.6v10.8a.6.6 0 0 1-.6.6H3.6a.6.6 0 0 1-.6-.6V3.6a.6.6 0 0 1 .6-.6h10.8a.6.6 0 0 1 .6.6M13.5 21h3M21 13.5v3M21 19.5v.9a.6.6 0 0 1-.6.6h-.9M10.5 21h-.9a.6.6 0 0 1-.6-.6v-.9M19.5 9h.9a.6.6 0 0 1 .6.6v.9" />
        <Path d="M16.5 9H9.6a.6.6 0 0 0-.6.6v6.9" />
      </G>
    </Svg>
  );
};
