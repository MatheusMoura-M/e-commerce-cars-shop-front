import { createContext, useState } from "react"
import { iCar } from "../interface/car.interface"
import instance from "../services/api"

interface iChildren {
    children: React.ReactNode
}

interface iHomeContext {
    carAd: iCar[]
    setCarAd: React.Dispatch<React.SetStateAction<iCar[]>>
    GetCardsAd(): void
}

export const contextHomeProvider = createContext({} as iHomeContext)

const HomePageContext = ({children}: iChildren) => {

    const [carAd, setCarAd] = useState<iCar[]>([])

    const GetCardsAd = async () => {

        try {

            const response = await instance.get("/car")
            setCarAd(response.data)
            
        } catch (error) {
            console.log(error)
        }

    }

    return (
        <contextHomeProvider.Provider value={{
            carAd, 
            setCarAd,
            GetCardsAd
        }}>
            {children}
        </contextHomeProvider.Provider>
    )

}

export default HomePageContext