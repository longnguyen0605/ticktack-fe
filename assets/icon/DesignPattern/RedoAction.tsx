import Svg, { Path, G, type SvgProps } from "react-native-svg";

interface IProps extends SvgProps {}

export const RedoAction = (props: IProps) => {
  return (
    <Svg width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
      <G
        stroke={props.stroke?props.stroke:"#131927"}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      >
        <Path d="M19 5v6M15.5 8H9q0 0 0 0s-5 0-5 4.706C4 18 9 18 9 18h8.715" />
        <Path d="M12.5 11.5 16 8l-3.5-3.5" />
      </G>
    </Svg>
  );
};
