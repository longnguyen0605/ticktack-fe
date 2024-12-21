import Svg, { Path, type SvgProps } from "react-native-svg";

interface IProps extends SvgProps {}

export const AppleSwift = (props: IProps) => {
  return (
    <Svg width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
      <Path
        stroke="#131927"
        d="M20.457 14.59c.446-1.437 1.451-6.75-5.93-11.49a.636.636 0 0 0-.808.1.593.593 0 0 0-.022.79c.03.036 2.75 3.35 1.783 7.135-1.673-1.151-8.324-6.423-8.324-6.423L11 11 3.862 6.4s5.046 6.195 8.134 8.526c-1.495.536-4.743 1.104-9.033-1.562a.64.64 0 0 0-.771.074.59.59 0 0 0-.106.743C2.229 14.42 5.668 20 12.939 20c1.995 0 3.16-.568 4.098-1.024.576-.279 1.031-.501 1.528-.501 1.236 0 2.047 1.227 2.054 1.238a.63.63 0 0 0 .583.285.62.62 0 0 0 .526-.37c.893-2.074-.645-4.269-1.271-5.039"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
    </Svg>
  );
};
