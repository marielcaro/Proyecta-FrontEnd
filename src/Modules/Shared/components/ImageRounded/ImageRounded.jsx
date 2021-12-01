import CirculoGris from "../../../../assets/imgs/circulogrisjaja.png"

export const ImageRounded = ({ icon = CirculoGris, alt = "default", height = "46", width = "46", ...rest }) => (
    <img src={icon} alt={alt} className="rounded-circle" height={height} width={width} {...rest} />
)

export default ImageRounded