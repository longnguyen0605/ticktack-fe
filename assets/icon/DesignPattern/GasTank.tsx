import Svg, { Path, G, type SvgProps } from "react-native-svg";

interface IProps extends SvgProps {}

export const GasTank = (props: IProps) => {
  return (
    <Svg width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
      <G
        stroke="#131927"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="1.5"
      >
        <Path
          d="M3 7.562A2.56 2.56 0 0 1 5.563 5H7V3h5v2h2.002A7 7 0 0 1 21 11.998v6.442a2.56 2.56 0 0 1-2.563 2.562H5.563A2.565 2.565 0 0 1 3 18.44z"
          clipRule="evenodd"
          strokeWidth="1.493"
        />
        <Path
          d="m8 8.878 8 8.238-4-4.121-4 4.12 4-4.12 4-4.121"
          strokeWidth="1.502"
        />
      </G>
    </Svg>
  );
};
