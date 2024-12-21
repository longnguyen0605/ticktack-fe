import Svg, { Path, G, type SvgProps } from "react-native-svg";

interface IProps extends SvgProps {}

export const Fish = (props: IProps) => {
  return (
    <Svg width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
      <G
        stroke="#131927"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      >
        <Path d="M10.5 9s0-2-1-4c4 0 6.5 2.5 6.5 2.5s3.5-.5 6 4.5c-1 5.5-6 6-6 6l-4 2.5v-3c-2.5-1-5-3.5-5-5S10.5 9 10.5 9m0 0s1-.5 2-.5M2 9.5l1 3-1 3s5 0 5-3-5-3-5-3M17 12.01l.01-.011" />
      </G>
    </Svg>
  );
};
