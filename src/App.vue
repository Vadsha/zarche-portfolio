<script>
import CertificateOne from './components/CertificateOne.vue'
import CertificateThree from './components/CertificateThree.vue'
import CertificateTwo from './components/CertificateTwo.vue'
export default {
    components : {
      CertificateOne,
      CertificateTwo,
      CertificateThree
    },
    data() {
      return {
        profile : false,
        showOne : false,
        showTwo : false,
        showThree : false,
        Profile : './photo.jpg',
        Images : [
          {
            path : "./Second.jpg"
          },
          {
            path : "./First.jpg",
          },
          {
            path : "./Third.jpg"
          },
        ]
      }
    },
    methods: {
      showProfile(data) {
        this.profile = data
      },
      showImage(index) {
        console.log(index);
        if (index == 0) {
          this.showOne = true;
          this.showTwo = false;
          this.showThree = false;
        } else if(index == 1){
          this.showTwo = true;
          this.showOne = false;
          this.showThree = false;
        }
         else if(index == 2){
          this.showThree = true;
          this.showTwo = false;
          this.showOne = false;
        }
        else if(index == 'hide') {
          this.showTwo = false;
          this.showOne = false;
          this.showThree = false;
        }else {
          alert('error');
        }
      }
    },  
  }
</script>

<template>
  <div>
    <div class="lg:bg-[url('./../bg.jpg')] max-sm:bg-[url('./../phone-cover.jpg')] w-full left-0 top-0 fixed h-full bg-cover">
    </div>
    <div class="z-10 absolute top-0 overflow-hidden">
      <nav class="text-white p-3 flex justify-between bg-black w-full">
        <h1 class="text-2xl font-semibold">ZAR CHE</h1>
        <h2 class="my-auto font-bold">My portfolio</h2>
      </nav>
      <div class="text-black max-sm:text-center lg:ml-16 max-sm:0 my-60 text-4xl">
        <p data-aos="fade-right" data-aos-duration="1000" class="text-lg">Welcome to</p>
        <p data-aos="fade-right" data-aos-duration="1500" class="underline mb-8 underline-offset-4 decoration-yellow-400">MY PROFILE</p>
        <p  data-aos="fade-right" data-aos-duration="1500" data-aos-delay="500">"Behind every good Business is a great Accountant!"</p>
      </div>
      <div class="bg-black py-10 text-white"  >
        <div data-aos="zoom-in" data-aos-duration="1000" class="flex justify-center">
          <img style="width: 180px; height : 180px" @click="showProfile" :src="Profile"  class="rounded-full bg-center p-1 border">
        </div>
        <div v-if="profile" class="fixed z-40 top-0 pt-10 max-sm:pt-48 w-full h-full bg-black bg-opacity-70">
          <div class="w-[90%] mx-auto">
            <span @click="showProfile(index)" class="flex cursor-pointer text-2xl justify-end">X</span>
            <img :src="Profile" class="w-[35%] max-sm:w-[90%] mx-auto" alt="">
          </div>
        </div>
        <div data-aos="zoom-in" data-aos-duration="1000" class="text-center text-gray-200">
          <h1 class="text-3xl mt-4">ZAR CHE</h1>
          <h2 class="font-semibold">I am an Accountant</h2>
          <div class="w-[40%] max-sm:w-[70%] mx-auto">
                    <h3>My Experience</h3>
                    <p class="indent-8">  Experienced professional with diverse expertise in sales promotion, customer service, production and administration within the educational industry.
                      Skilled in managing projects, utilizing technology and delivering exceptional customer service. Proven success in promoting educational products and services and efficiently managing adminstrative tasks. Strong communcator with excellent interpersonal skills.
                    </p>
                  </div>
        </div>
        <div class="flex max-sm:block border-b-2 border-yellow-600 py-16 justify-evenly">
          <div data-aos="fade-right" data-aos-duration="1200" class="w-[30%] flex max-sm:w-[90%] max-sm:mx-auto ml-20">
            <ul>
                <h1 class="text-2xl mb-2">Skills</h1>
             <div>
              <li>Basic computer literacy skills</li>
                <div class="w-2/3 bg-gray-50 h-2.5 rounded-full">
                  <p class="w-[90%] bg-blue-500 rounded-full h-full"></p>
                </div>
             </div>
              <div class="my-4">
                <li>Organizational skills</li>
                <div class="w-2/3 bg-gray-50 h-2.5 rounded-full">
                  <p class="w-[80%] bg-blue-500 rounded-full h-full"></p>
                </div>
              </div>
              <div>
                <li>Strategic planning and scheduling skills</li>
                <div class="w-2/3 bg-gray-50 h-2.5 rounded-full">
                  <p class="w-[60%] bg-blue-500 rounded-full h-full"></p>
                </div>
              </div>
              <div class="my-4">
                <li>Time-management skills</li>
                <div class="w-2/3 bg-gray-50 h-2.5 rounded-full">
                  <p class="w-[40%] bg-blue-500 rounded-full h-full"></p>
                </div>
              </div>
              <div>
                <li>Verbal and written communication skills</li>
                <div class="w-2/3 bg-gray-50 h-2.5 rounded-full">
                  <p class="w-[100%] bg-blue-500 rounded-full h-full"></p>
                </div>
              </div>
              </ul> 
             </div>
          <div data-aos="fade-left" data-aos-duration="1200" class="w-[40%] max-sm:w-[80%] max-sm:mx-auto max-sm:mt-8">
            <div>
                <h1 class="text-2xl mb-2">Education</h1>
                <p>Bachelor of History</p>
                <p>Maubin University (Second Year)</p>
              </div>
              <div class="my-4">
                <h1 class="text-2xl mb-2">Experience</h1>
                <div>
                  <p class="text-lg underline underline-offset-2">Sales Promoter</p>
                  <p class="font-light">Oppo Myanmar | 2016-2018</p>
                </div>
                <div>
                  <p class="text-lg underline underline-offset-2">Clerk</p>
                  <p class="font-light">Sinoproud Myanmar GarmentCo.,Ltd|2019-2021</p>
                </div>
                <div>
                  <p class="text-lg underline underline-offset-2">Production Officer</p>
                  <p class="font-light">Myanmar York Fashion Co.,Ltd|2021-2022</p>
                </div>
                <div>
                  <p class="text-lg underline underline-offset-2">Office Staff and Admin</p>
                  <p class="font-light">First Education Center |2022-2023 May</p>
                </div>
              </div>
              <div>
                <h1 class="text-2xl mb-2">Reference</h1>
                <p>Nay Lin Htet</p>
                <p>CEO| First Education Center</p>
                <p>naylinh011@gmail.com</p>
                <p>+959 423 742 964</p>
              </div>
          </div>
        </div>
      </div>
      <div class="bg-black max-sm:h-full">
  <div class="container overflow-x-auto no-scrollbar snap-x max-sm:flex-none max-sm:block flex bg-black mx-auto">
      <div v-for="card,index in Images" :key="index" class="shadow-sm h-[500px] max-sm:h-fit snap-center my-5 max-sm:m hover:bg-black w-fit shrink-0 shadow-gray-700">
        <img @click="showImage(index)" :src="card.path" class="w-full max-sm:p-10 max-sm:border-none duration-1000 bg-black hover:opacity-25 hover:duration-1000 h-full">
      </div>
  </div>
</div>
      <!-- certificates show -->
      <CertificateOne @show="showImage" v-if="showTwo" class=" w-full" />
      <CertificateTwo @show="showImage" v-if="showOne" class="w-full" />
      <CertificateThree @show="showImage" v-if="showThree" class="fixed bg-opacity-50 top-0 pt-3 w-full" />
      <div class="bg-[url(./../footer.jpg)] max-sm:bg-center bg-cover bg-no-repeat justify-center py-16 flex">
          <div data-aos="zoom-out" data-aos-duration="1200" class="text-center text-black mr-48 max-sm:mr-0 bg-cover bg-center w-[20%] text-lg max-sm:w-[80%]">
            <div>
              <p>Zar Che</p>
              <p>chec4749@gmail.com</p>
              <p>Phone : 09 959 928 913 , 09 795 533 276</p>
              <p>Address : No.558/B, Anawyahtar Street, Hlaing Thar Yar Township</p>
            </div>
            <div class="text-2xl flex justify-evenly py-4">
              <a href="https://twitter.com/zarche2022?t=rrnm6-O4uIXg5hc1ZHSKbg&s=09">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7" fill="currentColor" style="color: #1C96E8" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" /></svg>
              </a>
              <a href="https://instagram.com/zarche2?igshid=ZGUzMzM3NWJiOQ==">  
                <svg xmlns="http://www.w3.org/2000/svg"  class="h-7 w-7" fill="currentColor" style="color: #D61D85" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" /></svg>
              </a>
              <a href="https://www.facebook.com/zar.che.54540?mibextid=ZbWKwL">
                <svg xmlns="http://www.w3.org/2000/svg"  class="h-7 w-7" fill="currentColor" style="color: #0A63BC" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" /></svg>
              </a>
              <a href="#">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7" fill="currentColor" style="color: #0077b5" viewBox="0 0 24 24"><path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" /></svg>
              </a>
          </div>
          </div>
      </div>
    </div>
  </div>
</template>
<style>
       .no-scrollbar::-webkit-scrollbar {
        display: none;
      }
       svg path:hover {
        color: #303030;
      }
</style>