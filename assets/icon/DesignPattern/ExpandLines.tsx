import Svg, { Path, G, type SvgProps } from "react-native-svg";

interface IProps extends SvgProps {}

export const ExpandLines = (props: IProps) => {
  return (
    <Svg width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
      <G
        stroke="#131927"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      >
        <Path d="M18 2H6M18 22H6M12 14v5m0 0 3-3m-3 3-3-3M12 10V5m0 0 3 3m-3-3L9 8" />
      </G>
    </Svg>
  );
};
