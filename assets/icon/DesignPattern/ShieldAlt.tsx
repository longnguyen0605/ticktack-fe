import Svg, { Path, type SvgProps } from "react-native-svg";

interface IProps extends SvgProps {}

export const ShieldAlt = (props: IProps) => {
  return (
    <Svg width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
      <Path
        stroke={props.stroke?props.stroke:"#131927"}
        d="m3.571 8-.44-3.084A1 1 0 0 1 3.904 3.8l7.662-1.703a2 2 0 0 1 .868 0L20.096 3.8a1 1 0 0 1 .773 1.117L20.43 8M3.57 8H20.43M3.57 8c.309 2.16.69 4.822 1 7M20.43 8c-.309 2.16-.69 4.822-1 7m0 0L19 18c-.07.495-.5 3.5-7 3.5S5.07 18.495 5 18l-.429-3m14.858 0H4.57"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
    </Svg>
  );
};
