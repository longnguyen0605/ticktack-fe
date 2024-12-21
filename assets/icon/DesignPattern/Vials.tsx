import Svg, { Path, G, type SvgProps } from "react-native-svg";

interface IProps extends SvgProps {}

export const Vials = (props: IProps) => {
  return (
    <Svg width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
      <G
        stroke="#131927"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      >
        <Path d="M21 21H3M9 12H5M19 12h-4M7 18a2 2 0 0 1-2-2V3h4v13a2 2 0 0 1-2 2M17 18a2 2 0 0 1-2-2V3h4v13a2 2 0 0 1-2 2" />
      </G>
    </Svg>
  );
};
