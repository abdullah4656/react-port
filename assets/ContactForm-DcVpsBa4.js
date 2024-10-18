import{r as o,j as e}from"./index-Bh9hTeae.js";import{N as h,b as f,F as p}from"./Footer-Dfn3_GCQ.js";const y=()=>{const[r,a]=o.useState(!1),[d,n]=o.useState(!1),[c,s]=o.useState(!1),u=async i=>{i.preventDefault(),a(!0),s(!1),n(!1);const l=new FormData(i.target);l.append("access_key","3068d166-a6ee-4b65-9d57-6e112b886095");const m=Object.fromEntries(l),x=JSON.stringify(m);try{const t=await fetch("https://api.web3forms.com/submit",{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:x}).then(b=>b.json());t.success?(console.log("Success",t),n(!0)):s(!0)}catch(t){console.error("Form submission error:",t),s(!0)}finally{a(!1)}};return e.jsxs(e.Fragment,{children:[e.jsx(h,{}),e.jsxs("div",{children:[e.jsxs("div",{className:"team flex justify-between items-center gap-5 p-5 mq-contact-form",children:[e.jsxs("div",{children:[e.jsx("h1",{className:"text-blue-600 font-semibold text-5xl p-5",children:"Contact with CodeEssence IT Experts."}),e.jsx("p",{className:"text-xl p-5 font-sans text-gray-600 font-medium",children:"Discuss your ideas, projects, and collaborations with us. Let's explore how CodeEssence can assist you in achieving your goals."}),e.jsxs("div",{className:"flex gap-10 items-start",children:[e.jsx("a",{class:"text-blue-600 button mq-buttons w-1/3 h-12 flex items-center justify-center text-lg font-sans font-bold rounded-md button bg-white button-white",href:"",children:e.jsx("span",{children:"Contact Us"})}),e.jsxs("a",{className:"bg-blue-600 mq-buttons hover:bg-blue-800 w-1/3 flex items-center justify-center h-12 text-lg font-sans font-bold  rounded-md text-white button-blue ",href:"tel:+923035313249",children:["Call Now",e.jsx("span",{})]})]})]}),e.jsx("img",{className:"w-1/2 mq-team-img",src:"images/home-font-2.png",alt:""})]}),e.jsxs("div",{className:"team",children:[e.jsx("h2",{className:"flex  justify-center text-5xl font-extrabold m-10",style:{color:"#404040"},children:"Contact Us"}),e.jsxs("div",{className:"p-8 rounded-lg max-w-4xl mx-auto my-12",children:[e.jsx("h1",{className:"text-center text-gray-600 uppercase font-bold text-sm",children:"Let's Talk"}),e.jsxs("form",{onSubmit:u,className:"space-y-6 mt-8",children:[e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[e.jsx("input",{type:"text",name:"name",placeholder:"Your Name",required:!0,className:"border border-gray-300 rounded-md p-4 focus:outline-none focus:border-blue-500 shadow"}),e.jsx("input",{type:"email",name:"email",placeholder:"Your Email",required:!0,className:"border border-gray-300 rounded-md p-4 focus:outline-none focus:border-blue-500 shadow"})]}),e.jsx("textarea",{name:"message",placeholder:"Your Message",required:!0,className:"border border-gray-300 rounded-md p-4 focus:outline-none focus:border-blue-500 shadow w-full h-44"}),e.jsxs("div",{className:"flex justify-center",children:[e.jsx("div",{className:"g-recaptcha","data-sitekey":"your-site-key"})," "]}),e.jsx("div",{className:"flex justify-center",children:e.jsx("button",{type:"submit",className:"bg-blue-600 text-white px-6 py-3 rounded-md shadow hover:bg-blue-700 transition duration-300",disabled:r,children:r?e.jsxs("div",{className:"flex items-center",children:[e.jsx("div",{className:"loader mr-2"})," Sending..."]}):"Send Message"})})]}),c&&e.jsx("div",{className:"text-center text-red-600 font-semibold text-lg mt-8",children:"Something went wrong. Your message was not sent. Please try again."}),d&&e.jsx("div",{className:"text-center text-green-600 font-semibold text-lg mt-8",children:"Thank you for reaching out! Your message has been successfully sent."})]})]})]}),e.jsx("style",{jsx:!0,children:`

       .button {
    position: relative;
    display: inline-block;
    padding: 10px 20px;
    cursor: pointer;
    overflow: hidden;  
    text-align: center;
    /* Text color matching 'text-blue-600' */
    background-color: white;  /* Initial background color */
    border-radius: 8px;  /* Matches 'rounded-md' */
    transition: color 0.3s ease;  /* Text color transition */
}

.button::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 0;
    height: 100%;
      background-color: #1e40af;/* Background fill color (same as 'text-blue-600') */
    transition: width 0.4s ease;
    z-index: 0;  /* Ensures background is behind the text */
}

.button:hover::before {
    width: 100%;  /* Expands to cover the entire button */
}

.button:hover {
    color: white;  /* Changes text color to white */
}

.button span {
    position: relative;
    z-index: 1;  /* Keeps text above the expanding background */
}


          .team{
         background-image: url(${f});
  }
        
        .loader {
          border: 4px solid rgba(255, 255, 255, 0.3);
          border-top: 4px solid #fff;
          border-radius: 50%;
          width: 20px;
          height: 20px;
          animation: spin 1s linear infinite;
        }

        @keyframes spin {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
      `}),e.jsx(p,{})]})};export{y as default};
