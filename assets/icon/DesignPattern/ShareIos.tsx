import Svg, { Path, G, type SvgProps } from "react-native-svg";

interface IProps extends SvgProps {}

export const ShareIos = (props: IProps) => {
  return (
    <Svg width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
      <G
        stroke={props.stroke?props.stroke:"#131927"}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      >
        <Path d="M20 13v6a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-6M12 15V3m0 0L8.5 6.5M12 3l3.5 3.5" />
      </G>
    </Svg>
  );
};
