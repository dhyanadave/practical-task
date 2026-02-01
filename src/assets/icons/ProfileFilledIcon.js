import * as React from "react"
import Svg, { Path } from "react-native-svg"
const ProfileIconFilled = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={22}
    fill="none"
    {...props}
  >
    <Path
      stroke="#8E6CEF"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M11.255 2.71c.48.71.76 1.56.76 2.48-.01 2.4-1.9 4.35-4.28 4.43-.1-.01-.22-.01-.33 0-2.21-.07-4-1.76-4.24-3.92-.29-2.57 1.82-4.95 4.4-4.95m-5 12.56c-2.42 1.62-2.42 4.26 0 5.87 2.75 1.84 7.26 1.84 10.01 0 2.42-1.62 2.42-4.26 0-5.87-2.73-1.83-7.24-1.83-10.01 0Z"
    />
  </Svg>
)
export default ProfileIconFilled
