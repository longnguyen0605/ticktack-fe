import Svg, { Path, G, type SvgProps } from "react-native-svg";

interface IProps extends SvgProps {}

export const Repository = (props: IProps) => {
  return (
    <Svg width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
      <G stroke="#131927" strokeLinecap="round" strokeWidth="1.5">
        <Path d="M4 19V5a2 2 0 0 1 2-2h13.4a.6.6 0 0 1 .6.6v13.114" />
        <Path d="M15 17v5l2.5-1.6L20 22v-5" strokeLinejoin="round" />
        <Path d="M6 17h14" />
        <Path d="M6 17a2 2 0 1 0 0 4h5.5" strokeLinejoin="round" />
      </G>
    </Svg>
  );
};
