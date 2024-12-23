import Svg, { Path, G, type SvgProps } from "react-native-svg";

interface IProps extends SvgProps {}

export const Bonfire = (props: IProps) => {
  return (
    <Svg width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
      <G stroke={props.stroke?props.stroke:"#131927"} strokeLinecap="round" strokeWidth="1.5">
        <Path
          d="M9 14c0 1.61 1.377 2 3.076 2 2.89 0 3.845-1.667 1.922-5-2.691 3-3.076-1.667-2.691-3C10.153 10 9 11.879 9 14"
          strokeLinejoin="round"
        />
        <Path
          d="M12 16c3.156 0 5-2.098 5-5.687S12 3 12 3s-5 3.723-5 7.313S8.844 16 12 16"
          strokeLinejoin="round"
        />
        <Path d="m4.273 21.07 15.455-4.14M4.273 16.93 12 19M19.727 21.07l-3.864-1.035" />
      </G>
    </Svg>
  );
};
