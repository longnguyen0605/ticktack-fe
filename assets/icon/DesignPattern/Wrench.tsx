import Svg, { Path, G, type SvgProps } from "react-native-svg";

interface IProps extends SvgProps {}

export const Wrench = (props: IProps) => {
  return (
    <Svg width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
      <G
        stroke={props.stroke?props.stroke:"#131927"}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      >
        <Path d="m10.05 10.607-7.07 7.07a2 2 0 0 0 0 2.83v0a2 2 0 0 0 2.828 0l7.071-7.072" />
        <Path d="M10.05 10.607c-.844-2.153-.68-4.978 1.06-6.718s4.95-2.121 6.718-1.06l-3.041 3.04-.283 3.111 3.111-.282 3.04-3.041c1.062 1.768.68 4.978-1.06 6.717-1.74 1.74-4.564 1.905-6.717 1.061" />
      </G>
    </Svg>
  );
};
