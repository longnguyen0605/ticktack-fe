import Svg, { Path, G, type SvgProps } from "react-native-svg";

interface IProps extends SvgProps {}

export const Cart = (props: IProps) => {
  return (
    <Svg width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
      <G
        stroke={props.stroke?props.stroke:"#131927"}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      >
        <Path
          fill="#131927"
          d="M19.5 22a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3M9.5 22a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3"
        />
        <Path d="M5 4h17l-2 11H7zm0 0c-.167-.667-1-2-3-2M20 15H5.23c-1.784 0-2.73.781-2.73 2s.946 2 2.73 2H19.5" />
      </G>
    </Svg>
  );
};
