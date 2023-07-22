import CollectionCollage from "../collection-collage/CollectionCollage";
import FeaturedCollection from "../featured-collection/FeaturedCollection";
import ProductCarousal from "../product-carousal/ProductCarousal";

const LandingPage=()=>{
return(
    <>
    <CollectionCollage/>
    <ProductCarousal title="New Arrivals"/>
    <FeaturedCollection/>
    <ProductCarousal title="We Recommend"/>
    </>
)
}
export default LandingPage;