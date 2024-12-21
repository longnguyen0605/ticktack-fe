import Svg, { Path, G, type SvgProps } from "react-native-svg";

interface IProps extends SvgProps {}

export const SingleTapGesture = (props: IProps) => {
  return (
    <Svg width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
      <G
        stroke="#131927"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      >
        <Path d="M12 20.5a7 7 0 1 0 0-14 7 7 0 0 0 0 14" />
        <Path d="M4 7.29C5.496 5.039 8.517 3.5 12 3.5s6.504 1.539 8 3.79" />
      </G>
    </Svg>
  );
};
