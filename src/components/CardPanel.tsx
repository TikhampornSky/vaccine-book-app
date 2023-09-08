"use client"
import { useReducer } from "react";
import Card from "./Card";

export default function CardPanel() {
    const reviewReducer = (state: Map<string, number | null>, action: {type: string, hospitalName: string, rating: number | null}) => {
        if (action.rating == null) {
            action.rating = 0;
        }
        switch (action.type) {
            case 'add':
                const newStateAdd = new Map(state);
                newStateAdd.set(action.hospitalName, action.rating);
                return newStateAdd;
            case 'remove':
                const newStateRemove = new Map(state);
                newStateRemove.delete(action.hospitalName);
                return newStateRemove;
            default:
                return state
        }
    }
    let initialM = new Map<string, number | null>();
    initialM.set("Chulalongkorn Hospital", 0);
    initialM.set("Rajavithi Hospital", 0);
    initialM.set("Thammasat University Hospital", 0);
    const [allReviews, dispatchReview] = useReducer(reviewReducer, initialM)

    return (
        <div>
            <div style={{margin:"20px", display: "flex", flexDirection: "row", flexWrap: "wrap", justifyContent:"center", alignContent: "flex-start"}}>
                <Card name="Chulalongkorn Hospital" image='/img/chula.jpg'
                    onReview={(name: string, rating: number | null) => dispatchReview({type:'add', hospitalName: name, rating: rating})}
                    review={allReviews.get("Chulalongkorn Hospital") ?? 0}
                />
                <Card name="Rajavithi Hospital" image='/img/rajavithi.jpg'
                    onReview={(name: string, rating: number | null) => dispatchReview({type:'add', hospitalName: name, rating: rating})}
                    review={allReviews.get("Rajavithi Hospital") ?? 0}
                />
                <Card name="Thammasat University Hospital" image='/img/thammasat.jpg'
                    onReview={(name: string, rating: number | null) => dispatchReview({type:'add', hospitalName: name, rating: rating})}
                    review={allReviews.get("Thammasat University Hospital") ?? 0}
                />
            </div>
            <div className="flex justify-center">
                <div className='w-auto h-auto bg-slate-200 shadow-md rounded-lg p-4 m-5 content-center'>
                    <h1 className='text-center font-bold text-3xl mt-3'> Review </h1>
                    {Array.from(allReviews).map(([name, rating]) => {
                        return (
                            <div className="bg-emerald-200" key={name} 
                                onClick={()=> dispatchReview({type:'remove', hospitalName: name, rating: rating })}>
                                <h1 className='text-center font-bold text-xl mt-3'> {name} : Rating = {rating} </h1>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}