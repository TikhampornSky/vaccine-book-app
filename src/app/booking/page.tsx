import Form from "@/components/Form";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";
import getUserProfile from "@/libs/getUserProfile";

export default async function Booking() {
    const session = await getServerSession(authOptions)
    let profile = null
    if (session) {
        profile = await getUserProfile(session.user.token)
    }
    return (
        <main className="m-20">
            {session?
            <>
                <div className='text-3xl'> User Information </div>
                <div>
                    <div> Name: {profile.data.name} </div>
                    <div> Email: {profile.data.email} </div>
                    <div> Tel.: {profile.data.tel} </div>
                    <div> Member Since: {profile.data.createdAt.toString()} </div>
                </div>
            </>
            : null}
            <br></br>
            <div className='text-3xl'> Booking Information </div>
            <Form />
        </main>
    )
}