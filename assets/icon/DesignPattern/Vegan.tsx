import Svg, { Path, G, type SvgProps } from "react-native-svg";

interface IProps extends SvgProps {}

export const Vegan = (props: IProps) => {
  return (
    <Svg width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
      <G
        stroke={props.stroke?props.stroke:"#131927"}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      >
        <Path d="M15 11.063C12.53 13.65 10.059 20 10.059 20S6.529 11.063 3 9" />
        <Path d="m20.497 5.577.426 4.424c.277 2.87-1.875 5.425-4.745 5.702-2.816.27-5.367-1.788-5.638-4.604a5.12 5.12 0 0 1 4.608-5.59l4.716-.454a.58.58 0 0 1 .633.522" />
      </G>
    </Svg>
  );
};
