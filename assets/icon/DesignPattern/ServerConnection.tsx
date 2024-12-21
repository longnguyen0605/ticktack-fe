import Svg, { Path, G, type SvgProps } from "react-native-svg";

interface IProps extends SvgProps {}

export const ServerConnection = (props: IProps) => {
  return (
    <Svg width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
      <G
        stroke="#131927"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      >
        <Path d="M3 19h9m9 0h-9m0 0v-6m0 0h6V5H6v8zM9 9.01l.01-.011M12 9.01l.01-.011" />
      </G>
    </Svg>
  );
};
