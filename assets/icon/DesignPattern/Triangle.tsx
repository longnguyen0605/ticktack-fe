import Svg, { Path, G, ClipPath, Defs, type SvgProps } from "react-native-svg";

interface IProps extends SvgProps {}

export const Triangle = (props: IProps) => {
  return (
    <Svg width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
      <G clipPath="url(#a)">
        <Path
          stroke={props.stroke?props.stroke:"#131927"}
          d="M11.475 2.947a.6.6 0 0 1 1.05 0l9.373 16.912a.6.6 0 0 1-.524.891H2.626a.6.6 0 0 1-.525-.89z"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
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
