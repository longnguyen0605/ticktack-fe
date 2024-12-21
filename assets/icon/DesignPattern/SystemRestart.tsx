import Svg, { Path, G, type SvgProps } from "react-native-svg";

interface IProps extends SvgProps {}

export const SystemRestart = (props: IProps) => {
  return (
    <Svg width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
      <G
        stroke="#131927"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      >
        <Path d="M12 2v4M12 18v4M22 12h-4M6 12H2M4.93 4.929l2.828 2.828M16.242 16.243l2.829 2.828M19.07 4.929l-2.828 2.828M7.758 16.243 4.929 19.07" />
      </G>
    </Svg>
  );
};
