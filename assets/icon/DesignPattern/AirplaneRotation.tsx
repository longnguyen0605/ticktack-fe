import Svg, { Path, G, type SvgProps } from "react-native-svg";

interface IProps extends SvgProps {}

export const AirplaneRotation = (props: IProps) => {
  return (
    <Svg width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
      <G
        stroke="#131927"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="1.5"
      >
        <Path
          d="M9.879 14.122a3 3 0 1 0 4.242-4.243 3 3 0 0 0-4.242 4.243"
          strokeWidth="1.5"
        />
        <Path
          d="M4.37 16.773A8.96 8.96 0 0 1 3 12C3 7.765 5.934 4.21 9.878 3.254A9 9 0 0 1 12 3.002M19.715 7.367A8.95 8.95 0 0 1 20.999 12c0 3.806-2.368 7.063-5.709 8.378-1.02.4-2.13.621-3.29.621"
          strokeWidth="1.497"
        />
        <Path
          d="M14.12 9.88s-.009-2.803 1.415-4.243c1.41-1.409 2.794-2.865 4.243-1.415 1.376 1.378.014 2.81-1.415 4.243-1.401 1.406-4.242 1.414-4.242 1.414M9.88 14.12s.009 2.803-1.415 4.243c-1.41 1.409-2.794 2.865-4.242 1.415-1.377-1.378-.015-2.81 1.414-4.243 1.401-1.406 4.242-1.414 4.242-1.414"
          clipRule="evenodd"
          strokeWidth="1.5"
        />
      </G>
    </Svg>
  );
};
