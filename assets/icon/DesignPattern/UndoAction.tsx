import Svg, { Path, G, type SvgProps } from "react-native-svg";

interface IProps extends SvgProps {}

export const UndoAction = (props: IProps) => {
  return (
    <Svg width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
      <G
        stroke="#131927"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      >
        <Path d="M5 5v6M8.5 8H15q0 0 0 0s5 0 5 4.706C20 18 15 18 15 18H6.284" />
        <Path d="M11.5 11.5 8 8l3.5-3.5" />
      </G>
    </Svg>
  );
};