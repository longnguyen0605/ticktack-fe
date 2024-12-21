import Svg, { Path, G, type SvgProps } from "react-native-svg";

interface IProps extends SvgProps {}

export const Asana = (props: IProps) => {
  return (
    <Svg width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
      <G
        stroke="#131927"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      >
        <Path d="M12 11.5a4 4 0 1 0 0-8 4 4 0 0 0 0 8M7 20.5a4 4 0 1 0 0-8 4 4 0 0 0 0 8M17 20.5a4 4 0 1 0 0-8 4 4 0 0 0 0 8" />
      </G>
    </Svg>
  );
};
