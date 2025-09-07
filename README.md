# Abrir como App (Chrome Extension)

## 📌 O que é
Extensão para Google Chrome que permite **abrir a aba atual em uma nova janela limpa (popup)**, sem menus, barra de endereços ou abas adicionais — semelhante ao “modo aplicativo”.  
A aba original é automaticamente **fechada** após a abertura da nova janela.  
Inclui também um **atalho direto (Alt+Shift+A)** que funciona sem precisar configurar nada em `chrome://extensions/shortcuts`.

---

## ⚙️ Funcionalidades
- **Atalho Alt+Shift+A** → abre a aba atual em modo app e fecha a aba original.  
- **Botão da extensão** → um clique e a aba atual abre em modo app.  
- **Menu de contexto** → opção *“Abrir como App (janela limpa)”*.  
- Janela criada no formato **popup**, com foco no conteúdo.  

---

## 📂 Estrutura da Pasta
```
open-as-app/
│── manifest.json      # Configurações da extensão
│── background.js      # Lógica principal (abrir aba + fechar original)
│── content.js         # Captura Alt+Shift+A diretamente na página
│── icon16.png         # Ícone 16x16
│── icon48.png         # Ícone 48x48
│── icon128.png        # Ícone 128x128
│── README.md          # Este arquivo
```

---

## 🚀 Como instalar
1. Abra o Chrome e acesse `chrome://extensions/`.  
2. Ative o **Modo do desenvolvedor** (canto superior direito).  
3. Clique em **Carregar sem compactação**.  
4. Selecione a pasta `open-as-app/`.  
5. O ícone da extensão aparecerá na barra do navegador.  

---

## 🖥️ Como usar
- Na aba desejada, pressione **Alt+Shift+A** → a aba abre em uma nova janela tipo app e a original é fechada.  
- Clique no ícone da extensão → mesmo efeito.  
- Clique com o botão direito na página → *Abrir como App (janela limpa)*.  

---

## ℹ️ Observações
- O Chrome exige que atalhos globais sejam configurados em `chrome://extensions/shortcuts`.  
- Nesta extensão, o **content.js já captura Alt+Shift+A** diretamente nas páginas, dispensando essa configuração.  
- Caso queira outro atalho, basta editar o `content.js`.
