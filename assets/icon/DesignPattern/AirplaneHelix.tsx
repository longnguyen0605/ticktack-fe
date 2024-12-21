import Svg, { Path, G, ClipPath, Defs, type SvgProps } from "react-native-svg";

interface IProps extends SvgProps {}

export const AirplaneHelix = (props: IProps) => {
  return (
    <Svg width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
      <G
        stroke="#131927"
        clipPath="url(#a)"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="1.5"
        strokeWidth="1.5"
      >
        <Path d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
        <Path
          d="M12 9s-1.988-1.975-2-4c.001-1.993-.05-4.001 2-4 1.948.001 1.997 1.976 2 4 .003 1.985-2 4-2 4M15 12s1.975-1.988 4-2c1.993.001 4.001-.05 4 2-.001 1.948-1.976 1.997-4 2-1.985.003-4-2-4-2M9 12s-1.975 1.988-4 2c-1.993-.001-4.001.05-4-2 .001-1.948 1.976-1.997 4-2 1.985-.003 4 2 4 2M12 15s1.988 1.975 2 4c-.001 1.993.05 4.001-2 4-1.948-.001-1.997-1.976-2-4-.003-1.985 2-4 2-4"
          clipRule="evenodd"
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
