import React from 'react'
import AnimatedPage from '../../animated'
import ShopBasketMain from '../../components/shopbasket/shopbasketmain/ShopBasketMain'
import ShopBasketTop from '../../components/shopbasket/shopbaskettop/ShopBasketTop'

export default function Shopbasket() {
  return (
    <AnimatedPage>
        <ShopBasketTop />
        <ShopBasketMain />
        
    </AnimatedPage>
  )
}
