import Svg, { Path, G, type SvgProps } from "react-native-svg";

interface IProps extends SvgProps {}

export const ShoppingBagArrowDown = (props: IProps) => {
  return (
    <Svg width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
      <G
        stroke={props.stroke?props.stroke:"#131927"}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      >
        <Path d="M16.5 21h2.169a2 2 0 0 0 1.976-2.304l-1.384-9A2 2 0 0 0 17.284 8H6.716a2 2 0 0 0-1.977 1.696l-1.385 9A2 2 0 0 0 5.331 21H7.5M12 12v7m0 0 3-3m-3 3-3-3M14 5a2 2 0 1 0-4 0" />
      </G>
    </Svg>
  );
};
