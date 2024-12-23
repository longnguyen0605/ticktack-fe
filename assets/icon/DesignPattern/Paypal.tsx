import Svg, { Path, G, type SvgProps } from "react-native-svg";

interface IProps extends SvgProps {}

export const Paypal = (props: IProps) => {
  return (
    <Svg width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
      <G
        stroke={props.stroke?props.stroke:"#131927"}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      >
        <Path d="M3 17.5 6 3h7c6 0 6 9 0 9H8.7l-1.2 5.5z" />
        <Path d="m6.8 21 3-14.5h7c6 0 6 9 0 9h-4.3L11.3 21z" />
      </G>
    </Svg>
  );
};
