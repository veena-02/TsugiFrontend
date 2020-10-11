import React from 'react'
import CarouselCard from './CarouselCard.jsx'
const Home = () => {
    return (
        <>
        

        <div className='bg__img' >
        <div className='container-fluid col-10 mx-auto'>

        <div className='row'>
        <div className='col-lg-6 col-md-12 '>
        <CarouselCard 
        source1="https://s3images.zee5.com/wp-content/uploads/sites/48/2020/03/Ishq-Aaj-Kal-ZEE5-Original-Show-Poster.jpg"
        source2="https://www.tellyupdates.com/wp-content/uploads/2019/03/Manmohini.jpg" 
        source3="https://qph.fs.quoracdn.net/main-qimg-c3b90147b146f89d81dabbf7109932a3.webp"
        />
        </div>
        <div className='col-lg-6 col-md-12 '>
        <CarouselCard 
        source1="https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_2_5x/sources/r1/cms/prod/4253/734253-h"
        source2="https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_2_5x/sources/r1/cms/prod/4333/734333-h"
        source3="https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_2_5x/sources/r1/cms/prod/4302/734302-h"
        />
        </div>
        </div>  
            < br/>
        <div className='row'>
        <div className='col-lg-6 col-md-12 '>
        <CarouselCard 
        source1="https://im.indiatimes.in/content/2020/Aug/Untitled-design---2020-08-11T131353160_5f324c5cbbfaa.jpg"
        source2="https://www.tellyupdate.co.in/wp-content/uploads/2018/10/Radhakrishn.jpg"
        source3="https://lifeandmore.in/wp-content/uploads/2018/08/August-6-Nimki.jpg"
        />
        </div>
        <div className='col-lg-6 col-md-12 '>
        <CarouselCard 
        source1="https://www.auditionsdate.com/wp-content/uploads/2020/07/Star-Plus-Jannat-Serial-Cast.jpg"
        source2="https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/7456/267456-h"
        source3="https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_2_5x/sources/r1/cms/prod/3746/763746-h"
        />
        </div>
        </div>

            <br />
            <div className='row'>
        <div className='col-lg-6 col-md-12 '>
        <CarouselCard 
        source1="https://www.tellyupdates.com/wp-content/uploads/2017/07/IPKKND.jpg"
        source2="https://secure-media0.hotstar.com/r1/thumbs/PCTV/31/14831/PCTV-14831-hcdl.jpg"
        source3="https://www.seelatest.com/images/disney-plus-hotstar-announces-a-new-web-series-pariwar-releasing-on-23-september.jpg"
        />
        </div>
        <div className='col-lg-6 col-md-12 '>
        <CarouselCard 
        source3="https://www.mediabrief.com/wp-content/uploads/2020/05/image-DisneyHotstar-Home-Dancer-Contest-and-Show-Mediabrief.jpg"
        source2="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_2_5x/sources/r1/cms/prod/7723/757723-v"
        source1="https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_2_5x/sources/r1/cms/prod/7722/757722-h"
        />
        </div>
        </div>  
            < br/>
        <div className='row'>
        <div className='col-lg-6 col-md-12 '>
        <CarouselCard 
        source1="https://static.thehoneycombers.com/wp-content/uploads/sites/6/2018/11/best-anime-Japanese-cartoons-2010s-My-Hero-Academia.jpg"
        source2="https://1.bp.blogspot.com/-IFJEEc3DM88/XhiPbKVBiMI/AAAAAAAAAxE/NMgp2jIW_pMLtHucdBKEw-Es4xYoJ1Z-gCLcBGAsYHQ/s1600/Doremon%2Bin%2BHindi.jpg"
        source3="https://i.ytimg.com/vi/jQ3Z8O1JpKE/maxresdefault.jpg"
        />
        </div>
        <div className='col-lg-6 col-md-12 '>
        <CarouselCard />
        </div>
        </div>

        </div>
        </div>
        </>
    );
}
export default Home;