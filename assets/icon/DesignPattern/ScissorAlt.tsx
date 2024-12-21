import Svg, { Path, G, type SvgProps } from "react-native-svg";

interface IProps extends SvgProps {}

export const ScissorAlt = (props: IProps) => {
  return (
    <Svg width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
      <G
        stroke="#131927"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      >
        <Path d="M10.236 8a3 3 0 1 0-4.472-4 3 3 0 0 0 4.472 4m0 0L20 16M10.236 16a3 3 0 1 1-4.472 4 3 3 0 0 1 4.472-4m0 0L20 8" />
      </G>
    </Svg>
  );
};
