import { IHospitalsResponse } from "@/interface/hospital"


export default async function getHospitals(): Promise<IHospitalsResponse> {
    // add timeout for loading delay testing
    // await new Promise(resolve => setTimeout(resolve, 5000))

    const response = await fetch('http://localhost:5000/api/v1/hospitals', {next: {tags: ['hospitals']}})
    if (!response.ok) {
        throw new Error("Something went wrong while fetching the hospitals data.")
    }

    return await response.json()
}