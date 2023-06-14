import React, { Component } from 'react'

export default class Footer extends Component {
  render() {
    return (
        <>
          <footer>
            <div className='footer'>
              <div className='footer__left'>
                  <img src='../images/footer1.svg'></img>
              </div>
              {/* <img src='../images/footer.svg'></img> */}
              <div className='footer__right'>
                  <h4>Просто позвоните по номеру:</h4>
                  <a href="tel:+79536019614">+7(953) 601-96-14</a>
                  <p>или мы вам перезвоним</p>
                  <button><a href='#!'>Оставить заявку</a></button>
              </div>

              <div className='footer__right1'>
                <img className='' src='../images/footer.svg'></img>

              </div>

            </div>



            <div class="footer__bottom">
              <div className='bottom'>
                <img src='../images__icon/bonaqua.svg'></img>
                <p>ООО «Гостион» <span><a href='tel:+79536019614'>+7 (953) 601-96-14</a></span></p>
                <h5>Способы оплаты:<span><img src='../images/Icon.svg'></img></span></h5><span><h5>Картой или наличными<span><img src='../images__icon/sbp.svg'></img></span></h5></span>
                <a href='https://m.vk.com/'><img src='../images/Icon1.svg'></img><span><a href='https://www.instagram.com/'><img src='../images/Icon2.svg'></img></a></span></a>
              </div>
            </div>
          </footer>
        </>
    )
  }
}
