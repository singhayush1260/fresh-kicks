import CollectionCollage from "../../components/collection-collage/CollectionCollage";
import FeaturedCollection from "../../components/featured-collection/FeaturedCollection";
import ProductCarousal from "../../components/product-carousal/ProductCarousal";

const LandingPage=()=>{
return(
    <>
    <CollectionCollage/>
    <ProductCarousal title="New Arrivals"/>
    <FeaturedCollection/>
    {/* <ProductCarousal title="We Recommend"/> */}
    </>
)
}
export default LandingPage;