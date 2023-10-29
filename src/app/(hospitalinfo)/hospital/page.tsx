import HospitalCatalog from '@/components/HospitalCatalog'
import getHospitals from '@/libs/getHospitals'
import { LinearProgress } from '@mui/material'
import { Suspense } from 'react'
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import AddHospitalForm from "@/components/AddHospitalForm";
import { getServerSession } from 'next-auth';
import getUserProfile from '@/libs/getUserProfile';

export default async function Hospital() {
    const hospitals = getHospitals()
    const session = await getServerSession(authOptions)
    let profile = null
    if (session) {
        profile = await getUserProfile(session.user.token)
    }
    return (
        <main className='mt-28'>
            <Suspense fallback={<p>Loading... <LinearProgress/> </p>}>
                <HospitalCatalog hospitalJson={hospitals} />
                {
                    profile?.data?.role === 'admin'? <AddHospitalForm /> : null
                }
            </Suspense>
        </main>
    )
}