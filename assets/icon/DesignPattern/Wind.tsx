import Svg, { Path, G, type SvgProps } from "react-native-svg";

interface IProps extends SvgProps {}

export const Wind = (props: IProps) => {
  return (
    <Svg width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
      <G
        stroke="#131927"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      >
        <Path d="M18.279 7C19.782 7 21 8.12 21 9.5S19.782 12 18.279 12H3M17.938 20c1.139 0 2.562-.5 2.562-2.5S19.077 15 17.938 15H3M10.412 4C11.842 4 13 5.12 13 6.5S11.841 9 10.412 9H3" />
      </G>
    </Svg>
  );
};
