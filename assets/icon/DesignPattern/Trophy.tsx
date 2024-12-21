import Svg, { Path, G, type SvgProps } from "react-native-svg";

interface IProps extends SvgProps {}

export const Trophy = (props: IProps) => {
  return (
    <Svg width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
      <G
        stroke="#131927"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      >
        <Path d="M6.745 4h10.567s-.88 13.257-5.283 13.257c-2.151 0-3.462-3.164-4.24-6.4C6.975 7.468 6.745 4 6.745 4" />
        <Path d="M17.313 4s.921-.983 1.687-1c1.5-.034 1.777 1 1.777 1 .294.61.529 2.194-.88 3.657s-2.987 2.743-3.629 3.2M6.744 4S5.784 3.006 5 3c-1.5-.012-1.777 1-1.777 1-.294.61-.529 2.194.88 3.657a30 30 0 0 0 3.687 3.2M8.507 20c0-1.829 3.523-2.743 3.523-2.743s3.523.914 3.523 2.743z" />
      </G>
    </Svg>
  );
};
