import Svg, { Path, G, ClipPath, Defs, type SvgProps } from "react-native-svg";

interface IProps extends SvgProps {}

export const HexagonAlt = (props: IProps) => {
  return (
    <Svg width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
      <G clipPath="url(#a)">
        <Path
          stroke={props.stroke?props.stroke:"#131927"}
          d="M6.328 2.774a.6.6 0 0 1 .52-.3h10.306a.6.6 0 0 1 .52.3l5.154 8.926a.6.6 0 0 1 0 .6l-5.154 8.926a.6.6 0 0 1-.52.3H6.847a.6.6 0 0 1-.52-.3L1.175 12.3a.6.6 0 0 1 0-.6z"
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
