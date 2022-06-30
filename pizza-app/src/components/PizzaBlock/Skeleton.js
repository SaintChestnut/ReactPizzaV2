import React from "react"
import ContentLoader from "react-content-loader"

const PizzaSkeleton = (props) => (
    <ContentLoader
        className="pizza-block"
        speed={2}
        width={280}
        height={466}
        viewBox="0 0 280 466"
        backgroundColor="#e6e6e6"
        foregroundColor="#dcd6d6"
        {...props}
    >
        <circle cx="130" cy="130" r="130" />
        <rect x="0" y="285" rx="0" ry="0" width="270" height="27" />
        <rect x="1" y="317" rx="0" ry="0" width="270" height="80" />
        <rect x="8" y="414" rx="0" ry="0" width="50" height="33" />
        <rect x="116" y="406" rx="0" ry="0" width="153" height="45" />
    </ContentLoader>
)

export default PizzaSkeleton