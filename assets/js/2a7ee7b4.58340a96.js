"use strict";(self.webpackChunkserenity_users_guide=self.webpackChunkserenity_users_guide||[]).push([[4541],{3905:(e,r,n)=>{n.d(r,{Zo:()=>c,kt:()=>m});var t=n(7294);function i(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function o(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function a(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?o(Object(n),!0).forEach((function(r){i(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function s(e,r){if(null==e)return{};var n,t,i=function(e,r){if(null==e)return{};var n,t,i={},o=Object.keys(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||(i[n]=e[n]);return i}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=t.createContext({}),d=function(e){var r=t.useContext(l),n=r;return e&&(n="function"==typeof e?e(r):a(a({},r),e)),n},c=function(e){var r=d(e.components);return t.createElement(l.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},u=t.forwardRef((function(e,r){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=d(n),m=i,g=u["".concat(l,".").concat(m)]||u[m]||p[m]||o;return n?t.createElement(g,a(a({ref:r},c),{},{components:n})):t.createElement(g,a({ref:r},c))}));function m(e,r){var n=arguments,i=r&&r.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=u;var s={};for(var l in r)hasOwnProperty.call(r,l)&&(s[l]=r[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var d=2;d<o;d++)a[d]=n[d];return t.createElement.apply(null,a)}return t.createElement.apply(null,n)}u.displayName="MDXCreateElement"},5202:(e,r,n)=>{n.r(r),n.d(r,{contentTitle:()=>a,default:()=>c,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var t=n(7462),i=(n(7294),n(3905));const o={id:"driver_config",title:"Configuring Selenium WebDriver",sidebar_position:8},a=void 0,s={unversionedId:"guide/driver_config",id:"guide/driver_config",isDocsHomePage:!1,title:"Configuring Selenium WebDriver",description:"Selenium WebDriver lets you run your tests in a variety of browsers, each with a variety of configuration options. In this section we will look at how to configure your WebDriver driver in Serenity.",source:"@site/docs/guide/driver_config.md",sourceDirName:"guide",slug:"/guide/driver_config",permalink:"/docs/guide/driver_config",editUrl:"https://github.com/serenity-bdd/documentation/docs/guide/driver_config.md",tags:[],version:"current",sidebarPosition:8,frontMatter:{id:"driver_config",title:"Configuring Selenium WebDriver",sidebar_position:8},sidebar:"tutorialSidebar",previous:{title:"Serenity Page Elements",permalink:"/docs/guide/page_elements"},next:{title:"Running Cucumber scenarios with Serenity",permalink:"/docs/guide/cucumber"}},l=[{value:"Configuring the WebDriver drivers",id:"configuring-the-webdriver-drivers",children:[{value:"Automatic driver downloads",id:"automatic-driver-downloads",children:[]},{value:"Configuring driver binaries by hand",id:"configuring-driver-binaries-by-hand",children:[]}]},{value:"Specifying W3C properties",id:"specifying-w3c-properties",children:[]},{value:"Configuring Chrome",id:"configuring-chrome",children:[{value:"Configuring Chromedriver arguments",id:"configuring-chromedriver-arguments",children:[]},{value:"Specifying the Chromedriver binary",id:"specifying-the-chromedriver-binary",children:[]},{value:"Blocking popup-windows",id:"blocking-popup-windows",children:[]},{value:"Configuring Chrome preferences",id:"configuring-chrome-preferences",children:[]},{value:"Configuring timeouts",id:"configuring-timeouts",children:[]},{value:"Configuring ChromeDriver logging preferences",id:"configuring-chromedriver-logging-preferences",children:[]}]},{value:"Condiguring Microsoft Edge",id:"condiguring-microsoft-edge",children:[]},{value:"Configuring Firefox",id:"configuring-firefox",children:[]}],d={toc:l};function c(e){let{components:r,...n}=e;return(0,i.kt)("wrapper",(0,t.Z)({},d,n,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Selenium WebDriver lets you run your tests in a variety of browsers, each with a variety of configuration options. In this section we will look at how to configure your WebDriver driver in Serenity."),(0,i.kt)("p",null,"The simplest way to configure the driver you want to use is in your project's ",(0,i.kt)("inlineCode",{parentName:"p"},"serenity.conf")," file (which you will find in ",(0,i.kt)("inlineCode",{parentName:"p"},"src/test/resources")," folder)."),(0,i.kt)("p",null,"Basic configuration options go in the ",(0,i.kt)("inlineCode",{parentName:"p"},"webdriver")," section. For example, to run your tests with Chrome, you set the ",(0,i.kt)("inlineCode",{parentName:"p"},"webdriver.driver"),' property to "chrome":'),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-hocon"},'webdriver {\n    driver = "chrome"\n}\n')),(0,i.kt)("p",null,"All of the standard WebDriver browsers are supported:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Browser"),(0,i.kt)("th",{parentName:"tr",align:null},"Value"),(0,i.kt)("th",{parentName:"tr",align:null},"Example"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Chrome"),(0,i.kt)("td",{parentName:"tr",align:null},"chrome"),(0,i.kt)("td",{parentName:"tr",align:null},'webdriver.driver = "chrome"')),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Firefox"),(0,i.kt)("td",{parentName:"tr",align:null},"firefox"),(0,i.kt)("td",{parentName:"tr",align:null},'webdriver.driver = "firefox"')),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Microsoft Edge"),(0,i.kt)("td",{parentName:"tr",align:null},"edge"),(0,i.kt)("td",{parentName:"tr",align:null},'webdriver.driver = "edge"')),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Internet Explorer"),(0,i.kt)("td",{parentName:"tr",align:null},"IE"),(0,i.kt)("td",{parentName:"tr",align:null},'webdriver.driver = "IE"')),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Safari"),(0,i.kt)("td",{parentName:"tr",align:null},"safari"),(0,i.kt)("td",{parentName:"tr",align:null},'webdriver.driver = "safari"')))),(0,i.kt)("h2",{id:"configuring-the-webdriver-drivers"},"Configuring the WebDriver drivers"),(0,i.kt)("p",null,"When you run a WebDriver test against almost any driver, you need an OS-specific binary file to act as an intermediary between your test and the browser you want to manipulate. The main drivers, and where you can download them from, are listed below:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Browser"),(0,i.kt)("th",{parentName:"tr",align:null},"Driver"),(0,i.kt)("th",{parentName:"tr",align:null},"Location"),(0,i.kt)("th",{parentName:"tr",align:null},"System Property"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Chrome"),(0,i.kt)("td",{parentName:"tr",align:null},"chromedriver"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"http://chromedriver.chromium.org"},"http://chromedriver.chromium.org")),(0,i.kt)("td",{parentName:"tr",align:null},"webdriver.chrome.driver")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Firefox"),(0,i.kt)("td",{parentName:"tr",align:null},"geckodriver"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://github.com/mozilla/geckodriver/releases"},"https://github.com/mozilla/geckodriver/releases")),(0,i.kt)("td",{parentName:"tr",align:null},"webdriver.gecko.driver")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Microsoft Edge"),(0,i.kt)("td",{parentName:"tr",align:null},"msedgedriver"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://developer.microsoft.com/en-us/microsoft-edge/tools/webdriver/"},"https://developer.microsoft.com/en-us/microsoft-edge/tools/webdriver/")),(0,i.kt)("td",{parentName:"tr",align:null},"webdriver.ie.driver")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Internet Explorer"),(0,i.kt)("td",{parentName:"tr",align:null},"IEDriverServer"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://github.com/SeleniumHQ/selenium/wiki/InternetExplorerDriver"},"https://github.com/SeleniumHQ/selenium/wiki/InternetExplorerDriver")),(0,i.kt)("td",{parentName:"tr",align:null},"webdriver.ie.driver")))),(0,i.kt)("h3",{id:"automatic-driver-downloads"},"Automatic driver downloads"),(0,i.kt)("p",null,"Serenity integrates with ",(0,i.kt)("a",{parentName:"p",href:"https://bonigarcia.dev/webdrivermanager/"},"WebDriverManager")," to automatically download and install the appropriate driver binaries for the specified driver."),(0,i.kt)("h3",{id:"configuring-driver-binaries-by-hand"},"Configuring driver binaries by hand"),(0,i.kt)("p",null,"If you cannot or do not want to download the WebDriver binaries automatically using WebDriverManager (for example, if you are in a corporate network which does not have access to the WebDriverManager binaries), you can download the binaries and configure them directly in the ",(0,i.kt)("inlineCode",{parentName:"p"},"serenity.conf")," file."),(0,i.kt)("p",null,"In this case you need to either have the correct driver binary on your system path, or provide the path to the binary using the system property shown in the table above. For example, your serenity.conf file might contain the following:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-hocon"},"webdriver.gecko.driver=/path/to/my/geckodriver\n")),(0,i.kt)("p",null,"However, adding a system path to your serenity.properties file is poor practice, as it means your tests will only run if the specified directory and binary exists, and that you are running the tests on the correct operating system. This obviously makes little sense if you are running your tests both locally, and on a CI environment."),(0,i.kt)("p",null,"A more robust approach is to have your drivers in your source code, but have different drivers per OS. Serenity allows you to pass driver-specific properties to a driver, as long as they are prefixed with drivers.",(0,i.kt)("em",{parentName:"p"},"os"),". For example, the following line will configure the webdriver.chrome.driver if you are running your tests under windows."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-hocon"},"drivers {\n  windows {\n    webdriver.chrome.driver = src/test/resources/webdriver/windows/chromedriver.exe\n  }\n")),(0,i.kt)("p",null,"You can easily configure different binaries for different operating systems like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-hocon"},"drivers {\n  windows {\n    webdriver.chrome.driver = src/test/resources/webdriver/windows/chromedriver.exe\n  }\n  mac {\n    webdriver.chrome.driver = src/test/resources/webdriver/mac/chromedriver\n  }\n  linux {\n    webdriver.chrome.driver = src/test/resources/webdriver/linux/chromedriver\n  }\n}\n")),(0,i.kt)("p",null,"This approach also works when you have more than one driver to configure. Suppose you need to run tests on three environments, using Firefox or Windows. One convenient approach is to store your drivers in a directory structure under src/test/resources similar to the following:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"src/test/resources\n\u2514\u2500\u2500 webdriver\n    \u251c\u2500\u2500 linux\n    \u2502   \u251c\u2500\u2500 chromedriver\n    \u2502   \u2514\u2500\u2500 geckodriver\n    \u251c\u2500\u2500 mac\n    \u2502   \u251c\u2500\u2500 chromedriver\n    \u2502   \u2514\u2500\u2500 geckkodriver\n    \u2514\u2500\u2500 windows\n        \u251c\u2500\u2500 chromedriver.exe\n        \u2514\u2500\u2500 geckodriver.exe\n")),(0,i.kt)("p",null,"This means that your tests will not need the webdriver binaries to be installed on every machine."),(0,i.kt)("p",null,"The corresponding ",(0,i.kt)("inlineCode",{parentName:"p"},"serenity.conf")," configuration for both browsers and each operating system would look like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-hocon"},"drivers {\n  windows {\n    webdriver.chrome.driver = src/test/resources/webdriver/windows/chromedriver.exe\n    webdriver.gecko.driver = src/test/resources/webdriver/windows/geckodriver.exe\n  }\n  mac {\n    webdriver.chrome.driver = src/test/resources/webdriver/mac/chromedriver\n    webdriver.gecko.driver = src/test/resources/webdriver/mac/geckodriver\n  }\n  linux {\n    webdriver.chrome.driver = src/test/resources/webdriver/linux/chromedriver\n    webdriver.gecko.driver = src/test/resources/webdriver/linux/geckodriver\n  }\n}\n")),(0,i.kt)("h2",{id:"specifying-w3c-properties"},"Specifying W3C properties"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://www.w3.org/TR/webdriver/#capabilities"},"W3C capabilities")," are a standard set of driver features that every drive implementation must support. You can configure W3C capabilities in the ",(0,i.kt)("inlineCode",{parentName:"p"},"wenbdriver.capabilities")," section of your ",(0,i.kt)("inlineCode",{parentName:"p"},"serenity.conf")," file, as shown here:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-hocon"},'webdriver {\n  capabilities {\n    browserName = "Chrome"\n    browserVersion = "103.0"\n    platformName = "Windows 11"\n    acceptInsecureCerts = true\n  }\n}\n')),(0,i.kt)("p",null,"You can define timeouts in a dedicated subsection like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-hocon"},'webdriver {\n  capabilities {\n    browserName = "Chrome"\n    browserVersion = "103.0"\n    platformName = "Windows 11"\n    timeouts {\n      script = 30000\n      pageLoad = 300000\n      implicit = 2000\n    }\n  }\n}\n')),(0,i.kt)("p",null,"You can also define proxy configuration details in the ",(0,i.kt)("inlineCode",{parentName:"p"},"proxy")," section:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-hocon"},'webdriver {\n  capabilities {\n    browserName = "Chrome"\n    browserVersion = "103.0"\n    platformName = "Windows 11"\n    proxy {\n      proxyType = "30000"\n      httpProxy = "myproxy.myorgcom:3128"\n    }\n  }\n}\n')),(0,i.kt)("h2",{id:"configuring-chrome"},"Configuring Chrome"),(0,i.kt)("p",null,"You can use the special ",(0,i.kt)("inlineCode",{parentName:"p"},'"goog:chromeOptions"')," capability to define any of the ",(0,i.kt)("a",{parentName:"p",href:"https://chromedriver.chromium.org/capabilities"},"ChromeDriver options")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-hocon"},'webdriver {\n  capabilities {\n    browserName = "Chrome"\n    browserVersion = "103.0"\n    platformName = "Windows 11"\n    screenResolution = "1280x1024"\n\n    "goog:chromeOptions" {\n      args = [ "window-size=1000,800", "headless" ]\n      binary = ${HOME}/path/to/chromedriver\n      detach = true\n      localState = {\n        cart-contents = [1,2,3]\n      }\n    }\n  }\n}\n')),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"In older versions of Serenity, we used the ",(0,i.kt)("inlineCode",{parentName:"p"},"chrome.switches")," property to define Chrome options. This property is not supported as of version 3.3.0, so you should use the W3C standard ",(0,i.kt)("inlineCode",{parentName:"p"},'"goog:chromeOptions"')," capability for this instead."))),(0,i.kt)("h3",{id:"configuring-chromedriver-arguments"},"Configuring Chromedriver arguments"),(0,i.kt)("p",null,"You can define ChromeDriver arguments in the ",(0,i.kt)("inlineCode",{parentName:"p"},"args")," property to set various startup options. For example, to start Chrome in maximized mode, you can use the ",(0,i.kt)("inlineCode",{parentName:"p"},"start-maximized"),' argument. Or if you want to run Chrome in headless mode, you can use the "headless" argument:'),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-hocon"},'webdriver {\n  capabilities {\n    ...\n    "goog:chromeOptions" {\n      args = [ "start-maximized", "headless"]\n    }\n  }\n}\n')),(0,i.kt)("p",null,"Some of the more commonly used Chrome startup arguments include:"),(0,i.kt)("p",null,"| Argument               | Usage |\n| start-maximized        | Opens Chrome in maximize mode |\n| incognito              | Opens Chrome in incognito mode |\n| headless               | Opens Chrome in headless mode |\n| disable-extensions     | Disables existing extensions on Chrome browser |\n| disable-popup-blocking | Disables pop-ups displayed on Chrome browser |\n| make-default-browser   | Makes Chrome default browser |\n| version                | Prints chrome browser version |\n| disable-infobars       | Prevents Chrome from displaying the notification \u2018Chrome is being controlled by automated software |"),(0,i.kt)("h3",{id:"specifying-the-chromedriver-binary"},"Specifying the Chromedriver binary"),(0,i.kt)("p",null,"Serenity uses WebDriverManager, so you rarely need to specify the chromedriver binary yourself. However if you need to, you can do this in the capabilities section"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-hocon"},'webdriver {\n  capabilities {\n    ...\n    "goog:chromeOptions" {\n      binary = /path/to/chromedriver\n    }\n  }\n}\n')),(0,i.kt)("p",null,"Note that you can use environment variables in TypesafeConfig to make your path more portable, e.g."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-hocon"},'webdriver {\n  capabilities {\n    ...\n    "goog:chromeOptions" {\n      binary = ${HOME}/path/to/chromedriver\n    }\n  }\n}\n')),(0,i.kt)("h3",{id:"blocking-popup-windows"},"Blocking popup-windows"),(0,i.kt)("p",null,"By default, ChromeDriver configures Chrome to allow pop-up windows. If you want to block pop-ups (i.e., restore the normal Chrome behavior when it is not controlled by ChromeDriver), you can use the ",(0,i.kt)("inlineCode",{parentName:"p"},"excludedSwitches")," option as follows:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-hocon"},'webdriver {\n  capabilities {\n    ...\n    "goog:chromeOptions" {\n      excludedSwitches = ["disable-popup-blocking"]\n    }\n  }\n}\n')),(0,i.kt)("h3",{id:"configuring-chrome-preferences"},"Configuring Chrome preferences"),(0,i.kt)("p",null,"Some driver behaviour is specified in the Chrome preferences. For example, a common usage of the preferences section is to define a download directory, like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-hocon"},'webdriver {\n  capabilities {\n    ...\n    "goog:chromeOptions" {\n      prefs {\n        download.default_directory = ${HOME}/some/download/dir\n        download.prompt_for_download = true\n      }\n  }\n}\n')),(0,i.kt)("h3",{id:"configuring-timeouts"},"Configuring timeouts"),(0,i.kt)("p",null,"You can configure driver timeouts using standard W3C capabilities like this (all values are in milliseconds):"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-hocon"},"webdriver {\n    capabilities {\n        timeouts {\n           script = 30000\n           pageLoad = 300000\n           implicit = 0\n       }\n   }\n}\n")),(0,i.kt)("h3",{id:"configuring-chromedriver-logging-preferences"},"Configuring ChromeDriver logging preferences"),(0,i.kt)("p",null,"You can also configure the Chrome logging preferences using the ",(0,i.kt)("inlineCode",{parentName:"p"},"goog:loggingPrefs")," option."),(0,i.kt)("h2",{id:"condiguring-microsoft-edge"},"Condiguring Microsoft Edge"),(0,i.kt)("p",null,"Microsoft Edge is a Chromium driver, so the configuration is very similar to Chrome. The main difference is the use of ",(0,i.kt)("inlineCode",{parentName:"p"},'"ms:edgeOptions\'"')," instead of ",(0,i.kt)("inlineCode",{parentName:"p"},'"goog:chromeOptions"'),". A typical configuration is shown below:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-hocon"},'webdriver {\n  capabilities {\n    browserName = "MicrosoftEdge"\n    "ms:edgeOptions" {\n      args = ["test-type", "ignore-certificate-errors", "headless",\n        "incognito", "disable-infobars", "disable-gpu", "disable-default-apps", "disable-popup-blocking"]\n    }\n  }\n}\n\n')),(0,i.kt)("h2",{id:"configuring-firefox"},"Configuring Firefox"),(0,i.kt)("p",null,"Firefox uses the ",(0,i.kt)("inlineCode",{parentName:"p"},'"moz:firefoxOptions"')," capability to define browser-specific option. A sample configuration is shown below:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-hocon"},'webdriver {\n  capabilities {\n    browserName = "firefox"\n\n    timeouts {\n      implicit = 1000\n      script = 1000\n      pageLoad = 1000\n    }\n    pageLoadStrategy = "normal"\n    acceptInsecureCerts = true\n    unhandledPromptBehavior = "dismiss"\n    strictFileInteractability = true\n\n    "moz:firefoxOptions" {\n      args = ["-headless"],\n      prefs {\n        "javascript.options.showInConsole": false\n      },\n      log {"level": "info"},\n    }\n  }\n}\n')))}c.isMDXComponent=!0}}]);