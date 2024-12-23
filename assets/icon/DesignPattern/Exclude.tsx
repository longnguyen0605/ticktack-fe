import Svg, { Path, G, type SvgProps } from "react-native-svg";

interface IProps extends SvgProps {}

export const Exclude = (props: IProps) => {
  return (
    <Svg width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
      <G
        stroke={props.stroke?props.stroke:"#131927"}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      >
        <Path d="M10.5 15h-.9a.6.6 0 0 0-.6.6v4.8a.6.6 0 0 0 .6.6h10.8a.6.6 0 0 0 .6-.6V9.6a.6.6 0 0 0-.6-.6h-4.8a.6.6 0 0 0-.6.6v.9" />
        <Path d="M13.5 15h.9a.6.6 0 0 0 .6-.6v-.9M9 13.5v.9a.6.6 0 0 1-.6.6H3.6a.6.6 0 0 1-.6-.6V3.6a.6.6 0 0 1 .6-.6h10.8a.6.6 0 0 1 .6.6v4.8a.6.6 0 0 1-.6.6h-.9" />
        <Path d="M9 10.5v-.9a.6.6 0 0 1 .6-.6h.9" />
      </G>
    </Svg>
  );
};
