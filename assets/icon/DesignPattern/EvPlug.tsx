import Svg, { Path, G, type SvgProps } from "react-native-svg";

interface IProps extends SvgProps {}

export const EvPlug = (props: IProps) => {
  return (
    <Svg width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
      <G stroke="#131927" strokeLinecap="round" strokeWidth="1.5">
        <Path d="M12 13.154V21M17 8.385v2.769a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2v-2.77a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2ZM15.334 6.385V3M8.666 6.385V3" />
      </G>
    </Svg>
  );
};
