import Svg, { Path, G, type SvgProps } from "react-native-svg";

interface IProps extends SvgProps {}

export const QuestionMark = (props: IProps) => {
  return (
    <Svg width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
      <G
        stroke="#131927"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      >
        <Path d="M7.9 8.08c0-4.773 7.5-4.773 7.5 0 0 3.409-3.409 2.727-3.409 6.818M12 19.01l.01-.011" />
      </G>
    </Svg>
  );
};
