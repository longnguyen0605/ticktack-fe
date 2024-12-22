import Svg, { Path, G, type SvgProps } from "react-native-svg";

interface IProps extends SvgProps {}

export const ShieldQuestion = (props: IProps) => {
  return (
    <Svg width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
      <G
        stroke={props.stroke?props.stroke:"#131927"}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      >
        <Path d="M9 9c0-3.5 5.5-3.5 5.5 0 0 2.5-2.5 2-2.5 5M12 18.01l.01-.011" />
        <Path d="M5 18 3.13 4.913a.996.996 0 0 1 .774-1.114l7.662-1.703a2 2 0 0 1 .868 0L20.096 3.8c.51.113.848.596.774 1.114L19 18c-.07.495-.5 3.5-7 3.5S5.07 18.495 5 18" />
      </G>
    </Svg>
  );
};
