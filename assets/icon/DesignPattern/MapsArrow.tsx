import Svg, { Path, type SvgProps } from "react-native-svg";

interface IProps extends SvgProps {}

export const MapsArrow = (props: IProps) => {
  return (
    <Svg width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
      <Path
        stroke={props.stroke?props.stroke:"#131927"}
        d="m3.685 18.783 7.88-14.008a.5.5 0 0 1 .87 0l7.88 14.008a.5.5 0 0 1-.617.71l-7.517-2.922a.5.5 0 0 0-.362 0l-7.517 2.923a.5.5 0 0 1-.617-.711"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
    </Svg>
  );
};
