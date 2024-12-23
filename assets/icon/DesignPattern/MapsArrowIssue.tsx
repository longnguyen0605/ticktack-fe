import Svg, { Path, G, type SvgProps } from "react-native-svg";

interface IProps extends SvgProps {}

export const MapsArrowIssue = (props: IProps) => {
  return (
    <Svg width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
      <G
        stroke={props.stroke?props.stroke:"#131927"}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      >
        <Path d="m14 17.278-1.819-.707a.5.5 0 0 0-.362 0l-7.517 2.923a.5.5 0 0 1-.617-.711l7.88-14.008a.5.5 0 0 1 .87 0l6.065 10.78M17.121 22.364l2.121-2.121m0 0 2.122-2.122m-2.122 2.122-2.12-2.122m2.12 2.122 2.122 2.121" />
      </G>
    </Svg>
  );
};
