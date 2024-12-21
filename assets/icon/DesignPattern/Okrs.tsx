import Svg, { Path, G, type SvgProps } from "react-native-svg";

interface IProps extends SvgProps {}

export const Okrs = (props: IProps) => {
  return (
    <Svg width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
      <G
        stroke={props.stroke?props.stroke:"#131927"}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      >
        <Path d="M18 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4M18 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4M3 5h10M3 12h10M3 19h10M16 21.243l2.121-2.122m0 0L20.243 17m-2.122 2.121L16 17m2.121 2.121 2.122 2.122" />
      </G>
    </Svg>
  );
};
