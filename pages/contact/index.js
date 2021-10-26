import Head from 'next/head'
import styles from '../../styles/Home.module.css'


const Contacts = () => {
  return ( 
    <>
      <Head>
        <title>My Project | Contact</title>
        <meta name="keywords" content="projects"/>
      </Head>
 <div class="section" id="contact">
  <div class="container">
    <div class="card" data-aos="fade-up" data-aos-offset="10">
      <div class="row">
        <div class="col-lg-6 col-md-12">
          <div class="card-body">
            <div class="h4 mt-0 title">CONTACT</div>
            <p>BASIC INFORMATION. </p>
            <p>...</p>
          </div>
        </div>
        <div class="col-lg-6 col-md-12">
          <div class="card-body">
            <div class="h4 mt-0 title"></div>
            <div class="row">
              <div class="col-sm-4"><strong class="text-uppercase">Age:</strong></div>
              <div class="col-sm-8">25</div>
            </div>
            <div class="row mt-3">
              <div class="col-sm-4"><strong class="text-uppercase">Email:</strong></div>
              <div class="col-sm-8">azariahbanda@icloud.com</div>
            </div>
            <div class="row mt-3">
              <div class="col-sm-4"><strong class="text-uppercase">Phone:</strong></div>
              <div class="col-sm-8">+2776-638-1837</div>
            </div>
            <div class="row mt-3">
              <div class="col-sm-4"><strong class="text-uppercase">Address:</strong></div>
              <div class="col-sm-8">3437, Nelspruit, Mpumalanga, R.S.A</div>
            </div>
            <div class="row mt-3">
              <div class="col-sm-4"><strong class="text-uppercase">Language:</strong></div>
              <div class="col-sm-8">English, Siswati</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</>
);

}
 
export default Contacts;