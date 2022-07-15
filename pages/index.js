import { HeadComponent } from "../components/utils/head"
import HomeModule from "../modules/home";

export default function Home() {
  return (
    <>
      <HeadComponent title={'Home'} />
      <HomeModule />
    </>
  )
}
