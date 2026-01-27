require('dotenv').config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');
mongoose.connect(process.env.CONNECTIONSTRING, { 
  useNewUrlParser: true, 
  useUnifiedTopology: true,
  useFindAndModify: false
})
  .then(() => {
    console.log('Conectado ao MongoDB');
    app.emit('pronto');
  })
  .catch(e => {
    console.log('Erro ao conectar ao MongoDB:', e.message);
    console.log('Verifique sua CONNECTIONSTRING no .env');
  });

const session = require('express-session');
const MongoStore = require('connect-mongo');
const flash = require('connect-flash');
const routes = require('./routes');
const path = require('path');
const helmet = require('helmet');
const csrf = require('csurf');
const { middlewareGlobal, checkCsrfError, csrfMiddleware } = require('./src/middlewares/middleware');

app.use(helmet());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.resolve(__dirname, 'public')));

// CORREÇÃO AQUI - Usando a conexão do mongoose
const sessionOptions = session({
  secret: process.env.SESSION_SECRET || 'akasdfj0út23453456+54qt23qv  qwf qwer qwer qewr asdasdasda a6()',
  store: MongoStore.create({ 
    client: mongoose.connection.getClient(),  // ← Correção
    collectionName: 'sessions',
    ttl: 14 * 24 * 60 * 60 // 14 dias
  }),
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 1000 * 60 * 60 * 24 * 7, // 7 dias
    httpOnly: true
  }
});

app.use(sessionOptions);
app.use(flash());

app.set('views', path.resolve(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');

app.use(csrf());
app.use(middlewareGlobal);
app.use(checkCsrfError);
app.use(csrfMiddleware);
app.use(routes);

app.on('pronto', () => {
  app.listen(3000, () => {
    console.log('✅ Servidor rodando em http://localhost:3000');
  });
});