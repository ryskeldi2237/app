import React from "react"
import ContentLoader from "react-content-loader"

const Loading = (props) => (
  <ContentLoader 
    speed={2}
    width={750}
    height={690}
    viewBox="0 0 750 690"
    backgroundColor="#1e202b"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="0" y="0" rx="20" ry="20" width="750" height="40" />
    <rect x="0" y="60" rx="20" ry="20" width="750" height="392" />
    <rect x="0" y="472" rx="20" ry="20" width="750" height="50" />
    <rect x="0" y="542" rx="30" ry="25" width="106" height="46" />

  </ContentLoader>
)

export default Loading