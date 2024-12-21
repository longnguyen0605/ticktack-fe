import Svg, { Path, G, type SvgProps } from "react-native-svg";

interface IProps extends SvgProps {}

export const FlipReverse = (props: IProps) => {
  return (
    <Svg width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
      <G
        stroke="#131927"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      >
        <Path d="M9.5 12v2M5.75 12l-.937 2M7.625 20H9.5v-2M3.875 20H2l.938-2M7.625 8 9.5 4v4M14.5 20H22L14.5 4z" />
      </G>
    </Svg>
  );
};
