import React, { useState }  from 'react';

import Link from 'next/link';

import Head from 'next/head';
import axios from "axios"; 
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ProductEnquiryForm from './../productenquiry';


async function getProducts (slug)
{
  
    const res = await fetch('https://admin.specialistmattresssystems.com/api/product/singleproduct/slug/'+slug)
    const data = await res.json()
  
    return data;
     
}
async function getMeta (item)
{
    let apiUrl,slug;
    apiUrl = 'https://admin.specialistmattresssystems.com/api/product/getmetadata';
  
    slug = '/products/'+item; 
    const data = { slug : slug };
    let seoArray = await fetch(apiUrl, {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      mode: 'cors', // no-cors, *cors, same-origin
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'same-origin', // include, *same-origin, omit
      headers: {
        'Content-Type': 'application/json'
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      redirect: 'follow', // manual, *follow, error
      referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body: JSON.stringify(data) // body data type must match "Content-Type" header
    });
  
 
    return seoArray.json()
  }
export const getStaticProps = async({params}) => {
    const data = await getProducts(params.slug);
    const metadata = await getMeta(params.slug);
    
    if(data.rs==1)
    {
        return {
            props : { 
            loaded:true,
            product:data.result,
            meta : metadata
           
        }};
    }
    else
    {
        return {
            props : {
                loaded:false,
                product:null,
        }};
    }
}
export const getStaticPaths = () =>
{
    return{
        paths:[],
        fallback : true,
        
    }
} 
const Products =  (props)=>
 {

        return (
            <div>
                {
                    props.meta && props.meta.res==1 ?
        <Head>
        
           <meta name="description" content={props.meta.seo_data.s_desc} />   
          
          <meta property="og:url"                content={props.meta.seo_data.seo_url} />
          <meta property="og:title"              content={props.meta.seo_data.seo_title} />
          <meta property="og:description"        content={props.meta.seo_data.s_desc} />
          <meta property="og:image"              content={props.meta.seo_data.seo_image} />

          <title>{props.meta.seo_data.s_title}</title>
          
        
       
      </Head>
      :''}
            <section className="ind-products-banner">
                <div className="container">
                    <div className="row">
                        <div className="col-12 mb-5">
                    <h2>Products</h2>
                    <p>A UNIQUE PRESSURE CARE SYSTEM</p>      
                    </div>

                <div className="col-12 products-sec">
                <div className="row">
                    { props.loaded ? 
                    <div className="card col-12">
                        <div className="card-body">
                            <h6>Products  |  {props.product['title']}</h6>
                            <h4>{props.product['title']}</h4>

                            <figure className="ind-main-img">
                            <img src={props.product['images']} alt="" className="img-fluid" />
                            </figure>

                            <h5>
                                <div
                                    dangerouslySetInnerHTML={{
                                        __html: props.product['sub_title']
                                    }}>

                                </div>
                            </h5>

                            <div
                                dangerouslySetInnerHTML={{
                                    __html: props.product['description']
                                }}>

                            </div>
                            
                        </div>
                        <ProductEnquiryForm />   
            
                    </div>
                    :
                    <>
                    <div className="col-md-3"></div>
                    <div className="col-md-6 ">
                    <div className="alert alert-danger" role="alert">
  <strong>Sorry!</strong> No products found.
</div>
                    </div>

                    <div className="col-md-3"></div>
                    </>

                    }
                </div>
                </div>  

                </div>
                </div>
            </section>
       
        </div>
        );;
}

export default Products;
