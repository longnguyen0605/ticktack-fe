import Svg, { Path, G, type SvgProps } from "react-native-svg";

interface IProps extends SvgProps {}

export const Hdr = (props: IProps) => {
  return (
    <Svg width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
      <G
        stroke={props.stroke?props.stroke:"#131927"}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      >
        <Path d="M1.5 8.5V12m0 3.5V12m0 0H6m0 0V8.5M6 12v3.5M17.5 15.5v-2.8m2.857 0c.714 0 2.143 0 2.143-2.1s-1.429-2.1-2.143-2.1H17.5v4.2m2.857 0H17.5m2.857 0 2.143 2.8M9.5 12V8.5c2.5 0 5 0 5 3.5s-2.5 3.5-5 3.5z" />
      </G>
    </Svg>
  );
};
