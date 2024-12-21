import Svg, { Path, G, ClipPath, Defs, type SvgProps } from "react-native-svg";

interface IProps extends SvgProps {}

export const AfricanTree = (props: IProps) => {
  return (
    <Svg width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
      <G
        stroke={props.stroke?props.stroke:"#131927"}
        clipPath="url(#a)"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      >
        <Path d="M12 22V12m0-4v4m0 0 3-3M12.424 18.576l6.169-6.169a5.502 5.502 0 0 0-.513-8.234 9.904 9.904 0 0 0-12.16 0 5.502 5.502 0 0 0-.513 8.234l6.168 6.169a.6.6 0 0 0 .849 0" />
      </G>
      <Defs>
        <ClipPath>
          <Path fill="#fff" d="M0 0h24v24H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
};
