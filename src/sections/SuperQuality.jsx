
import { shoe8 } from "../assets/images"
import Button from "../components/Button"

const SuperQuality = () => {
  return (
    <section id="about-us" className=" flex justify-between items-center max-lg:flex-col gap-10 w-full max-container">
        <div className="flex flex-1 flex-col  gap-5">
            <h2 className="text-4xl font-palanquin font-bold lg:max-w-lg"> We Provide You <span className="text-coral-red">Super <br /> Quality</span> Shoes</h2>
            <p className="mt-4 lg:max-w-lg info-text">Ensuring premuim comfort & quality </p>
            <div>
                <Button label="View Details" />
            </div>
            
        </div>
        <div className="flex flex-1 justify-center items-center">
            <img 
            src={shoe8} 
            alt="shoe" 
            width={570}
            height={522}
            className="object-contain"
            />
        </div>
        
        
    </section>
  )
}

export default SuperQuality
