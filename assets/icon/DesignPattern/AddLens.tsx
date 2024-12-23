import Svg, { Path, G, type SvgProps } from "react-native-svg";

interface IProps extends SvgProps {}

export const AddLens = (props: IProps) => {
  return (
    <Svg width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
      <G
        stroke={props.stroke?props.stroke:"#131927"}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      >
        <Path d="M2.992 6h3m3 0h-3m0 0V3m0 3v3M2.111 13.5C2.835 18.311 6.987 22 12 22c5.522 0 10-4.477 10-10 0-5.013-3.69-9.164-8.5-9.888" />
        <Path d="M17.196 9a6 6 0 0 0-.323-.5M17.811 13.5a6.01 6.01 0 0 1-4.311 4.311" />
      </G>
    </Svg>
  );
};
