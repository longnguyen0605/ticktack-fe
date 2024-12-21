import Svg, { Path, type SvgProps } from "react-native-svg";

interface IProps extends SvgProps {}

export const Brightness = (props: IProps) => {
  return (
    <Svg width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
      <Path
        stroke={props.stroke?props.stroke:"#131927"}
        d="m12 7 1.53 1.304 2.006.16.16 2.005L17 12l-1.305 1.53-.16 2.006-2.004.16L12 17l-1.53-1.305-2.006-.16-.16-2.004L7 12l1.304-1.53.16-2.006 2.005-.16z"
        strokeWidth="1.5"
      />
      <Path
        fill="#131927"
        d="M10.47 15.696 12 17V7l-1.53 1.304-2.006.16-.16 2.005L7 12l1.304 1.53.16 2.006z"
      />
      <Path
        stroke={props.stroke?props.stroke:"#131927"}
        d="M21 3.6v16.8a.6.6 0 0 1-.6.6H3.6a.6.6 0 0 1-.6-.6V3.6a.6.6 0 0 1 .6-.6h16.8a.6.6 0 0 1 .6.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
    </Svg>
  );
};
