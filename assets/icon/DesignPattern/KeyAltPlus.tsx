import Svg, { Path, G, type SvgProps } from "react-native-svg";

interface IProps extends SvgProps {}

export const KeyAltPlus = (props: IProps) => {
  return (
    <Svg width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
      <G
        stroke={props.stroke?props.stroke:"#131927"}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      >
        <Path d="M14.992 18h3m3 0h-3m0 0v-3m0 3v3M12.411 10.343a4 4 0 1 0 5.657-5.657 4 4 0 0 0-5.657 5.657m0 0-8.485 8.485 2.121 2.122M6.756 16l2.121 2.121" />
      </G>
    </Svg>
  );
};
