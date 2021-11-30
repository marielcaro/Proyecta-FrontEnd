import CirculoGris from "../../../../assets/imgs/circulogrisjaja.png"

export const ImageRounded = ({ icon = CirculoGris, alt = "default", height = "64", width = "64", ...rest }) => (
    <img src={icon} alt={alt} className="rounded-circle me-3" height={height} width={width} {...rest} />
)

export default ImageRounded