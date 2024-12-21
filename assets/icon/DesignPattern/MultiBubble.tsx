import Svg, { Path, G, type SvgProps } from "react-native-svg";

interface IProps extends SvgProps {}

export const MultiBubble = (props: IProps) => {
  return (
    <Svg width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
      <G
        stroke="#131927"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      >
        <Path d="M7.5 22a5.5 5.5 0 1 0-4.764-2.75l-.461 2.475 2.475-.46A5.5 5.5 0 0 0 7.5 22" />
        <Path d="M15.282 17.898A8 8 0 0 0 18 16.93l3.6.67-.67-3.6A8 8 0 1 0 6.083 8.849" />
      </G>
    </Svg>
  );
};
