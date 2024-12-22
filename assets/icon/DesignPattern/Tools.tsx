import Svg, { Path, G, type SvgProps } from "react-native-svg";

interface IProps extends SvgProps {}

export const Tools = (props: IProps) => {
  return (
    <Svg width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
      <G
        stroke={props.stroke?props.stroke:"#131927"}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      >
        <Path d="m10.05 10.607-7.07 7.07a2 2 0 0 0 0 2.83v0a2 2 0 0 0 2.828 0l7.071-7.072M17.194 13.8l3.878 3.878a2 2 0 0 1 0 2.828v0a2 2 0 0 1-2.829 0l-6.208-6.208M6.733 5.904 4.61 6.61 2.49 3.075l1.414-1.414L7.44 3.782zm0 0 2.83 2.83" />
        <Path d="M10.05 10.607c-.844-2.153-.68-4.978 1.06-6.718s4.95-2.121 6.718-1.06l-3.041 3.04-.283 3.111 3.111-.282 3.04-3.041c1.062 1.768.68 4.978-1.06 6.717-1.74 1.74-4.564 1.905-6.717 1.061" />
      </G>
    </Svg>
  );
};
