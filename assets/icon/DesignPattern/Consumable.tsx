import Svg, { Path, G, type SvgProps } from "react-native-svg";

interface IProps extends SvgProps {}

export const Consumable = (props: IProps) => {
  return (
    <Svg width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
      <G
        stroke={props.stroke?props.stroke:"#131927"}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      >
        <Path d="M22.003 3v4.497A.503.503 0 0 1 21.5 8v0a.52.52 0 0 1-.465-.3A10 10 0 0 0 12.003 2c-5.185 0-9.449 3.947-9.95 9" />
        <Path d="M17 10v5a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2M12 11V8" />
        <Path d="M2.051 21v-4.497c0-.278.226-.503.503-.503v0c.2 0 .38.119.466.3a10 10 0 0 0 9.031 5.7c5.186 0 9.45-3.947 9.951-9" />
      </G>
    </Svg>
  );
};
