import Svg, { Path, G, type SvgProps } from "react-native-svg";

interface IProps extends SvgProps {}

export const TriangleFlagTwoStripes = (props: IProps) => {
  return (
    <Svg width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
      <G
        stroke="#131927"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      >
        <Path d="M8 21v-5m0 0 9.723-6.482a.6.6 0 0 0-.017-1.01l-8.79-5.441a.6.6 0 0 0-.916.51zM8 11l6.5-4.476" />
      </G>
    </Svg>
  );
};
