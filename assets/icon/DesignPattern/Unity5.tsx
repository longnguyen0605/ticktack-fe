import Svg, { Path, G, type SvgProps } from "react-native-svg";

interface IProps extends SvgProps {}

export const Unity5 = (props: IProps) => {
  return (
    <Svg width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
      <G
        stroke={props.stroke?props.stroke:"#131927"}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      >
        <Path d="M11.672 20.786a.6.6 0 0 0 .656 0l9.284-6.062a.6.6 0 0 0 .24-.694L18.285 3.41A.6.6 0 0 0 17.716 3H6.221a.6.6 0 0 0-.57.412l-3.506 10.62a.6.6 0 0 0 .241.69z" />
        <Path d="M14.5 6H10l-.5 5a3 3 0 1 1 0 3" />
      </G>
    </Svg>
  );
};
