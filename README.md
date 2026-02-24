# LCH INFORMÁTICA - Site de Segurança Eletrônica

Site profissional para LCH INFORMÁTICA, especializada em soluções de segurança eletrônica para residências e empresas.

## 🌐 **Acesso Online**

### **GitHub Pages**
- **URL**: `https://seu-usuario.github.io/framer-app`
- **Status**: Configurado para deploy automático

### **Acesso Local**
- **Desenvolvimento**: `http://localhost:3030`
- **Rede Local**: `http://10.205.5.21:3030`

## 🚀 **Deploy no GitHub Pages**

### **Passo 1: Criar Repositório**
1. Vá para [GitHub](https://github.com)
2. Crie novo repositório: `framer-app`
3. Torne público (necessário para GitHub Pages)

### **Passo 2: Configurar Git**
```bash
git init
git add .
git commit -m "First commit - LCH INFORMÁTICA Website"
git branch -M main
git remote add origin https://github.com/SEU-USUARIO/framer-app.git
git push -u origin main
```

### **Passo 3: Ativar GitHub Pages**
1. Vá para Settings > Pages
2. Source: "Deploy from a branch"
3. Branch: `main` / `/ (root)`
4. Salve e aguarde 2-3 minutos

### **Passo 4: Acessar Site**
- URL: `https://SEU-USUARIO.github.io/framer-app`

## 📱 **Funcionalidades**

### **Design**
- ✅ Tema escuro profissional
- ✅ Cores laranja branding
- ✅ Totalmente responsivo
- ✅ Animações suaves

### **Seções**
- ✅ Hero com CTA
- ✅ Produtos com preços
- ✅ Soluções personalizadas
- ✅ Sobre a empresa
- ✅ Contato completo

### **Interações**
- ✅ WhatsApp flutuante
- ✅ Formulário funcional
- ✅ Validação de campos
- ✅ Notificações elegantes

## 🔧 **Tecnologias**

- **HTML5**: Semântico e moderno
- **CSS3**: Grid, Flexbox, Animações
- **JavaScript ES6+**: Vanilla JS
- **Font Awesome**: Ícones
- **Google Fonts**: Tipografia

## 📞 **Contato**

- **WhatsApp**: (45) 9 9960-9853
- **Email**: contato@lchinformatica.com.br
- **Local**: Itaipulândia - PR

## 🛠️ **Desenvolvimento**

### **Iniciar Local**
```bash
# Instalar http-server
npm install -g http-server

# Iniciar servidor
http-server -p 3030 -a 0.0.0.0
```

### **Estrutura de Arquivos**
```
framer-app/
├── index.html          # Página principal
├── styles.css          # Estilos CSS
├── script.js           # JavaScript
├── components.js       # Biblioteca de componentes
├── README.md           # Documentação
├── DEPLOY.md           # Guia de deploy
└── .gitignore          # Arquivos ignorados
```

## 🎨 **Personalização**

### **Cores**
- **Primária**: `#ff6b35` (Laranja)
- **Secundária**: `#0a0a0a` (Escuro)
- **WhatsApp**: `#25d366` (Verde)

### **Fontes**
- **Principal**: Inter (Google Fonts)

### **Imagens**
- **Produtos**: Unsplash (API)
- **Ícones**: Font Awesome

## � **SEO**

- ✅ Meta tags otimizadas
- ✅ Semântica HTML5
- ✅ URLs amigáveis
- ✅ Performance otimizada

## � **Segurança**

- ✅ HTTPS (GitHub Pages)
- ✅ Sem dependências externas críticas
- ✅ Validação de formulários
- ✅ Links seguros

## � **Analytics**

Para adicionar Google Analytics:
```html
<!-- Adicionar no <head> -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

## 🔄 **Atualizações**

### **Como atualizar o site**
1. Faça as alterações nos arquivos
2. Commit e push para GitHub:
```bash
git add .
git commit -m "Update: descrição da alteração"
git push origin main
```
3. Aguarde 2-3 minutos para o deploy automático

## 📝 **Licença**

MIT License - Uso livre e comercial

---

**Desenvolvido por**: LCH INFORMÁTICA  
**Última atualização**: 2024  
**Versão**: 1.0.0
