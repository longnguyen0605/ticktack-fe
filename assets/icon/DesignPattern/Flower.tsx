import Svg, { Path, G, ClipPath, Defs, type SvgProps } from "react-native-svg";

interface IProps extends SvgProps {}

export const Flower = (props: IProps) => {
  return (
    <Svg width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
      <G clipPath="url(#a)">
        <Path
          stroke="#131927"
          d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6M13 9s1-2 1-4-2-4-2-4-2 2-2 4 1 4 1 4"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="1.5"
          strokeWidth="1.5"
        />
        <Path
          stroke="#131927"
          d="M9 11s-2-1-4-1-4 2-4 2 2 2 4 2 4-1 4-1M13 15s1 2 1 4-2 4-2 4-2-2-2-4 1-4 1-4M15 11s2-1 4-1 4 2 4 2-2 2-4 2-4-1-4-1M10.587 9.172S9.88 7.05 8.465 5.636C7.051 4.222 4.223 4.222 4.223 4.222s0 2.828 1.414 4.243c1.414 1.414 3.536 2.121 3.536 2.121M9.172 13.414s-2.121.707-3.535 2.122c-1.414 1.414-1.414 4.242-1.414 4.242s2.828 0 4.242-1.414 2.121-3.536 2.121-3.536M14.828 13.414s2.121.707 3.535 2.122c1.415 1.414 1.415 4.242 1.415 4.242s-2.829 0-4.243-1.414-2.121-3.536-2.121-3.536M13.413 9.172s.707-2.122 2.122-3.536c1.414-1.414 4.242-1.414 4.242-1.414s0 2.828-1.414 4.243c-1.414 1.414-3.536 2.121-3.536 2.121"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="1.5"
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
