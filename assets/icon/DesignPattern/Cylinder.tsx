import Svg, { Path, G, type SvgProps } from "react-native-svg";

interface IProps extends SvgProps {}

export const Cylinder = (props: IProps) => {
  return (
    <Svg width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
      <G stroke="#131927" strokeWidth="1.5">
        <Path d="M12 2c8 0 8 3 8 3s0 3-8 3-8-3-8-3 0-3 8-3ZM12 16c8 0 8 3 8 3s0 3-8 3-8-3-8-3 0-3 8-3Z" />
        <Path
          d="M20 5v14M4 5v14"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </G>
    </Svg>
  );
};
