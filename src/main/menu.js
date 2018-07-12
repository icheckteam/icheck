const { app, Menu, shell } = require("electron")

module.exports = function(mainWindow) {
  let template = [
    {
      label: "Ichain Supply Chain Traceability",
      submenu: [
        {
          label: "About Ichain",
          selector: "orderFrontStandardAboutPanel:",
          click: () => openAboutMenu(mainWindow)
        },
        { type: "separator" },
        {
          label: "Quit",
          accelerator: "Command+Q",
          click: () => app.quit()
        }
      ]
    },
    {
      label: "Edit",
      submenu: [
        {
          label: "Cut",
          accelerator: "CmdOrCtrl+X",
          selector: "cut:"
        },
        {
          label: "Copy",
          accelerator: "CmdOrCtrl+C",
          selector: "copy:"
        },
        {
          label: "Paste",
          accelerator: "CmdOrCtrl+V",
          selector: "paste:"
        }
      ]
    },
    {
      label: "Help",
      submenu: [
        {
          label: "Report An Issue",
          click() {
            shell.openExternal("https://github.com/icheckteam/icheck/issues/new")
          }
        },
        {
          label: "View Application Log",
          click() {
            shell.openItem(global.root + "/main.log")
          }
        }
      ]
    }
  ]

  let menu = Menu.buildFromTemplate(template)
  Menu.setApplicationMenu(menu)
}

function openAboutMenu(mainWindow) {
  mainWindow.webContents.send("open-about-menu")
}
