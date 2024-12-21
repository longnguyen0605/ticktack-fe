import Svg, { Path, G, type SvgProps } from "react-native-svg";

interface IProps extends SvgProps {}

export const SwitchOff = (props: IProps) => {
  return (
    <Svg width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
      <G stroke="#131927" strokeWidth="1.5">
        <Path
          fill="#131927"
          d="M7 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path d="M17 17H7A5 5 0 0 1 7 7h10a5 5 0 0 1 0 10Z" />
      </G>
    </Svg>
  );
};
