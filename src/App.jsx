import PlaceDetails from "./components/PlaceDetails/PlaceDetails"
import Header from "./components/Header/Header"
import List from "./components/List/List"
import Map from "./components/Map/Map"
import Main from "./ui/Main"

const App = () => {
  return (
    <>
      <Header />
      <Main>
        <List />
        <Map />
      </Main>
    </>
  )
}

export default App
