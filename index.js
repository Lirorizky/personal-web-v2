const express = require('express');
const path = require('path');

const app = express();

app.set('view engine', 'hbs');
app.set("views", path.join(__dirname, "./views"));

app.use('/public', express.static(path.join(__dirname, "./public")));
app.use(express.urlencoded({ extended: false}));
// console.log(__dirname);

app.get('/', (req, res) => {
  res.send('Hello World');
})

const isLogin = true;

app.get('/home', (req, res) => {
  setHeader(res)
  res.render('index', {
    isLogin: isLogin
  })
})

app.get('/project', (req, res) => {
  setHeader(res);
  res.render('project', {
    isLogin: isLogin
  });
})

app.get('/project/:id', (req, res) => {
  const projectId = req.params.id
  setHeader(res);
  res.render('project-detail', {
    project: {
      id: projectId,
      title: 'Dumbways Mobile App',
      start_date: '18 July 2022',
      end_date: '25 July 2022',
      duration: '3 month',
      company: '',
      content: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia,
          eius. Maxime incidunt excepturi numquam voluptates omnis ea suscipit
          odit quia nisi reiciendis explicabo inventore deserunt, dolor
          voluptatem ex nemo dolore laborum, alias tenetur, quam in. Non, vitae
          optio! Dolore assumenda quae dignissimos quos libero quod voluptas
          impedit earum modi nesciunt! Et, doloremque repellendus ipsum tempore
          dignissimos optio error corporis est, quos ad dolore odio eum
          voluptates nemo, sequi ipsam totam rerum eos. Eligendi deserunt
          corporis nobis tenetur voluptatibus, optio laborum excepturi eius
          incidunt sed labore nihil recusandae atque vel eveniet nisi maiores
          culpa unde! Quae vel vero perspiciatis fugit, incidunt repellendus
          omnis reiciendis recusandae accusantium rerum esse ad in aspernatur
          error fugiat culpa voluptates laudantium et beatae nihil quisquam,
          doloribus unde. Placeat nisi officia assumenda doloribus fugit
          suscipit culpa soluta id in reprehenderit impedit quibusdam,
          consequuntur non corporis exercitationem corrupti hic harum quo
          distinctio repudiandae! Sunt suscipit nisi tenetur perspiciatis culpa
          maxime commodi, temporibus atque quibusdam qui quam laudantium
          consequuntur possimus vero libero deleniti saepe dolorum esse autem
          aperiam repudiandae delectus animi distinctio facere! Minus, maiores.
          Nisi mollitia voluptatem dolores, inventore a architecto neque
          voluptatum ex! Voluptate odio natus temporibus accusamus esse tenetur
          eum dolores atque? Unde suscipit, saepe molestias ut, numquam eligendi
          atque sunt perferendis, autem doloremque quisquam? Numquam ipsum
          dolorem impedit labore expedita vitae, sunt non repellat autem tenetur
          consequuntur quibusdam alias perspiciatis nemo recusandae beatae nulla
          ex voluptate, molestias similique quidem quisquam velit. Cumque iure
          necessitatibus fugiat consequuntur beatae tempore iusto, corporis
          perspiciatis est expedita quo! Officia consectetur incidunt dolorum.
          Eligendi totam fuga mollitia voluptatibus perferendis voluptatem
          officia enim, vitae culpa ab quis laboriosam repellat voluptates
          perspiciatis a quia dolorem quas adipisci numquam, unde eum iusto
          minus? Doloremque at ipsam accusamus veniam, nesciunt, id repellat
          dignissimos, accusantium explicabo fugiat doloribus aut beatae
          excepturi corrupti voluptatibus.`
    }
  });
})

app.get('/contact', (req, res) => {
  setHeader(res);
  res.render('contact-form', {
    isLogin: isLogin
  });
})

app.post('/project', (req, res) => {
  res.send(`<script>alert('title: ${req.body.title}, content : ${req.body.content}')</script>`);
})

const port = 5000;
app.listen(port, function() {
  console.debug(`server running on port ${port}`);
})

function setHeader(res){
  res.setHeader("content-type", "text/html");
  res.setHeader('Cache-Control', "s-max-age=1, stale-while-revalidate");
}