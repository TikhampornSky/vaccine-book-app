import Hospital from "@/db/models/Hospital"
import { dbConnect } from "@/db/dbConnect"
import { revalidateTag } from "next/cache"
import { redirect } from "next/navigation"

export default function AddHospitalForm() {
    const addHospital = async (addHospitalForm: FormData) => {
        "use server"
        const name = addHospitalForm.get('name')
        const address = addHospitalForm.get('address')
        const district = addHospitalForm.get('district')
        const province = addHospitalForm.get('province')
        const postalCode = addHospitalForm.get('postalCode')
        const tel = addHospitalForm.get('tel')
        const picture = addHospitalForm.get('picture')

        try {
            await dbConnect()
            const hospital = await Hospital.create({
                "name": name,
                "address": address,
                "district": district,
                "province": province,
                "postalcode": postalCode,
                "tel": tel,
                "picture": picture
            })
        } catch (error) {
            console.log(error)
        }

        revalidateTag('hospitals')
        redirect("/hospital")
    }
    return (
        <div className="flex flex-col justify-center items-center">
            <h1 className="font-bold mb-2"> Hospital Form </h1>
            <form className="w-full max-w-lg" action={addHospital}>
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full px-3">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                            Name of Hospital
                        </label>
                        <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 
                        leading-tight focus:outline-none focus:bg-white focus:border-gray-500" required id="name" name="name" type="text" placeholder="Name" />
                    </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                            Address (Road)
                        </label>
                        <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight 
                        focus:outline-none focus:bg-white focus:border-gray-500" required id="address" name="address" type="text" placeholder="Address" />
                    </div>
                    <div className="w-full md:w-1/2 px-3">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                            District
                        </label>
                        <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight 
                        focus:outline-none focus:bg-white focus:border-gray-500" required id="district" name="district" type="text" placeholder="District" />
                    </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                            Province
                        </label>
                        <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight 
                        focus:outline-none focus:bg-white focus:border-gray-500" required id="province" name="province" type="text" placeholder="Province" />
                    </div>
                    <div className="w-full md:w-1/2 px-3">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                            Postal Code
                        </label>
                        <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight 
                        focus:outline-none focus:bg-white focus:border-gray-500" required id="postalCode" name="postalCode" type="text" placeholder="Postal Code" />
                    </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full px-3">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                            Telephone No.
                        </label>
                        <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight 
                        focus:outline-none focus:bg-white focus:border-gray-500" required id="tel" name="tel" type="text" placeholder="08x-xxx-xxxx" />
                    </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full px-3">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                            Picture URL
                        </label>
                        <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight 
                        $focus:outline-none focus:bg-white focus:border-gray-500" required id="picture"  name="picture" type="text" placeholder="https://drive.google.com/...." />
                    </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-6 justify-center items-center">
                    <div className="w-auto px-3">
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"> Submit </button>
                    </div>
                </div>
            </form>
        </div>
    )
}