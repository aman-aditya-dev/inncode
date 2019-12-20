import React, {Component} from 'react';
import {PricingTable, PricingSlot, PricingDetail} from 'react-pricing-table';
import './priceListTable.scss'
export default class priceListTable extends Component{
    render(){
        return(
            <div id="pricelistTable">
            <h2>We completely understand your business category and create a web design, which is according to your site requirements and lets you stand apart from the crowd.</h2>
            
            <PricingTable  >
            <PricingSlot  onClick={this.submit} buttonText='Reach us' title='Starter' priceText='INR 5,500/-'>
                <PricingDetail> <b>5</b> Pages</PricingDetail>
                <PricingDetail> Mobile <b>Responsive</b> Layout</PricingDetail>
                <PricingDetail strikethrough> <b>Image Slider</b> </PricingDetail>
                <PricingDetail strikethrough> <b>Image Gallery</b> </PricingDetail>
                <PricingDetail> <b>Contact Form</b></PricingDetail>
                <PricingDetail strikethrough> <b>Testimonials </b></PricingDetail>
                <PricingDetail strikethrough> <b>Newsletter Subscription</b></PricingDetail>
                <PricingDetail > <b>Google Map</b></PricingDetail>
                <PricingDetail > <b>SEO Friendly</b></PricingDetail>
                <PricingDetail > <b>Social Media Integration</b></PricingDetail>
            </PricingSlot>
            <PricingSlot  onClick={this.submit} buttonText='Reach Us' title='Best Buy' priceText='INR 10,500/-'>
                <PricingDetail> <b>10</b> Pages</PricingDetail>
                <PricingDetail> Mobile <b>Responsive</b> Layout</PricingDetail>
                <PricingDetail> <b>Image Slider</b> </PricingDetail>
                <PricingDetail> <b>Image Gallery</b> </PricingDetail>
                <PricingDetail> <b>Contact Form</b></PricingDetail>
                <PricingDetail strikethrough> <b>Testimonials </b></PricingDetail>
                <PricingDetail> <b>Newsletter Subscription</b></PricingDetail>
                <PricingDetail > <b>Google Map</b></PricingDetail>
                <PricingDetail > <b>SEO Friendly</b></PricingDetail>
                <PricingDetail > <b>Social Media Integration</b></PricingDetail>
            </PricingSlot>
            <PricingSlot  onClick={this.submit} buttonText='Reach' title='PROFESSIONAL' priceText='INR 13,500/-'>
                <PricingDetail> <b>15</b> Pages</PricingDetail>
                <PricingDetail> Mobile <b>Responsive</b> Layout</PricingDetail>
                <PricingDetail> <b>Image Slider</b> </PricingDetail>
                <PricingDetail> <b>Image Gallery</b> </PricingDetail>
                <PricingDetail> <b>Contact Form</b></PricingDetail>
                <PricingDetail> <b>Testimonials </b></PricingDetail>
                <PricingDetail> <b>Newsletter Subscription</b></PricingDetail>
                <PricingDetail > <b>Google Map</b></PricingDetail>
                <PricingDetail > <b>SEO Friendly</b></PricingDetail>
                <PricingDetail > <b>Social Media Integration</b></PricingDetail>
            </PricingSlot>
            <PricingSlot  onClick={this.submit} buttonText='Reach Us' title='Premium' priceText='25,000/- Onwards'>
                <PricingDetail> <b>Customized</b> Webpages</PricingDetail>
                <PricingDetail> <b>Unlimied </b> Pages</PricingDetail>
                <PricingDetail> <b>Ecommerce</b> Websites</PricingDetail>
                <PricingDetail> <b>Travel Tour and Hospitality</b></PricingDetail>
                <PricingDetail> <b>Content and Media</b></PricingDetail>
                <PricingDetail> <b>Banking and Finance</b></PricingDetail>
                <PricingDetail> <b>Different Platforms</b></PricingDetail>
                <PricingDetail > <b>SEO Friendly</b></PricingDetail>
                <PricingDetail > <b>Social Media Integration</b></PricingDetail>
                <PricingDetail> <b>Dynamic Pages and much more.</b></PricingDetail>

            </PricingSlot>
        </PricingTable>
</div>
        );
    }
}