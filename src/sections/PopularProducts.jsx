import { products } from "../constants"
import PopularProductsCard from "../components/PopularProductsCard"

const PopularProducts = () => {
  return (
    <section id="products" className="max-container max-sm:mt-12">
        <div className="flex flex-col justify-start gap-5"> 
            <h2 className="text-4xl font-palanquin font-bold">Our <span className="text-coral-red">Popular</span> Products</h2>
            <p className="font-montserrat text-slate-gray text-lg leading-8  my-1  "> Experience top notch quality by checking out our popular products listed below </p>
        </div>
        <div className="mt-16 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-4 gap-14">
            {products.map((products) => (
                <PopularProductsCard key={products.name} {...products}/>
            ))}
        </div>

    </section>
  )
}

export default PopularProducts
