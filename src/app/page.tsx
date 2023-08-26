import Banner from '@/components/Banner'
import Card from '@/components/Card'

export default function Home() {
  return (
    <main>
      <Banner />
      <div style={{margin:"20px", display: "flex", flexDirection: "row", flexWrap: "wrap", justifyContent:"space-around", alignContent: "space-around"}}>
        <Card name="Chulalongkorn Hospital" image='/img/chula.jpg' />
        <Card name="Rajavithi Hospital" image='/img/rajavithi.jpg' />
        <Card name="Thammasat University Hospital" image='/img/thammasat.jpg' />
      </div>
    </main>
  )
}
