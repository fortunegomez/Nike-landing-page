import { arrowRight } from "../assets/icons"
import { offer } from "../assets/images"
import Button from "../components/button"

const SpecialOffer = () => {
  return (
   <section className= "flex justify-wrap items-center max-xl:flex-col-reverse max-xl:items-start gap-10 max-container">
    <div className="flex-1">
      <img src={offer}
      width={773}
      height={687}
      alt="offers" />
    </div>
    <div className="flex flex-1 flex-col justify-start gap-5">
            <h2 className="text-4xl font-palanquin font-bold lg:max-w-lg"> Special <span className="text-coral-red">Offer</span> </h2>
            <p className="mt-4 lg:max-w-lg info-text">Ensuring premuim comfort & quality </p>
            <div className="flex flex-wrap gap-6">
                <Button label="Shop Now" iconURL={arrowRight}/>
                <Button label="Learn More" 
                backgroundColor = "bg-white"
                borderColor = "border-slate-gray"
                textColor = "text-slate-gray"
                />
            </div>
            
            
            
        </div>

   </section>
  )
}

export default SpecialOffer
