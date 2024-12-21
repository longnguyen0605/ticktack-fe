import Svg, { Path, G, type SvgProps } from "react-native-svg";

interface IProps extends SvgProps {}

export const Redo = (props: IProps) => {
  return (
    <Svg width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
      <G
        stroke="#131927"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      >
        <Path d="M19.5 8H9q0 0 0 0s-5 0-5 4.706C4 18 9 18 9 18h8.714" />
        <Path d="M16.5 11.5 20 8l-3.5-3.5" />
      </G>
    </Svg>
  );
};
