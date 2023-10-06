import getHospital from "@/libs/getHospital"

export default async function HospitalDetail({params}: {params : {hid: string}}) {
    const resp = await getHospital(params.hid)
    const hospitalDetail = resp.data

    return (
        <div className="mt-28">
            <div className="flex items-center justify-center w-screen mb-10">
                <h1 className="text-xl font-medium"> Hospital ID: {params.hid} </h1>
            </div>
            <div className="flex items-center justify-center w-screen">
                <div className="flex flex-row">
                    <img src={hospitalDetail.picture} alt="Hospital Image" className="w-96 h-96" />
                    <div className="flex flex-col items-start justify-center">
                        <div className="text-xl mx-5"> Name: {hospitalDetail.name} </div>
                        <br></br>
                        <div className="text-lg mx-5"> Address: {hospitalDetail.address} </div>
                        <div className="text-lg mx-5"> District: {hospitalDetail.district} </div>
                        <div className="text-lg mx-5"> Province: {hospitalDetail.province} </div>
                        <div className="text-lg mx-5"> Postal Code: {hospitalDetail.postalcode} </div>
                        <div className="text-lg mx-5"> Tel: {hospitalDetail.tel} </div>
                    </div>
                </div>
            </div>
        </div>
    )
}