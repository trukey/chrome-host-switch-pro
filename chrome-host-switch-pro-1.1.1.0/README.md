# Host Switch Pro - Chrome Extension

通过该 Chrome 扩展，快捷方便的切换、设置 host 代理规则，而不用修改系统 hosts 文件，方便web开发人员在 各种/测试/开发/线上 环境快速切换

通过 [Chrome Store](https://chrome.google.com/webstore/detail/host-switch-pro/lnhklcmoioodffgfdcblojidakcfnhfh?hl=zh-CN) 安装

无法通过 Chrome Store 安装或者更新的朋友，可以尝试使用 百度浏览器或者360之类的支持 Chrome 扩展的浏览器：
360 浏览器/百度浏览器等其他支持 Chrome 扩展的浏览器，[下载 crx 文件](https://github.com/trukey/chrome-host-switch-pro)，转至浏览器扩展程序管理界面，将下载的 crx 文件拖拽至该页面中释放，即可根据提示安装使用。

批量添加规则（IP:端口、域名、tag、备注分别用空格隔开；多个 tag 用英文逗号隔开；备注间不能有空格）：
```
#tag
127.0.0.1:8888 www.xyz.com #备注
#127.0.0.1 *.xyz.com #备注
192.168.1.2 www.xyz.com #备注
```

Install from [Chrome Store](https://chrome.google.com/webstore/detail/host-switch-pro/lnhklcmoioodffgfdcblojidakcfnhfh?hl=zh-CN)

Change the hosts rules in Chrome. It's easy, and effect immediately.

I just want to make the web developers work happy when they often need to switch hosts between develop/test/production environment.

One more feature is that you can set a local proxy for some kind of domain, For example, if you use Fiddler AutoResponder, you may set the domain IP as 127.0.0.1:8888.

By the way:

1. if you use windows system and just want to easy to manage you system hosts config, I recommend a windows tool called [SwitchHosts!](http://oldj.net/article/switchhosts/)

2. If you use Fiddler, it had a hosts tool under menu Tools > HOSTS, but I think it's difficult to manage the host rules.

Sorry for my Poor English, learn more from the screenshots please.

Any questions/issues let me know: https://github.com/trukey/chrome-host-switch-pro

Based on [Chrome Host Switch](https://github.com/shendongming/chrome-host-switch)

