import React from 'react'
import AnimatedPage from '../../animated'
import Homebanner from '../../components/Home/Homebanner/Homebanner'
import Homebanner2 from '../../components/Home/Homebanner2/Homebanner2'
import Homeblog from '../../components/Home/Homeblog/Homeblog'
import HomeCategory from '../../components/Home/HomeCategory/HomeCategory'
import Homecomuni from '../../components/Home/HomeComuni/Homecomuni'
import HomeCourse from '../../components/Home/HomeCourse/HomeCourse'
import HomeHeader from '../../components/Home/HomeHeader/HomeHeader'
import Hometeacher from '../../components/Home/Hometeacher/Hometeacher'
import Homeupcoming from '../../components/Home/HomeUpcoming/Homeupcoming'

export default function Home() {
  return (
    <AnimatedPage>
        <HomeHeader />
        <HomeCategory />
        <Homecomuni />
        <HomeCourse />
        <Homebanner />
        <Homeupcoming />
        <Hometeacher />
        <Homebanner2 />
        <Homeblog />
    </AnimatedPage>
  )
}
