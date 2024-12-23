import Svg, { Path, G, type SvgProps } from "react-native-svg";

interface IProps extends SvgProps {}

export const Sandals = (props: IProps) => {
  return (
    <Svg width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
      <G
        stroke={props.stroke?props.stroke:"#131927"}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      >
        <Path d="M22 7s.5-4-4-4c-4.501 0-4 4-4 4m8 0h-8m8 0-.215 3m-7.786-3 .214 3m7.572 0-.587 8.214A3 3 0 0 1 18.206 21h-.413a3 3 0 0 1-2.993-2.786L14.213 10m7.572 0h-7.572M10 7s.5-4-4-4C1.498 3 2 7 2 7m8 0H2m8 0-.215 3M1.999 7l.214 3m7.572 0-.587 8.214A3 3 0 0 1 6.206 21h-.414A3 3 0 0 1 2.8 18.214L2.213 10m7.572 0H2.213" />
      </G>
    </Svg>
  );
};
