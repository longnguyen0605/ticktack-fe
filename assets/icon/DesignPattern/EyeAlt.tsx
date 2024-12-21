import Svg, { Path, G, type SvgProps } from "react-native-svg";

interface IProps extends SvgProps {}

export const EyeAlt = (props: IProps) => {
  return (
    <Svg width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
      <G
        stroke="#131927"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      >
        <Path d="M3 13c3.6-8 14.4-8 18 0" />
        <Path d="M12 17a3 3 0 1 1 0-6 3 3 0 0 1 0 6" />
      </G>
    </Svg>
  );
};
