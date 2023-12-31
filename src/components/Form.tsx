"use client"
import { Select, MenuItem } from "@mui/material"
import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers"
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs"
import { useDispatch } from "react-redux"
import { AppDispatch } from "@/redux/store"
import { addBooking } from "@/redux/features/bookSlice"
import { BookingItem } from "../../interfaces"
import { useState } from "react"
import dayjs, { Dayjs } from "dayjs"
import Link from "next/link"

export default function Form() {
    const dispatch = useDispatch<AppDispatch>()

    const [firstName, setFirstName] = useState<string>("")
    const [lastName, setLastName] = useState<string>("")
    const [sid, setSid] = useState<string>("")
    const [hospitalName, setHospitalName] = useState<string>("")
    const [date, setDate] = useState<Dayjs | null>(null)

    const makeReservation = () => {
        if (firstName && lastName && sid && hospitalName && dayjs(date).format("DD/MM/YYYY")) {
            const booking: BookingItem = {
                firstName: firstName,
                lastName: lastName,
                sid: sid,
                hospitalName: hospitalName,
                date: dayjs(date).format("DD/MM/YYYY")
            }
            dispatch(addBooking(booking))
        } else {
            alert("Please fill in all information")
        }
    }

    return (
        <form>
                <p className="mt-1 text-sm leading-6 text-gray-600">Please provide your information</p>
                <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                    <div className="sm:col-span-3">
                        <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">First name</label>
                        <div className="mt-2">
                            <input type="text" name="first-name" id="first-name" placeholder="Your firstname" 
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300
                            placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-300 sm:text-sm sm:leading-6 indent-2"
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                            />
                        </div>
                    </div>

                    <div className="sm:col-span-3">
                        <label htmlFor="last-name" className="block text-sm font-medium leading-6 text-gray-900">Last name</label>
                        <div className="mt-2">
                            <input type="text" name="last-name" id="last-name" placeholder="Your surname" 
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 
                            placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-300 sm:text-sm sm:leading-6 indent-2"
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                            />
                        </div>
                    </div>

                    <div className="sm:col-span-4">
                        <label htmlFor="id-card" className="block text-sm font-medium leading-6 text-gray-900"> ID Card Number</label>
                        <div className="mt-2">
                            <input id="id-card" name="id-card" type="text" placeholder="Your ID card" 
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 
                            placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-300 sm:text-sm sm:leading-6 indent-2"
                            value={sid}
                            onChange={(e) => setSid(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className="sm:col-span-4">
                        <label htmlFor="hospital" className="block text-sm font-medium leading-6 text-gray-900"> Please select your hospital</label>
                        <Select
                            variant="outlined"
                            labelId="hospital-select-label"
                            name="hospital-select"
                            id="hospital-select"
                            defaultValue={""}
                            onChange={(e) => setHospitalName(e.target.value)}
                        >
                            <MenuItem value="Chulalongkorn Hospital">Chulalongkorn Hospital</MenuItem>
                            <MenuItem value="Rajavithi Hospital">Rajavithi Hospital</MenuItem>
                            <MenuItem value="Thammasat University Hospital">Thammasat University Hospital</MenuItem>
                        </Select>
                    </div>

                    <div className="sm:col-span-4">
                        <label htmlFor="day" className="block text-sm font-medium leading-6 text-gray-900"> 
                            Please select day that you want to get vaccine 
                        </label>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DatePicker value={date} onChange={(newValue) => setDate(newValue)}/>
                        </LocalizationProvider>
                    </div>
                </div>

                <div className="mt-6 flex items-center justify-end gap-x-6">
                    <Link href="/mybooking">
                        <button type="submit" className="rounded-md bg-green-400 px-3 py-2 text-sm font-semibold text-white shadow-sm 
                        hover:bg-green-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-700"
                        onClick={makeReservation}
                        >
                            Submit Reservation
                        </button>
                    </Link>
                </div>
            </form>
    )
}