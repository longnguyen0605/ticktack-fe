import Svg, { Path, G, type SvgProps } from "react-native-svg";

interface IProps extends SvgProps {}

export const PasswordCursor = (props: IProps) => {
  return (
    <Svg width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
      <G stroke="#131927" strokeWidth="1.5">
        <Path
          d="M21 13V8a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h7"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M20.88 16.917c.493.304.463 1.043-.046 1.101l-2.567.291-1.15 2.312c-.229.459-.934.234-1.05-.334l-1.256-6.116c-.098-.48.333-.782.75-.525z"
          clipRule="evenodd"
        />
        <Path
          d="m12 11.01.01-.011M16 11.01l.01-.011M8 11.01l.01-.011"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </G>
    </Svg>
  );
};
