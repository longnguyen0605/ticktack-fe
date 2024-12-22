import Svg, { Path, G, type SvgProps } from "react-native-svg";

interface IProps extends SvgProps {}

export const Pin = (props: IProps) => {
  return (
    <Svg width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
      <G
        stroke={props.stroke?props.stroke:"#131927"}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      >
        <Path d="M9.5 14.5 3 21M5 9.485l9.191 9.193 1.697-1.697-.392-3.787 5.51-4.673-5.85-5.85-4.674 5.51-3.786-.393z" />
      </G>
    </Svg>
  );
};
