import Svg, { Path, G, type SvgProps } from "react-native-svg";

interface IProps extends SvgProps {}

export const LeftRoundArrow = (props: IProps) => {
  return (
    <Svg width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
      <G stroke="#131927" strokeWidth="1.5">
        <Path
          d="M16.75 12h-10m0 0 2.75 2.75M6.75 12 9.5 9.25"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path d="M2 15V9a4 4 0 0 1 4-4h12a4 4 0 0 1 4 4v6a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4Z" />
      </G>
    </Svg>
  );
};
