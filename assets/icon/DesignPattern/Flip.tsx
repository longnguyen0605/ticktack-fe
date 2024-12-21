import Svg, { Path, G, type SvgProps } from "react-native-svg";

interface IProps extends SvgProps {}

export const Flip = (props: IProps) => {
  return (
    <Svg width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
      <G
        stroke="#131927"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      >
        <Path d="M9.5 20H2L9.5 4zM20.125 20H22l-.937-2M16.375 20H14.5v-2M14.5 12v2M18.25 12l.938 2M16.375 8 14.5 4v4" />
      </G>
    </Svg>
  );
};
