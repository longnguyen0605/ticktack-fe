import Svg, { Path, G, ClipPath, Defs, type SvgProps } from "react-native-svg";

interface IProps extends SvgProps {}

export const OrangeSlice = (props: IProps) => {
  return (
    <Svg width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
      <G clipPath="url(#a)">
        <Path
          stroke={props.stroke?props.stroke:"#131927"}
          d="m10.613 10.11 7.778-7.777c4.295 4.296 4.295 11.26 0 15.556-4.296 4.296-11.261 4.296-15.557 0zm0 0-.354 8.133m.354-8.132h7.778m-7.778 0 5.303 5.303"
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
