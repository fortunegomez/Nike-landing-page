import { star } from "../assets/icons"
const PopularProductsCard = ({imgURL, name, price}) => {
  return (
    <div className="flex flex-1 flex-col w-full max-sm:w-full">
      <img src={imgURL} alt={name}  className="w-[280px] h-[280px]"/>
      <div className="mt-8 flex justify-start gap-2.5">
        <img src={star} alt="rating" className="w-24px h-24px" />
        <p className="font-montserrat text-xl leading-normal text-slate-gray justify-center items-center">(4.5)</p>
      </div>
      <h3 className="mt-2 text-2xl leading-normal font-semibold font-palanquin">{name}</h3>
      <p className="mt-2 font-montserrat font-semibold text-2xl leading-normal text-coral-red ">{price}</p>
    </div>
  )
}

export default PopularProductsCard
