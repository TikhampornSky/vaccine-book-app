export default function HospitalDetail({params}: {params : {hid: string}}) {
    const mockHospitalMap = new Map();
    mockHospitalMap.set("001", {name: "Chulalongkorn Hospital", image: "/img/chula.jpg"});
    mockHospitalMap.set("002", {name: "Rajavithi Hospital", image: "/img/rajavithi.jpg"});
    mockHospitalMap.set("003", {name: "Thammasat University Hospital", image: "/img/thammasat.jpg"});

    return (
        <div className="mt-28">
            <div className="flex items-center justify-center w-screen mb-10">
                <h1 className="text-xl font-medium"> Hospital ID: {params.hid} </h1>
            </div>
            <div className="flex items-center justify-center w-screen">
                <div className="flex flex-row">
                    <img src={(mockHospitalMap.get(params.hid)).image} alt="Hospital Image" className="w-96 h-96" />
                    <div className="flex items-center justify-center">
                        <div className="text-xl mx-5"> {(mockHospitalMap.get(params.hid)).name} </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export async function generateStaticParams() {
    return [{hid: "001"}, {hid: "002"}, {hid: "003"}]
}