import Svg, { Path, G, type SvgProps } from "react-native-svg";

interface IProps extends SvgProps {}

export const DataTransferUp = (props: IProps) => {
  return (
    <Svg width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
      <G
        stroke={props.stroke?props.stroke:"#131927"}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      >
        <Path d="M7 4v1M7 9v1M17 20V4m0 0 3 3m-3-3-3 3M7 14v6m0 0 3-3m-3 3-3-3" />
      </G>
    </Svg>
  );
};
