import Svg, { Path, G, type SvgProps } from "react-native-svg";

interface IProps extends SvgProps {}

export const RotateCameraRight = (props: IProps) => {
  return (
    <Svg width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
      <G
        stroke="#131927"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      >
        <Path d="M22.003 3v4.497A.503.503 0 0 1 21.5 8v0a.52.52 0 0 1-.465-.3A10 10 0 0 0 12.003 2c-5.185 0-9.449 3.947-9.95 9" />
        <Path d="M6 16.4V9.394a.6.6 0 0 1 .6-.6h1.173a.6.6 0 0 0 .504-.275l1.446-2.244A.6.6 0 0 1 10.227 6h3.546a.6.6 0 0 1 .504.275l1.446 2.244a.6.6 0 0 0 .504.275H17.4a.6.6 0 0 1 .6.6V16.4a.6.6 0 0 1-.6.6H6.6a.6.6 0 0 1-.6-.6" />
        <Path d="M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4M2.051 21v-4.497c0-.278.226-.503.503-.503v0c.2 0 .38.119.466.3a10 10 0 0 0 9.031 5.7c5.186 0 9.45-3.947 9.951-9" />
      </G>
    </Svg>
  );
};
