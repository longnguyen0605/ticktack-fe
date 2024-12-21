import Svg, { Path, G, type SvgProps } from "react-native-svg";

interface IProps extends SvgProps {}

export const SearchFont = (props: IProps) => {
  return (
    <Svg width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
      <G
        stroke="#131927"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      >
        <Path d="M19.5 19.5 21 21M14 17a3 3 0 1 0 6 0 3 3 0 0 0-6 0M9 5v12m0 0H7m2 0h2M15 7V5H3v2" />
      </G>
    </Svg>
  );
};
