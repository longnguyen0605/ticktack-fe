import Svg, { Path, G, type SvgProps } from "react-native-svg";

interface IProps extends SvgProps {}

export const Drag = (props: IProps) => {
  return (
    <Svg width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
      <G
        stroke="#131927"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      >
        <Path d="M12 12 4 4m0 0v4m0-4h4M12 12l8-8m0 0v4m0-4h-4M12 12l-8 8m0 0v-4m0 4h4M12 12l8 8m0 0v-4m0 4h-4" />
      </G>
    </Svg>
  );
};
