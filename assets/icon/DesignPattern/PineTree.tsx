import Svg, { Path, G, type SvgProps } from "react-native-svg";

interface IProps extends SvgProps {}

export const PineTree = (props: IProps) => {
  return (
    <Svg width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
      <G
        stroke="#131927"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      >
        <Path d="M12 2 7 6.643S10.042 7 12 7s5-.357 5-.357zM8.5 7 5 10.94S7.625 12 12 12s7-1.06 7-1.06L15.5 7" />
        <Path d="M6.5 11.5 3 15.523S5.7 18 12 18s9-2.477 9-2.477L17.5 11.5M12 22v-3" />
      </G>
    </Svg>
  );
};
