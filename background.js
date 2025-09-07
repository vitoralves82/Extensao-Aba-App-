// Abre a aba ativa em janela tipo app (popup)
async function openCurrentTabAsApp() {
  try {
    const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
    if (!tab || !tab.url) return;

    // Recupera preferência do usuário
    const { closeOriginal = true } = await chrome.storage.sync.get("closeOriginal");

    await chrome.windows.create({
      url: tab.url,
      type: "popup",
      focused: true,
      width: 1280,
      height: 800
    });

    // Fecha a aba original somente se configurado
    if (closeOriginal) {
      await chrome.tabs.remove(tab.id);
    }
  } catch (err) {
    console.error("Erro ao abrir como app:", err);
  }
}

// Clique no ícone da extensão
chrome.action.onClicked.addListener(openCurrentTabAsApp);

// Mensagem vinda do content.js
chrome.runtime.onMessage.addListener((msg) => {
  if (msg?.type === "OPEN_AS_APP") openCurrentTabAsApp();
});

// Menu de contexto
chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    id: "open-as-app",
    title: "Abrir como App (janela limpa)",
    contexts: ["action", "page"]
  });
});

chrome.contextMenus.onClicked.addListener((info) => {
  if (info.menuItemId === "open-as-app") openCurrentTabAsApp();
});
