import Svg, { Path, G, type SvgProps } from "react-native-svg";

interface IProps extends SvgProps {}

export const ProfileCircle = (props: IProps) => {
  return (
    <Svg width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
      <G
        stroke={props.stroke?props.stroke:"#131927"}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      >
        <Path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2" />
        <Path d="M4.271 18.346s2.23-2.846 7.73-2.846 7.729 2.846 7.729 2.846M12 12a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
      </G>
    </Svg>
  );
};
