import Svg, { Path, G, type SvgProps } from "react-native-svg";

interface IProps extends SvgProps {}

export const DataTransferCheck = (props: IProps) => {
  return (
    <Svg width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
      <G
        stroke="#131927"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      >
        <Path d="m14 19 3 3 5-5M17 14V4m0 0 3 3m-3-3-3 3M7 4v16m0 0 3-3m-3 3-3-3" />
      </G>
    </Svg>
  );
};
