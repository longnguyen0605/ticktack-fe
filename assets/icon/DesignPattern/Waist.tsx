import Svg, { Path, G, type SvgProps } from "react-native-svg";

interface IProps extends SvgProps {}

export const Waist = (props: IProps) => {
  return (
    <Svg width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
      <G
        stroke="#131927"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      >
        <Path d="M18.4 4s-1.6 3.75-1.6 6.857c0 .995.342 1.827.8 2.656.53.954 1.214 1.903 1.717 3.09.4.943.684 2.034.684 3.397M5.6 4s1.6 3.75 1.6 6.857c0 .995-.34 1.827-.8 2.656-.528.954-1.214 1.903-1.717 3.09A8.5 8.5 0 0 0 4 20M6.4 13.513h11.2" />
        <Path d="M4.684 16.604S10.4 17.714 12 20c1.6-2.286 7.317-3.396 7.317-3.396" />
      </G>
    </Svg>
  );
};
