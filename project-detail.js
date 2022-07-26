// let details = [];

// function seeDetail(event){
//   event.preventDefault();

//   let detailName = document.getElementById('project-name').value;
//   let detailStartDate = document.getElementById('project-start-date').value;
//   let detailEndDate = document.getElementById('project-end-date').value;
//   let detailDescription = document.getElementById('project-description').value;
//   let nodeJs = document.getElementById('nodejs');
//   let reactJs = document.getElementById('reactjs');
//   let nextJs = document.getElementById('nextjs');
//   let typescript = document.getElementById('typescript');
//   let detailImage = document.getElementById('project-upload-image'); 

//   let showIcon = '';

//   showIcon += (nodeJs.checked == true) ? '<img value="nodejs" id="nodejs" src="./assets/icons/node-color.png" alt="">' : '';
//   showIcon += (reactJs.checked == true) ? '<img value="reactjs" id="reactjs" src="./assets/icons/react-color.png" alt="">' : '';
//   showIcon += (nextJs.checked == true) ? '<img value="nextjs" id="nextjs" src="./assets/icons/next.png" alt="">' : '';
//   showIcon += (typescript.checked == true) ? '<img value="typescript" id="typescript" src="./assets/icons/typescript-color.png" alt="">' : '';
  
//   detailImage = URL.createObjectURL(detailImage.files[0]);
//   detailEndDate = new Date(detailEndDate);
//   detailStartDate = new Date(detailStartDate);

//   let seeDetail = {
//     detailImage,
//     detailName,
//     detailDescription,
//     detailStartDate,
//     detailEndDate,
//     showIcon
//   }

//   details.push(seeDetail);

//   displayDetail();
// }

// function displayDetail() {

//   let detailContainer = document.getElementById('project-detail-page');

//   detailContainer.innerHTML = seeProjectDetail();

//   let lengthDetails = details.length;

//   for(i = 0; i < lengthDetails; i++){
//     detailContainer.innerHTML += `
//     <h1>${details[i].detailName}</h1>
//       <div class="project-detail-container">
//         <div class="project-detail-image">
//           <img src="${details[i].detailImage}" alt="" />
//         </div>
//         <div class="project-detail-info">
//           <div class="detail-info-duration">
//             <h3>Duration</h3>
//             <div class="info-duration-date">
//               <img src="./assets/icons/calendar.png" alt="" />
//               <p id="info-start-date">${details[i].detailStartDate}</p>
//               <p>-</p>
//               <p id="info-end-date">${details[i].detailEndDate}</p>
//             </div>
//             <div class="info-duration">
//               <img src="./assets/icons/clock.png" alt="" />
//               <p id="info-duration-time">${projectDurationTime(projects[i].projectStartDate, projects[i].projectEndDate)}</p>
//             </div>
//           </div>
//           <div class="detail-info-tech">
//             <h3>Technologies</h3>
//             <div class="tech-info-icons">
//               <div class="tech-info-icons-left">
//                 <img
//                   src="./assets/icons/playstore-color.png"
//                   alt=""
//                   id="playstore-icon"
//                 />
//                 <label for="playstore-icon">Google Play</label>
//                 <img
//                   src="./assets/icons/android-color.png"
//                   alt=""
//                   id="android-icon"
//                 />
//                 <label for="android-icon">Android OS</label>
//               </div>
//               <div class="tech-info-icons-right">
//                 <img src="./assets/icons/javacolor.png" alt="" id="java-icon" />
//                 <label for="java-icon">Java</label>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div class="project-detail-description">
//         <p class="detail-description-text">
//           ${details[i].detailDescription}
//         </p>
//       </div>`
//   }
// }

// function projectDurationTime(a, b){
//   let projectStartAt = new Date(a);
//   let projectEndAt = new Date(b);

//   let duration = projectEndAt - projectStartAt;

//   //day duration
  
//   let yearDuration = Math.floor(duration / (1000 * 60 * 60 * 24 * 30 * 12));

//   if(yearDuration > 0){
//     return `Duration: ${yearDuration} years`;
//   } else {
//     let monthDuration = Math.floor(duration / (1000 * 60 * 60 * 24 * 30));

//     if (monthDuration > 0) {
//       return `Duration: ${monthDuration} months`;
//     } else {
//       let weeksDuration = Math.floor(duration / (1000 * 60 * 60 * 24 * 7));

//       if(weeksDuration > 0) {
//         return `Duration: ${weeksDuration} weeks`;
//       } else {
//         let dayDuration = Math.floor(duration / (1000 * 60 * 60 * 24));

//         if(dayDuration > 0) {
//           return `Duration: ${dayDuration} days`;
//         }
//       }
//     }
//   }
// }

// function seeProjectDetail() {
//   return `<h1>Dumbways Mobile App</h1>
//       <div class="project-detail-container">
//         <div class="project-detail-image">
//           <img src="./assets/images/holding_phone.jpg" alt="" />
//         </div>
//         <div class="project-detail-info">
//           <div class="detail-info-duration">
//             <h3>Duration</h3>
//             <div class="info-duration-date">
//               <img src="./assets/icons/calendar.png" alt="" />
//               <p id="info-start-date">18 July 2022</p>
//               <p>-</p>
//               <p id="info-end-date">25 July 2022</p>
//             </div>
//             <div class="info-duration">
//               <img src="./assets/icons/clock.png" alt="" />
//               <p id="info-duration-time">3 month</p>
//             </div>
//           </div>
//           <div class="detail-info-tech">
//             <h3>Technologies</h3>
//             <div class="tech-info-icons">
//               <div class="tech-info-icons-left">
//                 <img
//                   src="./assets/icons/playstore-color.png"
//                   alt=""
//                   id="playstore-icon"
//                 />
//                 <label for="playstore-icon">Google Play</label>
//                 <img
//                   src="./assets/icons/android-color.png"
//                   alt=""
//                   id="android-icon"
//                 />
//                 <label for="android-icon">Android OS</label>
//               </div>
//               <div class="tech-info-icons-right">
//                 <img src="./assets/icons/javacolor.png" alt="" id="java-icon" />
//                 <label for="java-icon">Java</label>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div class="project-detail-description">
//         <p class="detail-description-text">
//           Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia,
//           eius. Maxime incidunt excepturi numquam voluptates omnis ea suscipit
//           odit quia nisi reiciendis explicabo inventore deserunt, dolor
//           voluptatem ex nemo dolore laborum, alias tenetur, quam in. Non, vitae
//           optio! Dolore assumenda quae dignissimos quos libero quod voluptas
//           impedit earum modi nesciunt! Et, doloremque repellendus ipsum tempore
//           dignissimos optio error corporis est, quos ad dolore odio eum
//           voluptates nemo, sequi ipsam totam rerum eos. Eligendi deserunt
//           corporis nobis tenetur voluptatibus, optio laborum excepturi eius
//           incidunt sed labore nihil recusandae atque vel eveniet nisi maiores
//           culpa unde! Quae vel vero perspiciatis fugit, incidunt repellendus
//           omnis reiciendis recusandae accusantium rerum esse ad in aspernatur
//           error fugiat culpa voluptates laudantium et beatae nihil quisquam,
//           doloribus unde. Placeat nisi officia assumenda doloribus fugit
//           suscipit culpa soluta id in reprehenderit impedit quibusdam,
//           consequuntur non corporis exercitationem corrupti hic harum quo
//           distinctio repudiandae! Sunt suscipit nisi tenetur perspiciatis culpa
//           maxime commodi, temporibus atque quibusdam qui quam laudantium
//           consequuntur possimus vero libero deleniti saepe dolorum esse autem
//           aperiam repudiandae delectus animi distinctio facere! Minus, maiores.
//           Nisi mollitia voluptatem dolores, inventore a architecto neque
//           voluptatum ex! Voluptate odio natus temporibus accusamus esse tenetur
//           eum dolores atque? Unde suscipit, saepe molestias ut, numquam eligendi
//           atque sunt perferendis, autem doloremque quisquam? Numquam ipsum
//           dolorem impedit labore expedita vitae, sunt non repellat autem tenetur
//           consequuntur quibusdam alias perspiciatis nemo recusandae beatae nulla
//           ex voluptate, molestias similique quidem quisquam velit. Cumque iure
//           necessitatibus fugiat consequuntur beatae tempore iusto, corporis
//           perspiciatis est expedita quo! Officia consectetur incidunt dolorum.
//           Eligendi totam fuga mollitia voluptatibus perferendis voluptatem
//           officia enim, vitae culpa ab quis laboriosam repellat voluptates
//           perspiciatis a quia dolorem quas adipisci numquam, unde eum iusto
//           minus? Doloremque at ipsam accusamus veniam, nesciunt, id repellat
//           dignissimos, accusantium explicabo fugiat doloribus aut beatae
//           excepturi corrupti voluptatibus.
//         </p>
//       </div>`
// }