"use strict";

var gui = require('nw.gui');
var win = gui.Window.get();
var fs = require("fs");
var path = require('path');

class WindowApi {
  static menu() {    
    var windowMenu = new gui.Menu({
      type: 'menubar'
    });        
    
    var closeMenu = new gui.Menu();
    windowMenu.append(new gui.MenuItem({ 
        label: 'App',
        submenu: closeMenu
    }));
    closeMenu.append(new gui.MenuItem({ 
        label: 'Close',
        click: function() {
          win.close();
        }
    }));

    win.menu = windowMenu;
  }

  static setHeight(h) {  
      win.height = h;    
  }

  static init() {
    win.resizeTo(600, 450);
    WindowApi.menu();
  }
}
