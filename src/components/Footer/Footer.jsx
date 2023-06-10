import React from 'react'
import { Link } from 'react-router-dom'
import { FooterDiv } from './FooterCss'
import {FormCard} from "../../UI/FormCard"

export const Footer = () => {
  return (
    <FooterDiv>
        <div className='display-content'>
          <div className='content-1'>
            <h3>About Us</h3>
            <a href="#">Contact Us</a>
            <a href="#">Career</a>
            <a href="#">Press</a>
          </div>
          <div className='content-2'>
            <h3>Connect Us</h3>
            <a href="#">Instagram</a>
            <a href="#">Facebook</a>
            <a href="#">Twitter</a>
          </div>
          <FormCard className='content-3'>
            <form>
              <h2 className='form-title'>Subscribe with us</h2>
              <div className="form-field-div">
                <label className="form-label" htmlFor="email">Email Address</label>
                <div className="form-input-div">
                  <input id="email" type="email" name="email" placeholder="abcd@neog.com"/>
                </div>
              </div>
            </form>
              <button className='form-button'>Subscribe</button>
          </FormCard>
        </div>
          <div className='display-content'>
            <a href="#">Conditions Of Use and Sale</a>
            <a href="#">Privacy Notice</a>
          </div>
            <p><strong>©️ {new Date().getFullYear()} SmartMart.com </strong> By Sangeetha Jula</p>
    </FooterDiv>
  )
}
