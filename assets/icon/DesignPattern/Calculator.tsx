import Svg, { Path, G, ClipPath, Defs, type SvgProps } from "react-native-svg";

interface IProps extends SvgProps {}

export const Calculator = (props: IProps) => {
  return (
    <Svg width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
      <G stroke={props.stroke?props.stroke:"#131927"} clipPath="url(#a)" strokeWidth="1.5">
        <Path d="M1 21V3a2 2 0 0 1 2-2h18a2 2 0 0 1 2 2v18a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2Z" />
        <Path
          d="M15 7h4M15 15.5h4M15 18.5h4M5 7h2m2 0H7m0 0V5m0 2v2M5.586 18.414 7 17m1.415-1.414L7 17m0 0-1.414-1.414M7 17l1.415 1.414"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </G>
      <Defs>
        <ClipPath>
          <Path fill="#fff" d="M0 0h24v24H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
};
