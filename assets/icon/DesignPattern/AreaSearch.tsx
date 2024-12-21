import Svg, { Path, G, type SvgProps } from "react-native-svg";

interface IProps extends SvgProps {}

export const AreaSearch = (props: IProps) => {
  return (
    <Svg width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
      <G
        stroke="#131927"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      >
        <Path d="M20.124 20.119a3 3 0 1 0-4.248-4.237 3 3 0 0 0 4.248 4.237m0 0L22 22M7 2H4v3M4 11v2M11 2h2M11 22h2M20 11v2M17 2h3v3M7 22H4v-3" />
      </G>
    </Svg>
  );
};
