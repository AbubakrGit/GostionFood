import React, { Component } from 'react'

export default class Navbar extends Component {
  render() {
    return (
      <>
        <nav>

           <img src='../images__icon/burger.svg' alt='Logo'></img>

          <div className='nav__main__left'>


                <h4>Доставка готовых блюд в Екатеринбурге</h4>

                <a href='tel:+79536019614'>+7 (953) 601-96-14</a>

          </div>

          <div className='nav__main__center'>
            
            <a href="#"><img src='../images__icon/gostion.svg'></img></a>

          </div>

          <div className='nav__main__right'>

          <a href="#"><img src='../../images__icon/personal.svg'></img><span>Личный кабинет</span></a>

          <a href="#" className='korzina'><img src='../../images__icon/korzina.svg'></img><span class="uk-badge">1</span><span>Корзина</span></a>

          </div>


        </nav>
      </>
    )
  }
}
