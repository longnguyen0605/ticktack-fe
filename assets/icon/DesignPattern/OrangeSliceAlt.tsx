import Svg, { Path, G, ClipPath, Defs, type SvgProps } from "react-native-svg";

interface IProps extends SvgProps {}

export const OrangeSliceAlt = (props: IProps) => {
  return (
    <Svg width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
      <G clipPath="url(#a)">
        <Path
          stroke="#131927"
          d="M13.39 10.11 5.61 2.334c-4.295 4.296-4.295 11.26 0 15.556 4.296 4.296 11.26 4.296 15.557 0zm0 0 .353 8.133m-.354-8.132H5.612m7.779 0-5.304 5.303"
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
