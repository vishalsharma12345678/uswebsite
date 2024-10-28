const BrandLogo = ({ imageSrc }) => {
    const defaultImageSrc = "/img/logo/logo.jpg";
    const logoSrc = imageSrc || defaultImageSrc;

    return (
        <img src={logoSrc} alt="" style={{borderRadius:'50%'}} />
    );
};

export default BrandLogo;
