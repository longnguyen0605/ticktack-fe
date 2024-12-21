import Svg, { Path, type SvgProps } from "react-native-svg";

interface IProps extends SvgProps {}

export const TriangleFlagCircle = (props: IProps) => {
  return (
    <Svg width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
      <Path
        stroke="#131927"
        d="M9 21.5v-6m0 0V6.997a.6.6 0 0 1 .88-.53l6.67 3.53a.6.6 0 0 1 .024 1.048zM22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
    </Svg>
  );
};
