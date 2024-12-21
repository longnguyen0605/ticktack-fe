import Svg, { Path, G, type SvgProps } from "react-native-svg";

interface IProps extends SvgProps {}

export const PizzaSlice = (props: IProps) => {
  return (
    <Svg width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
      <G stroke={props.stroke?props.stroke:"#131927"} strokeWidth="1.5">
        <Path
          d="m14 9.01.01-.011M8 8.01l.01-.011M8 14.01l.01-.011"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path d="M6 19 2.236 3.004a.6.6 0 0 1 .754-.713L19 7" />
        <Path
          d="M22.198 8.425a1.75 1.75 0 0 0-3.396-.85c-.391 1.568-1.9 4.05-4.227 6.375-2.3 2.301-5.148 4.194-7.968 4.845a1.75 1.75 0 1 0 .787 3.41c3.68-.849 7.082-3.206 9.656-5.78 2.549-2.549 4.54-5.568 5.148-8Z"
          strokeLinecap="round"
        />
      </G>
    </Svg>
  );
};
