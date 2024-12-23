import Svg, { Path, G, type SvgProps } from "react-native-svg";

interface IProps extends SvgProps {}

export const Flask = (props: IProps) => {
  return (
    <Svg width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
      <G stroke={props.stroke?props.stroke:"#131927"} strokeLinejoin="round" strokeWidth="1.5">
        <Path d="M18.5 15h-13" />
        <Path
          d="M16 4H8M9 4.5v5.76a2 2 0 0 1-.481 1.302L3.48 17.438A2 2 0 0 0 3 18.74V19a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-.26a2 2 0 0 0-.482-1.302l-5.036-5.876A2 2 0 0 1 15 10.26V4.5M12 9.01l.01-.011M11 2.01l.01-.011"
          strokeLinecap="round"
        />
      </G>
    </Svg>
  );
};
