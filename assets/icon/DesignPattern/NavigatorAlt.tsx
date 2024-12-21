import Svg, { Circle, Path, G, type SvgProps } from "react-native-svg";

interface IProps extends SvgProps {}

export const NavigatorAlt = (props: IProps) => {
  return (
    <Svg width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
      <G stroke="#131927" strokeWidth="1.5">
        <Circle cx="12" cy="12" r="10" />
        <Path
          d="M13.93 17.869c-.322.93-1.637.929-1.958-.001l-1.62-4.694-4.57-1.943c-.905-.385-.814-1.698.136-1.954L16.15 6.516a1.036 1.036 0 0 1 1.249 1.34z"
          clipRule="evenodd"
        />
      </G>
    </Svg>
  );
};
